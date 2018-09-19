// ==UserScript==
// @name         AutoPipi
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  try to take over the world!
// @author       You
// @match        https://ts19.travian.fr/*
// @grant        Dorian942
// ==/UserScript==

(function() {
    'use strict';

    if(document.getElementById("raidList")){
             //let LancerPillage = document.querySelector('input[type="button"][value="Lancer le pillage"]');
if(document.querySelector('.attack.att2')&&document.querySelector('.carry.full'))
{
    //alert('test');
}

    setInterval(function() {
          window.location.reload(false);
                }, 300000);

    (function loop() {
    var rand = Math.round(Math.random() * (600000 - 0)) + 0;
    setTimeout(function() {

        document.getElementById("raidListMarkAll223").checked = true;
        if (typeof document.getElementById("raidListMarkAll223").onclick == "function") {
            document.getElementById("raidListMarkAll223").onclick.apply(document.getElementById("raidListMarkAll223"));
}
        if(document.getElementById("raidListMarkAll223").checked == true)
        {
           var button = document.querySelector('button[value="Lancer le pillage"]');
           button.click();

        }
    loop();
    }, rand);




}());

           }
})();
