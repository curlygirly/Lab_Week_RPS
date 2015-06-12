exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['RPSFeature.js'],
  capabilities: {
    browserName: 'chrome'
  }
}