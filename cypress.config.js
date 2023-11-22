const { defineConfig } = require('cypress')

module.exports = defineConfig({

    e2e: {
        setupNodeEvents (on, config) {
            return config
        },

        env: {
            hideCredentials: true,
            requestMode: true
        }

    },
    viewportHeight: 880,
    viewportWidth: 1200,
    chromeWebSecurity: false,
    fixturesFolder: false,
    video: false,
    defaultCommandTimeout: 15000

})