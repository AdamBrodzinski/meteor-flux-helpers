// watches a reactive collection for changes and emits a changed event
// (via callback) when it's changed.
trackCollection = function(collection, callback) {
  if (!collection || !callback) {
    throw Error('Collection and callback params needed');
  }

  // only run on the client, not needed for SSR
  if (Meteor.isClient) {
    Meteor.startup(function() {

      Tracker.autorun(function(computation) {
        var docs = collection.find().fetch();

        if (computation.firstRun) {
          return;  // ignore first empty run
        }

        if (this.__debugFluxHelpers) { // universal global
          console.log('[Tracker] collection changed', docs);
        }

        callback(docs);
      });

    });
  }
};


// track changes on the viewer's user account
trackViewer = function(callback) {
  if (!callback) {
    throw Error('Callback param needed');
  }

  // only run on the client, not needed for SSR
  if (Meteor.isClient) {
    Meteor.startup(function() {

      Tracker.autorun(function(computation) {
        var user = Meteor.user();

        if (computation.firstRun) {
          return;  // ignore first empty run
        }

        if (this.__debugFluxHelpers) { // universal global
           console.log('[Tracker] user changed', user);
        }
        callback(user);
      });

    });
  }
};
