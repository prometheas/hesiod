// Use this file to setup any test utilities.

var configure = require('enzyme').configure;
var Adapter = require('enzyme-adapter-react-16');

configure({
  adapter: new Adapter(),
});
