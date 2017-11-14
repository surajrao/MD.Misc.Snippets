@echo off
echo.

cd C:\DEV\Android\Sdk\emulator\

emulator.exe -list-avds > avds.txt

echo  Available Android Virtual Devices:
set /a c=0
setlocal ENABLEDELAYEDEXPANSION
FOR /F "tokens=1 usebackq" %%i in (avds.txt) do (
  set /a c=c+1
  echo     !c!: %%i
)
endlocal

echo.
set /P id=" Select Android Virtual Device: "
echo.

set /a index=%id%-1

set "avds="
set "skip="
if %index% geq 1 set "skip=skip=%index%"
for /F "%skip% delims=" %%i in (avds.txt) do if not defined avd set "avd=%%i"

del avds.txt

echo Starting %avd%
echo.

start emulator -avd %avd%