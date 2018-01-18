# This project is for learning ReactJS, follow Pro-React Book
http://kanban.aiforfun.com/

# Set proxy for npm
$npm config set proxy http://localhost:3128
$npm config set https-proxy http://localhost:3128

# Unset proxy for npm
$npm config rm proxy
$npm config rm https-proxy

Getting Started Quickly
https://github.com/pro-react/react-app-boilerplate

Which Components Should Be Stateful?
Recognizing which components should own state is often the most challenging part for React newcomers to understand. When in doubt, follow this four-step checklist. For each piece of state in your application,
• Identify every component that renders something based on that state.
• Find a common owner component (a single component above all the components
that need the state in the hierarchy).
• Either the common owner or another component higher up in the hierarchy should own the state.
• If you can’t find a component where it makes sense to own the state, create a new component simply to hold the state and add it somewhere in the hierarchy above the common owner component.

At the time of this writing, only Chrome and Firefox supported the new method Object.assign, but the good news is that Babel (the es6 compiler you’re using together with webpack) already provides the polyfill for other browsers. all you need to do is install with 'npm install --save babel-polyfill' and import it with import 'babel-polyfill'.

React Immutability Helper
React’s add-on package provides an immutability helper called update. The update function works on regular JavaScript objects and arrays and helps manipulates these objects as if they were immutable: instead of actually changing the object, it always return a new, mutated object.
To begin with, you’ll need to install and require the library:
npm install –save react-addons-update
import update from 'react-addons-update';

Note: at the time of this writing, only Chrome and Firefox supported the new methods array.prototype.find and array.prototype.findIndex, so make sure to install babel-polyfill:
npm install --save babel-polyfill
Then, in your file, import it using:
import 'babel-polyfill'

Note Being an external library, to use react dnd you need to install and declare it as a dependency with npm. the examples in this book use react dnd 2 with an htML5 backend, installed via npm install –-save react-dnd@2.x.x react-dnd-html5-backend@1.x.x.
