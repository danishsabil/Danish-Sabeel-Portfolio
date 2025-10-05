@echo off
echo 🔧 Fixing Netflix Portfolio Dependencies
echo ======================================

echo.
echo Installing missing dependencies...
npm install critters

if %errorlevel% neq 0 (
    echo ❌ Failed to install critters
    echo.
    echo Trying alternative approach...
    npm install --force
)

echo.
echo ✅ Dependencies fixed!
echo.
echo Starting development server...
echo Open http://localhost:3000 in your browser
echo.
echo Press Ctrl+C to stop the server
echo.

npm run dev
