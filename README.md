# Meteor Flux Helpers

These helpers are designed to work with any flux implementation by allowing your action method to be passed in.

### Installation 
`meteor add skinnygeek1010:flux-helpers`

<br>
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

Confused on how to use these to get your app working? Checkout the **[leaderboard flux example](https://github.com/AdamBrodzinski/meteor-flux-leaderboard)**

<br>
Find yourself writing more boilerplate for flux? Open an issue!
