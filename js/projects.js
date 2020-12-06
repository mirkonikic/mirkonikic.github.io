//PROJECTS CHANGE BACKGROUND IMAGE
document.getElementById("mircloud").addEventListener("mouseover", function() {
    document.getElementById("projects-main-title").style.backgroundImage = "url(imgs/projects/micloud.png)";
    document.getElementById("projects-main-text-p").innerHTML = "MICLOUD je program za enkriptovan nacin skladistenja i pristupu i sinhronizaciji fajlova, koji omogucava pristup od bilo gde. Moze se koristiti i za siguran i privatan pristup svom racunaru.";
}, false);
document.getElementById("mdos").addEventListener("mouseover", function() {
    document.getElementById("projects-main-title").style.backgroundImage = "url(imgs/projects/mdos.png)";
    document.getElementById("projects-main-text-p").innerHTML = "MDOS je projekat koji sam radio iz predmeta AROS na fakultetu. Program predstavlja simulaciju DoS napada na ranjivi sistem. Projekat je samo za svrhe ucenja.";
}, false);
document.getElementById("mhtc").addEventListener("mouseover", function() {
    document.getElementById("projects-main-title").style.backgroundImage = "url(imgs/projects/mhtc.png)";
    document.getElementById("projects-main-text-p").innerHTML = "MHTC je enkriptovani chat program sa kraja na kraj, sadrzi komande koje ce pomoci sigurnost u toku komuniciranja sa drugom stranom, dok enkripcija stiti od prisluskivanja/sniffovanja paketa. Cilj ovog projekta mi je bila anonimnost i sigurnost korisnika, stiteci ih od ISP-a i MITM napada.";
}, false);
document.getElementById("m0_blog").addEventListener("mouseover", function() {
    document.getElementById("projects-main-title").style.backgroundImage = "url(imgs/projects/m0_site.png)";
    document.getElementById("projects-main-text-p").innerHTML = "M0_BLOG je full stack website koji sam pravio prosle godine, napisan je u jezicima kao sto su Django ,Python, Javascript, React, HTML, CSS, itd... Odrzan je na Apache2 serveru dok ga nisam okacio na strani hosting.";
}, false);