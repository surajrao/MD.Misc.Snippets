@echo off
echo.

cd C:\DEV\Android\Sdk\emulator\

REM ╔═══════════╗
REM ║ List AVDs ║
REM ╚═══════════╝

emulator.exe -list-avds > avds.txt

echo  Available Android Virtual Devices:
set /a c=0
setlocal ENABLEDELAYEDEXPANSION
FOR /F "tokens=1 usebackq" %%i in (avds.txt) do (
  set /a c=c+1
  echo     !c!: %%i
)
endlocal

REM ╔════════════╗
REM ║ Select AVD ║
REM ╚════════════╝

echo.
set /P id=" Select Android Virtual Device: "
echo.

set /a index=%id%-1

set "avds="
set "skip="
if %index% geq 1 set "skip=skip=%index%"
for /F "%skip% delims=" %%i in (avds.txt) do if not defined avd set "avd=%%i"

del avds.txt

REM ╔══════════════════╗
REM ║ Start Chosen AVD ║
REM ╚══════════════════╝

echo Starting %avd%
echo.

start "%avd%" emulator -avd %avd%

REM ╔══════════════╗
REM ║ Start LogCat ║
REM ╚══════════════╝

title Logger: Android Virtual Device
echo Starting LogCat
echo.
cd ..\platform-tools

adb logcat browser:V *:S