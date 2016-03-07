"use strict";

import qs from 'qs';

export
function decode(jwt) {
    var encoded = jwt && jwt.split('.')[1];
    return JSON.parse(atob(encoded));
}

export default
function parseHash(hash = window.location.hash) {
    if(!hash.match(/access_token/) && !hash.match(/error/))
        return null;

    hash = hash.substr(1).replace(/^\//, '');
    const parsed_qs = qs.parse(hash);

    if (!parsed_qs.state)
        return null;

    const id_token = parsed_qs.id_token;
    const refresh_token = parsed_qs.refresh_token;

    let prof;
    try {
        prof = decode(id_token);
    } catch (e) {
        prof = null;
    }

    return {
        profile: prof,
        id_token: id_token,
        access_token: parsed_qs.access_token,
        state: JSON.parse(parsed_qs.state),
        refresh_token: refresh_token
    };
}
