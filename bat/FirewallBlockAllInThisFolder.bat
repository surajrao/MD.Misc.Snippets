REM Block all exe files in this folder, in the Windows Firewall

@ setlocal enableextensions 
@ cd /d "%~dp0"

for /R %%a in (*.exe) do (
    netsh advfirewall firewall add rule name="Blocked with Batchfile %%a" dir=out program="%%a" action=block
)