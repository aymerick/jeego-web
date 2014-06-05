/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp({
  name: require('./package.json').name,

  minifyCSS: {
    enabled: true,
    options: {}
  },

  getEnvJSON: require('./config/environment')
});

// Use this to add additional libraries to the generated output files.
app.import('vendor/ember-data/ember-data.js');

// If the library that you are including contains AMD or ES6 modules that
// you would like to import into your application please specify an
// object with the list of modules as keys along with the exports of each
// module as its value.
app.import('vendor/ic-ajax/dist/named-amd/main.js', {
  'ic-ajax': [
    'default',
    'defineFixture',
    'lookupFixture',
    'raw',
    'request',
  ]
});

// Bootstrap
var bootstrapFiles = [ 'affix', 'alert', 'button', 'carousel', 'collapse', 'dropdown', 'tab', 'transition', 'scrollspy', 'modal', 'tooltip', 'popover' ];
bootstrapFiles.forEach(function(file) {
  app.import('vendor/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/' + file + '.js');
});

// Moment
app.import('vendor/moment/moment.js');

// Highcharts
app.import('vendor/highcharts-release/highcharts.src.js');
app.import('vendor/highcharts-release/highcharts-more.src.js');
app.import('vendor/highcharts-release/modules/exporting.src.js');

module.exports = app.toTree();
