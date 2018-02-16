/* global app, $on */
(function(window) {
  'use strict'
  require('./app')
  require('./helpers')
  log ('test')
  log('remove')
  $on(window, 'load', app.onLoad)
  $on(window, 'hashchange', app.onLoad)
})(window)
