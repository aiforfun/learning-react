# This project is for learning ReactJS, follow Pro-React Book
http://kanban.aiforfun.com/

# Set proxy for npm
$npm config set proxy http://localhost:3128
$npm config set https-proxy http://localhost:3128

# Unset proxy for npm
$npm config rm proxy
$npm config rm https-proxy

At the time of this writing, only Chrome and Firefox supported the new method Object.assign, but the good news is that Babel (the es6 compiler you’re using together with webpack) already provides the polyfill for other browsers. all you need to do is install with 'npm install --save babel-polyfill' and import it with import 'babel-polyfill'.
