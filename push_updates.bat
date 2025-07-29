@echo off
echo ========================================
echo  East Prussian Regiment - Git Push
echo ========================================
echo.

echo Checking git status...
git status
echo.

echo Adding all changes...
git add .
echo.

echo Committing changes...
git commit -m "Update website with historical accuracy and improved design

- Replaced fake information with accurate historical content about Ostpreußisches Landmilizbataillon (1757-1758)
- Added proper academic references and sources throughout all sections
- Enhanced staff login modal with centered design and access code authentication
- Updated military hierarchy section with 6 authentic Prussian military principles
- Fixed Legacy section title and removed inaccurate 2025 establishment date
- Improved text styling and removed distracting colored containers
- Enhanced home section with better typography and removed decorative objects
- Updated Eternal Values with authentic German military principles
- Fixed rank structure by moving Junker to Senior NCOs section
- Improved overall historical accuracy and professional appearance"
echo.

echo Pushing to repository...
git push origin main
echo.

if %ERRORLEVEL% EQU 0 (
    echo ========================================
    echo  SUCCESS: Updates pushed successfully!
    echo ========================================
) else (
    echo ========================================
    echo  ERROR: Push failed. Check your setup.
    echo ========================================
)

echo.
echo Press any key to exit...
pause >nul