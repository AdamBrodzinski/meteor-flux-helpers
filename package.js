Package.describe({
  name: 'skinnygeek1010:flux-helpers',
  version: '0.1.0',
  summary: 'Helpers to make flux easier to use with Meteor',
  git: 'https://github.com/AdamBrodzinski/meteor-flux-helpers.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('flux-helpers.js');
  api.export('trackViewer');
  api.export('trackCollection');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('skinnygeek1010:flux-helpers');
  api.addFiles('flux-helpers-tests.js');
});
