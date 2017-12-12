using System;
using System.Drawing;
using System.Threading;

// The 'windowHandle' parameter will contain the window handle for the:
//   - Active window when run by hotkey
//   - Trigger target when run by a Trigger rule
//   - TitleBar Button owner when run by a TitleBar Button
//   - Jump List owner when run from a Taskbar Jump List
//   - Currently focused window if none of these match
public static class DisplayFusionFunction
{
    private const int ToolbarHeight = 30;
    
    private enum Actions {
        None,
        Maximize,
        Minimize,
        MaxMin
    }
    
    public static void Run(IntPtr windowHandle)
    {
        uint[] monitorIds = BFS.Monitor.GetMonitorIDs();
        Rectangle[] monitorBounds = BFS.Monitor.GetMonitorBounds();

        // Get currently focused window.
        IntPtr focus = BFS.Window.GetFocusedWindow();

        // Left Monitor Setup
        Manage("*SourceTree*", monitorIds[0], Actions.Minimize);
        Manage("*SmartGit*", monitorIds[0], Actions.Minimize);
        Manage("*Google Chrome*", monitorIds[0]);
        Manage("*Developer Tools*", monitorIds[0]); 
        
        // Middle Monitor Setup
        Manage("* Microsoft Visual Studio*", monitorIds[1], Actions.Maximize);
        Manage("*Notepad++*", monitorBounds[1], 100);
        
        // Right Monitor Setup
        Manage("*Outlook*", "Google Keep", monitorBounds[2], 500);
        Manage("*WhatsApp*", monitorIds[2], Actions.MaxMin);

        // Windows to close
        Manage("*Slack*");
        
        // After moving
        Cleanup();

        // Restore focus
        BFS.Window.Focus(focus);
    }
    
    // #### Move functions ####
    
    
    // Close the specified window
    private static void Manage(string text)
    {
        IntPtr[] windows = BFS.Window.GetWindowsByText(text);
        for(int i = 0; i < windows.Length; i++)
        {
            BFS.Window.Close(windows[i]);
        }
    }
    
    // Move a window to a monitor.
    private static void Manage(string text, uint monitorId)
    {
        Manage(text, monitorId, Actions.None);
    }
    
    // Move a window to a monitor and minimize / maximize it.
    private static void Manage(string text, uint monitorId, Actions resize)
    {
        if(resize == Actions.MaxMin)
        {
            Manage(text, monitorId, Actions.Minimize, 500);            
            resize = Actions.Maximize;
        }
        IntPtr[] windows = BFS.Window.GetWindowsByText(text);
        for(int i = 0; i < windows.Length; i++)
        {
            BFS.Window.MoveToMonitor(monitorId, windows[i]);
            if(resize == Actions.None)
                continue;
            else if(resize == Actions.Maximize)
                BFS.Window.Maximize(windows[i]);
            else if(resize == Actions.Minimize)
                BFS.Window.Minimize(windows[i]);
        }
    }
    
    // Move a window to a monitor and minimize / maximize it with a delay.
    private static void Manage(string text, uint monitorId, Actions resize, int timeout)
    {
        Timer timer = null; 
        timer = new System.Threading.Timer(
            (obj) =>
            {
                Manage(text, monitorId, resize);
                timer.Dispose();
            }, 
            null,
            timeout,
            Timeout.Infinite
        );
    }
    
    // Move a window to a monitor and resize it with a margin of 0.
    private static void Manage(string text, Rectangle monitorBounds)
    {
        Manage(text, monitorBounds, 0);
    }
    
    // Move a window to a monitor and resize it with a margin.
    private static void Manage(string text, Rectangle monitorBounds, int margin)
    {
        Manage(text, monitorBounds, margin, margin, margin, margin);
    }
    
    // Setup 2 windows side by side on the same monitor.
    private static void Manage(string leftWindow, string rightWindow, Rectangle monitorBounds, int leftWindowWidth)
    {
        Manage(leftWindow, monitorBounds, 0, 0, 0, leftWindowWidth);
        Manage(rightWindow, monitorBounds, 0, -leftWindowWidth, 0, 0);    
    }
    
    // Move a window to a monitor and resize it with a margin.
    // Margin is set like css (top, right, bottom, left)
    // A negative margin means "X pixels from the opposite side"
    private static void Manage(string text, Rectangle monitorBounds, int top, int right, int bottom, int left)
    {
        IntPtr[] windows = BFS.Window.GetWindowsByText(text);
        
        for(int i = 0; i < windows.Length; i++)
        {
            int calcLeft   = left >= 0 ? left : monitorBounds.Width  + left;
            int calcTop    = top  >= 0 ? top  : monitorBounds.Height + top;
            int calcWidth  = (monitorBounds.Width  - (right + calcLeft)) % monitorBounds.Width;
            int calcHeight = (monitorBounds.Height - (top   + calcTop))  % monitorBounds.Height;
        
            BFS.Window.SetSizeAndLocation(
                windows[i],
                monitorBounds.X + calcLeft,
                monitorBounds.Y + calcTop,
                calcWidth > 0 ? calcWidth  : monitorBounds.Width,
                calcHeight> 0 ? calcHeight : monitorBounds.Height
            );
        }
    }
    
    // Close remaining "SWT_Window_" instances
    private static void Cleanup()
    {
        Manage("SWT_Window_*");
    }
}