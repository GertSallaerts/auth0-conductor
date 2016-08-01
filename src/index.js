import parse from './jwt';

const jwt = parse(window.location.hash);

if (jwt && jwt.state) {
    const target = jwt.state.location ? jwt.state.location : jwt.state;

    // Use target protocol or fallback to current protocol
    let dest = target.protocol || window.location.protocol;

    // Get our destination from JWT state, can't do fallback to current here
    dest += '//' + target.host + target.pathname + target.search;

    // Use current hash for destination (it has the auth0 response)
    dest += window.location.hash;

    // Go there
    window.location.href = dest;
}

throw 'Failed to parse hash as an Auth0 response.';
