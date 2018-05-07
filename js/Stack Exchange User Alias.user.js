// ==UserScript==
// @name         Stack Exchange User Alias
// @description  Allow the configuration of a user alias which will be added behind a user's username on (most of) the Stack exchange network.
// @version      0.1
// @match        *://stackoverflow.com/*
// @match        *://meta.stackoverflow.com/*
// @match        *://superuser.com/*
// @match        *://meta.superuser.com/*
// @match        *://serverfault.com/*
// @match        *://meta.serverfault.com/*
// @match        *://askubuntu.com/*
// @match        *://meta.askubuntu.com/*
// @match        *://*.stackexchange.com/*
// @match        *://answers.onstartups.com/*
// @match        *://meta.answers.onstartups.com/*
// @match        *://stackapps.com/*
// @match        *://mathoverflow.net/*
// @exclude      http://chat.stackexchange.com/*
// @exclude      http://chat.*.stackexchange.com/*
// @exclude      http://api.*.stackexchange.com/*
// @exclude      http://data.stackexchange.com/*
// @exclude      http://*/reputation
// @author       @Cerbrus
// ==/UserScript==

(function() {
    'use strict';

    const map = {
        123456 : "Alias1",
        789012 : "Alias2"
    };

    for(let id in map){
        $(`a[href*="users/${id}"]`).each((i, e) => {
            const $elem = $(e);
            const name = $elem.text();

            if(name){
                $elem.text(`${name} (${map[id]})`);
            }
        });
    }
})();