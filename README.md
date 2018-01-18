# This project is for learning ReactJS, follow Pro-React Book
http://kanban.aiforfun.com/

# Set proxy for npm
$npm config set proxy http://localhost:3128
$npm config set https-proxy http://localhost:3128

# Unset proxy for npm
$npm config rm proxy
$npm config rm https-proxy

At the time of this writing, only Chrome and Firefox supported the new method Object.assign, but the good news is that Babel (the es6 compiler you’re using together with webpack) already provides the polyfill for other browsers. all you need to do is install with 'npm install --save babel-polyfill' and import it with import 'babel-polyfill'.

React Immutability Helper
React’s add-on package provides an immutability helper called update. The update function works on regular JavaScript objects and arrays and helps manipulates these objects as if they were immutable: instead of actually changing the object, it always return a new, mutated object.
To begin with, you’ll need to install and require the library:
npm install –save react-addons-update
import update from 'react-addons-update';
