// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://ts19.travian.fr/*
// @grant        none
// ==/UserScript==
(function() {
    'use strict';

                var QttBois = document.getElementById("l1").innerText; //Bois
                var QttTerre = document.getElementById("l2").innerText; //Terre
                var QttFer = document.getElementById("l3").innerText; //Fer
                var QttCereales = document.getElementById("l4").innerText; //Cereales

                QttBois = QttBois.replace(/\s/g, '');
                QttTerre = QttTerre.replace(/\s/g, '');
                QttFer = QttFer.replace(/\s/g, '');
                QttCereales = QttCereales.replace(/\s/g, '');



    if (document.getElementById('village_map')) {

        var TestConstruction = document.querySelectorAll('.f3 , .level ');
        var cpt = 0;
        var TableauBois = new Array();
        var TableauTerre = new Array();
        var TableauCereales = new Array();
        var TableauFer = new Array();

        var LiensCereales = new Array();
        var NiveauCereales = new Array();
        var AltCereales = new Array();
        var NiveauMinCereales;
        var MyHrefC;
        var MyAltC;
        var MyHrefCFinal;
        var MyAltCFinal;
        var LiensCerealesFinal = new Array();
        var AltCerealesFinal = new Array();


        var LiensFer = new Array();
        var NiveauFer = new Array();
        var AltFer = new Array();
        var NiveauMinFer;
        var MyHrefF;
        var MyAltF;
        var MyHrefFFinal;
        var MyAltFFinal;
        var LiensFerFinal = new Array();
        var AltFerFinal = new Array();

        var LiensBois = new Array();
        var NiveauBois = new Array();
        var AltBois = new Array();
        var NiveauMinBois;
        var MyHrefB;
        var MyAltB;
        var MyHrefBFinal;
        var MyAltBFinal;
        var LiensBoisFinal = new Array();
        var AltBoisFinal = new Array();

        var LiensTerre = new Array();
        var NiveauTerre = new Array();
        var AltTerre = new Array();
        var NiveauMinTerre;
        var MyHrefT;
        var MyAltT;
        var MyHrefTFinal;
        var MyAltTFinal;
        var LiensTerreFinal = new Array();
        var AltTerreFinal = new Array();

        var Verification = 3;

        for (var i = 0; i < TestConstruction.length; i++) {
            if (TestConstruction[i].classList.contains('underConstruction')) {
                //IL Y A DEJA UNE CONSTRUCTION EN COURS
                Verification = 1;

            } else {
                Verification = 0;
               

                var Stock = [QttBois, QttTerre, QttFer, QttCereales];
                var Minimum = Math.min(...Stock); /// Calcul de la ressource la plus faible

                if (Minimum == QttBois) //gid1
                {
                    if (TestConstruction[i].classList.contains('gid1')) {
                        var testibs = TestConstruction[i].className;
                        testibs = testibs.slice(-1);
                        TableauBois.push(testibs.toString());
                    }
                }

                if (Minimum == QttTerre) //gid2
                {
                    if (TestConstruction[i].classList.contains('gid2')) {
                        var Testtit = TestConstruction[i].className;
                        Testtit = Testtit.slice(-1);
                        TableauTerre.push(Testtit.toString());
                    }
                }

                if (Minimum == QttFer) //gid3
                {

                    if (TestConstruction[i].classList.contains('gid3')) {
                        var Testtif = TestConstruction[i].className;
                        Testtif = Testtif.slice(-1);
                        TableauFer.push(Testtif.toString());
                    }
                }

                if (Minimum == QttCereales) //gid4
                {

                    if (TestConstruction[i].classList.contains('gid4')) {
                        var Testtic = TestConstruction[i].className;


                        Testtic = Testtic.slice(-1);
                        TableauCereales.push(Testtic.toString());
                    }
                }
            }
        }
    }






    if (document.querySelector('.little_res')) {
        /// Manque de ressources pour la construction
        var MyAltTypeRessourceManquante;
        var MyTabTypeRessourceManquante = new Array();
        var MyTabAltRessourceManquante = new Array();
        var tmp = document.createElement('div');
        tmp.innerHTML = MyAltTypeRessourceManquante;
        var alt;

        var div = document.querySelectorAll('#contract span.little_res');


for(i=0;i<div.length;i++)
{
    MyAltTypeRessourceManquante = div[i].innerText.toString();
    tmp.innerHTML = div[i].innerHTML.toString();
    alt = tmp.getElementsByTagName('img')[0].alt;
    alt = alt.toString();
    MyTabTypeRessourceManquante.push(alt+ " " +MyAltTypeRessourceManquante);
}

    var CapaciteDepotDeRessources = document.getElementById("stockBarWarehouse").innerText;
    var CapaciteSilo = document.getElementById("stockBarGranaryWrapper").innerText;



        if(MyTabTypeRessourceManquante.some(x => x.includes("Bois") === true) || MyTabTypeRessourceManquante.some(x => x.includes("Argile") === true) || MyTabTypeRessourceManquante.some(x => x.includes("Fer") === true))
        {

            if (MyTabTypeRessourceManquante.some(x => x.includes("Bois") === true)) {
            /// Il manque du Bois
                 var MissBois = MyTabTypeRessourceManquante.find(res => res.includes("Bois"));
                 var QttBoisMissing = MissBois.replace(/\D/g, "");
                 var ManqueDeBois = QttBoisMissing - QttBois;

        }

            if (MyTabTypeRessourceManquante.some(x => x.includes("Argile") === true)) {
            /// Il manque de l'argile

               var MissArgile = MyTabTypeRessourceManquante.find(res => res.includes("Argile"));
               var QttArgileMissing = MissArgile.replace(/\D/g, "");
               var ManqueDeArgile = QttArgileMissing - QttTerre;

        }

        if (MyTabTypeRessourceManquante.some(x => x.includes("Fer") === true)) {
            /// Il manque du Fer
             var MissFer = MyTabTypeRessourceManquante.find(res => res.includes("Fer"));
             var QttFerMissing = MissFer.replace(/\D/g, "");
             var ManqueDeFer = QttFerMissing - QttFer;
        }
            if(QttFerMissing > CapaciteDepotDeRessources || QttBoisMissing > CapaciteDepotDeRessources || QttArgileMissing > CapaciteDepotDeRessources)
               {
                   ///AmeliorationDuDepotDeRessources
                   document.querySelector('.villageBuildings a').click();

                  // document.querySelector('[title="Dépôt de ressources"]').value.click();
                  // document.title('Dépôt de ressources').click();


               }else{
                   ///???

               }

        }
        if (MyTabTypeRessourceManquante.some(x => x.includes("Céréales") === true)) {
            /// Il manque des Cereales
             var MissCereales = MyTabTypeRessourceManquante.find(res => res.includes("Céréales"));
             var QttCerealesMissing = MissCereales.replace(/\D/g, "");
             var ManqueDeCereales = QttFerMissing - QttCereales;
        }



    }


    if (document.getElementById('build')) {
        document.querySelector('.green.build').click();
    }




    var LevelBoisMinimum = Math.min(...TableauBois);
    var LevelTerreMinimum = Math.min(...TableauTerre);
    var LevelCerealesMinimum = Math.min(...TableauCereales);
    var LevelFerMinimum = Math.min(...TableauFer);

    if (document.querySelector('.buildDuration') == null) {
        if (isFinite(LevelBoisMinimum)) {

            const areasB = document.querySelectorAll('area'); // user more precise selector if needed
            let myElementB;


            areasB.forEach(elB => {
                MyHrefB = elB.getAttribute('href');
                MyAltB = elB.getAttribute('alt');

                if (MyAltB.indexOf('Bûcheron') > -1) {
                    AltBois.push(MyAltB);
                    LiensBois.push(MyHrefB);
                    NiveauBois.push(MyAltB.slice(-1));
                    NiveauMinBois = Math.min(...NiveauBois);
                    NiveauMinBois.toString();
                }
            });


            let matchesB = AltBois.filter(el => el.indexOf(NiveauMinBois) > -1);
            let MatchesB = [...new Set(matchesB)];

            const areasBFinal = document.querySelectorAll('area'); // user more precise selector if needed
            let myElementBFinal;

            areasBFinal.forEach(elBFinal => {
                MyHrefBFinal = elBFinal.getAttribute('href');
                MyAltBFinal = elBFinal.getAttribute('alt');

                if (MyAltBFinal.indexOf(MatchesB) > -1) {
                    AltBoisFinal.push(MyAltBFinal);
                    LiensBoisFinal.push(MyHrefBFinal);

                }
            });

            window.open("https://ts19.travian.fr/" + LiensBoisFinal, "_self")

        }

        if (isFinite(LevelTerreMinimum)) {

            const areasT = document.querySelectorAll('area'); // user more precise selector if needed
            let myElementT;


            areasT.forEach(elT => {
                MyHrefT = elT.getAttribute('href');
                MyAltT = elT.getAttribute('alt');

                if (MyAltT.indexOf('Carrière') > -1) {
                    AltTerre.push(MyAltT);
                    LiensTerre.push(MyHrefT);
                    NiveauTerre.push(MyAltT.slice(-1));
                    NiveauMinTerre = Math.min(...NiveauTerre);
                    NiveauMinTerre.toString();
                }
            });


            let matchesT = AltTerre.filter(el => el.indexOf(NiveauMinTerre) > -1);
            let MatchesT = [...new Set(matchesT)];

            const areasTFinal = document.querySelectorAll('area'); // user more precise selector if needed
            let myElementTFinal;

            areasTFinal.forEach(elTFinal => {
                MyHrefTFinal = elTFinal.getAttribute('href');
                MyAltTFinal = elTFinal.getAttribute('alt');

                if (MyAltTFinal.indexOf(MatchesT) > -1) {
                    AltTerreFinal.push(MyAltTFinal);
                    LiensTerreFinal.push(MyHrefTFinal);

                }
            });

            window.open("https://ts19.travian.fr/" + LiensTerreFinal, "_self")

        }

        if (isFinite(LevelFerMinimum)) {

            const areasF = document.querySelectorAll('area '); // user more precise selector if needed
            let myElementF;


            areasF.forEach(elF => {
                MyHrefF = elF.getAttribute('href');
                MyAltF = elF.getAttribute('alt');

                if (MyAltF.indexOf('Mine') > -1) {
                    AltFer.push(MyAltF);
                    LiensFer.push(MyHrefF);
                    NiveauFer.push(MyAltF.slice(-1));
                    NiveauMinFer = Math.min(...NiveauFer);
                    NiveauMinFer.toString();
                }
            });


            let matchesF = AltFer.filter(el => el.indexOf(NiveauMinFer) > -1);
            let MatchesF = [...new Set(matchesF)];

            const areasFFinal = document.querySelectorAll('area '); // user more precise selector if needed
            let myElementFFinal;

            areasFFinal.forEach(elFFinal => {
                MyHrefFFinal = elFFinal.getAttribute('href');
                MyAltFFinal = elFFinal.getAttribute('alt');

                if (MyAltFFinal.indexOf(MatchesF) > -1) {
                    AltFerFinal.push(MyAltFFinal);
                    LiensFerFinal.push(MyHrefFFinal);

                }
            });

            window.open("https://ts19.travian.fr/" + LiensFerFinal, "_self");
        }

        if (isFinite(LevelCerealesMinimum)) {

            const areasC = document.querySelectorAll('area'); // user more precise selector if needed
            let myElementC;
            areasC.forEach(elC => {
                MyHrefC = elC.getAttribute('href');
                MyAltC = elC.getAttribute('alt');

                if (MyAltC.indexOf('Ferme') > -1) {
                    AltCereales.push(MyAltC);
                    LiensCereales.push(MyHrefC);
                    NiveauCereales.push(MyAltC.slice(-1));
                    NiveauMinCereales = Math.min(...NiveauCereales);
                    NiveauMinCereales.toString();
                }
            });

            let matchesC = AltCereales.filter(el => el.indexOf(NiveauMinCereales) > -1);
            let MatchesC = [...new Set(matchesC)];

            const areasCFinal = document.querySelectorAll('area '); // user more precise selector if needed
            let myElementCFinal;

            areasCFinal.forEach(elCFinal => {
                MyHrefCFinal = elCFinal.getAttribute('href');
                MyAltCFinal = elCFinal.getAttribute('alt');

                if (MyAltCFinal.indexOf(MatchesC) > -1) {
                    AltCerealesFinal.push(MyAltCFinal);
                    LiensCerealesFinal.push(MyHrefCFinal);

                }
            });

            window.open("https://ts19.travian.fr/" + LiensCerealesFinal, "_self")

        }

        /// TEST AFFICHAGEalert(NiveauMinCerealier);
    } else {
      //  document.querySelector('.adventureWhite.green').click(); // le boutton va peut être changer
        if(document.getElementById('adventureListForm') !== null)
        {
            alert('aa');
        }

    }
})();