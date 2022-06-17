
const webpack = require('@cypress/webpack-preprocessor')
const IDMSLogin = require('./idms-login').IDMSLogin
const fs = require('fs');

module.exports = on => {
  const options = {
    // send in the options from your webpack.config.js, so it works the same
    // as your app's code
    webpackOptions: require('../../webpack.config'),
    watchOptions: {}
  }

  on('file:preprocessor', webpack(options))
}


module.exports = (on, config) => {
  on('task', {IDMSLogin:IDMSLogin});
  on('task', {

    checkFileStatus (filename) {

      if (fs.existsSync(filename)) {

        return fs.readFileSync(filename, 'utf8')

      }



      return null

    }
  });
  on('task', {

    deleteFile (filename) {

      if (fs.existsSync(filename)) {

      fs.unlinkSync(filename)
      }
      return null


    }
  })


  
}




