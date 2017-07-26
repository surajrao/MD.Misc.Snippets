using System;
using System.Drawing;

// The 'windowHandle' parameter will contain the window handle for the:
//   - Active window when run by hotkey
//   - Trigger target when run by a Trigger rule
//   - TitleBar Button owner when run by a TitleBar Button
//   - Jump List owner when run from a Taskbar Jump List
//   - Currently focused window if none of these match
public static class DisplayFusionFunction
{
    private const int ToolbarHeight = 30;
    
	public static void Run(IntPtr windowHandle)
	{
        static uint[] monitorIds = BFS.Monitor.GetMonitorIDs();
        static Rectangle[] monitorBounds = BFS.Monitor.GetMonitorBounds();

		// Get currently focused window.
        IntPtr focus = BFS.Window.GetFocusedWindow();

		// Left Monitor Setup
        Move("*SourceTree*", monitorIds[0], false);
        Move("*Google Chrome*", monitorIds[0]);
        Move("*Developer Tools*", monitorIds[0]); 
		
		// Middle Monitor Setup
        Move("* Microsoft Visual Studio*", monitorIds[1], true);
        Move("*Notepad++*", monitorBounds[1], 100);
        
		// Right Monitor Setup
		Move("*Outlook*", "Google Keep", monitorBounds[2], 500);

        // Restore focus
        BFS.Window.Focus(focus);
	}
	
    // #### Move functions ####
	
	// Move a window to a monitor and minimize / maximize it.
	// bool? maximize:
	//    null:  keep the same size
	//    true:  maximize the window
	//    false: minimize the window
	private static void Move(string text, uint monitorId, bool? maximize = null)
	{
        IntPtr[] windows = BFS.Window.GetWindowsByText(text);
        for(int i = 0; i < windows.Length; i++)
        {
            BFS.Window.MoveToMonitor(monitorId, windows[i]);
            if(maximize.HasValue){
                if(maximize.Value)
                    BFS.Window.Maximize(windows[i]);
                else
                    BFS.Window.Minimize(windows[i]);
                    
            }
        }
	}
	
	// Move a window to a monitor and resize it with a margin.
	private static void Move(string text, Rectangle monitorBounds, int margin)
	{
        Move(text, monitorBounds, margin, margin, margin, margin);
	}
	
	// Setup 2 windows side by side on the same monitor.
	private static void Move(string leftWindow, string rightWindow, Rectangle monitorBounds, int leftWindowWidth)
	{
        Move(leftWindow, monitorBounds, 0, 0, 0, leftWindowWidth);
        Move(leftWindow, monitorBounds, 0, -leftWindowWidth, 0, 0);	
	}
	
	// Move a window to a monitor and resize it with a margin.
	// Margin is set like css (top, right, bottom, left)
	// A negative margin means "X pixels from the opposite side"
	private static void Move(string text, Rectangle monitorBounds, int top, int right, int bottom, int left)
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
}
