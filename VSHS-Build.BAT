echo O
REM ***********************************************************
REM *** THIS SCRIPT WILL BUILD THE VSHS NODE APPLICATION ******
REM ***********************************************************
ECHO BEGINING DEPLOYMENT

ECHO CHANGING DIRECTORIES
cd D:\WebSites\VSHS

ECHO SETTING D: DIRECTORY
D:

ECHO STEP 1 NPM Quite Install
call npm install --quiet node-gyp -g

ECHO STEP 2 NPM INSTALL
call npm install

ECHO STEP 3 node_modules Install
call node node_modules/webpack/bin/webpack.js --env.NODE_ENV=dev

ECHO RESTARTING THE IIS SERVICE
call iisreset

EXIT