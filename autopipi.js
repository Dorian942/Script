// ==UserScript==
// @name         AutoPipi
// @namespace    http://tampermonkey.net/
// @version      2.2
// @description  try to take over the world!
// @author       You
// @match        https://ts19.travian.fr/*
// @grant        Dorian942
// ==/UserScript==

(function() {
    'use strict';

if(document.getElementById("raidList")){
             //let LancerPillage = document.querySelector('input[type="button"][value="Lancer le pillage"]');
/*if(document.querySelector('.attack.att2')&&document.querySelector('.carry.full'))
{
    //alert('test');
}*/

    (function loop() {
    var rand = Math.random() * (900000 - 600000) + 600000;
    setTimeout(function() {

        document.getElementById("raidListMarkAll223").checked = true;
        if (typeof document.getElementById("raidListMarkAll223").onclick == "function") {
            document.getElementById("raidListMarkAll223").onclick.apply(document.getElementById("raidListMarkAll223"));
        }
        if(document.getElementById("raidListMarkAll223").checked == true)
        {
           var button = document.querySelector('button[value="Lancer le pillage"]');
          // window.open(button.click());
            button.click();

        }
        document.getElementById("raidListMarkAll755").checked = true;
        if (typeof document.getElementById("raidListMarkAll755").onclick == "function") {
            document.getElementById("raidListMarkAll755").onclick.apply(document.getElementById("raidListMarkAll755"));
        }
        if(document.getElementById("raidListMarkAll755").checked == true)
        {
           var button1 = document.querySelector('button[value="Lancer le pillage"]');
           button1.click();
        }


        loop();
    }, rand);
}());

           }
})();
