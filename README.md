# Meteor Flux Helpers

These helpers are designed to work with any flux implementation by allowing your action method to be passed in.

#### Watch a Collection for changes
When using flux you don't depend on the data in your templates to do the re-rendering. This turns out to be good because it let's us have more control of re-renders. The dispatcher will batch up these changes for minimal rendering.

###### trackCollection(yourCollection, yourActionCallback);

```javascript
// watch collections on Minimongo cache and trigger action on change
trackCollection(Meteor.users, CollectionActions.usersChanged);
trackCollection(Posts, CollectionActions.postsChanged);
```

<br>
#### Watch the viewer's user object for changes

###### trackViewer(yourActionCallback);

Use this to listen for changes on just the viewer's user object. If you want to listen to all users, use the helper above instead.

```javascript
// watch the logged in user and trigger an action on change
trackViewer(CollectionActions.viewerChanged);
```

<br>
Find yourself writing more boilerplate for flux? Open an issue!
