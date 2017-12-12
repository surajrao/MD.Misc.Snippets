@echo off
TITLE Folder creation
color 0A
echo.
for /f %%A in ('"prompt $H &echo on &for %%B in (1) do rem"') do set BS=%%A

set /p folderName=.%BS%  Enter folder name: 
set folder=%date:~-4,4%-%date:~-7,2%-%date:~-10,2% - %folderName%

mkdir "%folder%"
exit