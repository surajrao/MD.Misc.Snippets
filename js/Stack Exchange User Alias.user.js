// ==UserScript==
// @name         Stack Exchange User Alias
// @description  Allow the configuration of a user alias which will be added behind a user's username on (most of) the Stack exchange network.
// @version      0.4
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
// @grant        GM_setValue
// @grant        GM_getValue
// @author       @Cerbrus
// ==/UserScript==

(function() {
    'use strict';
    const scope = {
        map: { },
        promptOpen: false
    };

    GetSettings();
    Init();

    function GetSettings() {
        let settings = GM_getValue("StackExchangeUserAlias");

        if(!settings){
            GM_setValue("StackExchangeUserAlias", JSON.stringify(scope.map));
        }else{
            scope.map = JSON.parse(settings);
        }
        console.log(scope.map);
    }

    function Init() {
        for(let id in scope.map){
            if(!scope.map[id]){
                continue;
            }

            const alias = ` <sup>(${scope.map[id].replace(/ /g, "&nbsp;")})</sup>`;
            const $containers = $(".user-details, .comment-body");
            const $anchors =  $containers.find(`a[href*="users/${id}"]`);

            $anchors.each((i, e) => {
                const $elem = $(e);
                const name = $elem.html();

                if(!/[^a-zA-Z0-9]/.test(name)) { // The name can only contain letters or numbers
                    $elem.append(alias);
                }
            });

            $containers.find("a").contextmenu(AddAliasPrompt);

            const $usercard = $(".user-card-name");
            $usercard.contextmenu(AddAliasPrompt);

            if(location.href.includes(`users/${id}`)) {
                $usercard.append(alias);
            }
        }
    }

    function AddAliasPrompt(e) {
        setTimeout(() => {
            scope.promptOpen = false;
        }, 50);

        if(scope.promptOpen || !(e.ctrlKey || e.shiftKey || e.altKey || e.metaKey)){
            return;
        }

        scope.promptOpen = true;

        const alias = prompt("Please enter an alias to assign to this user.");

        let href;

        if (e.target.href) {
            href = e.target.href;
        } else if(location.href.includes(`users/`)) {
            href = location.href;
        }

        const id = parseInt(href.split("/")[4], 10);

        if(id) {
            e.preventDefault();

            if(alias){
                scope.map[id] = alias;
            }else{
                delete scope.map[id];
            }

            GM_setValue("StackExchangeUserAlias", JSON.stringify(scope.map));

            window.location.reload();
        }
    }
})();