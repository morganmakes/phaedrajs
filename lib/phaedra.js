var colors = require('colors');
var isRoot = require('is-root');

if (isRoot() === true) {
  console.log("So rad. Awesome show, great job!".rainbow);
} else {
  console.log("That's pretty cool...now try sudo?".green);
}
