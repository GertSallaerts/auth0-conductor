# Auth0 Conductor

Redirect from Auth0's callback to where you really want to go. If you have a lot of different domains where your Auth0 widget is allowed to load, you can use this project to create one central callback URL that redirects users back to where they came from instead of adding every single URL to the Auth0 allowed domains configuration.

## Usage

1. Build the project and host the `index.html` and `bundle.js` file somewhere
2. Add the location for the index.html to your allowed callback url's in auth0 config
3. When firing up Auth0 authentication, pass the following options:

```js
{
    callbackURL: [location of your hosted index.html],
    state: JSON.stringify(document.location)
}
```

__WIN!__

When Auth0 redirects the user to the callback URL (this project,) it will parse the state and redirect the user back to where he came from but switch the hash part of the URL with the response from Auth0.

You can retrieve the original hash by parsing Auth0's hash and retrieving it from the state.

```
const original = JSON.parse(jwt.state);
const originalHash = original.hash;
```

## Example

This project's [GitHub Pages](https://gertt.github.io/auth0-conductor) branch contains a build version of the latest code. This means you could use `https://gertt.github.io/auth0-conductor/index.html` as the callback url for your auth0 widget. (I do not guarantee this will never change, it's safest to deploy your own version for production code.)
