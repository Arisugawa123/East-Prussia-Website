@echo off
echo Setting up Git repository for East Prussia Website...
echo.

echo Step 1: Initializing Git repository...
git init

echo Step 2: Adding all files...
git add .

echo Step 3: Creating initial commit...
git commit -m "Initial commit: Complete East Prussian Military Website

- Professional military-themed website for Ostpreußisches Landmilizbataillon
- Historical About section with 18th-century East Prussian context
- Complete military rank structure with proper chain of command
- Season XII battle schedule with flag displays
- Discord-only communication system
- Enhanced footer with Prussian Civil Flag (1701-1935)
- Responsive design with military styling
- All recruitment processes and group links included"

echo Step 4: Setting main branch...
git branch -M main

echo Step 5: Adding remote origin...
git remote add origin https://github.com/Arisugawa123/East-Prussia-Website.git

echo Step 6: Pushing to GitHub...
git push -u origin main

echo.
echo Git setup complete! Your website has been pushed to GitHub.
pause