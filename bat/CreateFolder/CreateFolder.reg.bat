@echo off

REG ADD HKEY_CLASSES_ROOT\Directory\Background\shell\CreateFolder /ve /t REG_SZ /d "&Create folder with date" /f
REG ADD HKEY_CLASSES_ROOT\Directory\Background\shell\CreateFolder /v Icon /t REG_SZ /d "%SystemRoot%\\System32\\shell32.dll,279" /f
REG ADD HKEY_CLASSES_ROOT\Directory\Background\shell\CreateFolder\command /ve /t REG_SZ /d "%~dp0\CreateFolder.bat \"%V\"" /f
pause