# Auth0 Conductor

Redirect from Auth0's callback to where you really want to go. Not meant for production usage!!!

## Usage

1. Build the project and host the `index.html` and `bundle.js` file somewhere
2. When firing up Auth0 authentication, pass the following options:

```js
{
    callbackURL: [LOCATION OF THIS PROJECT],
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
