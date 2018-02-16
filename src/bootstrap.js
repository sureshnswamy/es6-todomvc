// /* global app, $on */
// (function(window) {
//   'use strict'
//   require('./app')
//   require('./helpers')
//   log ('test')
//   log('remove')
//   $on(window, 'load', app.onLoad)
//   $on(window, 'hashchange', app.onLoad)
// })(window)
// 
//  
//   
//    /* eslint no-console:0 */
import {install as offlineInstall} from 'offline-plugin/runtime'
import {onLoad} from './app'
import {$on} from './helpers' 


// this is only relevant when using `hot` mode with webpack
// special thanks to Eric Clemmons: https://github.com/ericclemmons/webpack-hot-server-example
const reloading = document.readyState === 'complete'
if (module.hot) {
  module.hot.accept(function(err) {
    console.log('❌  HMR Error:', err)
  })
  if (reloading) {
    console.log('🔁  HMR Reloading.')
    onLoad()
  } else {
    console.info('✅  HMR Enabled.')
    bootstrap()
  }
} else {
  console.info('❌  HMR Not Supported.')
  bootstrap()
}

function bootstrap() {
  $on(window, 'load', onLoad)
  $on(window, 'hashchange', onLoad)
  log ('this is a line change')

  if (process.env.NODE_ENV === 'production') {
    offlineInstall()
  }
}