//PROMENI TEMU U DARK/LIGHT MODE
var light = true;
var tb = document.getElementsByClassName("top-bar");
//var as = document.links;
var as = document.getElementsByClassName("change_color");
var i_els = document.getElementsByTagName('i');

console.log(as[0]);
function changeBrightness(){
    if(light)
    {
        var j;
        for (j = 0; j < i_els.length; ++j) {
            i_els[j].style.color = "white";
        }

        var index;
        for (index = 0; index < tb.length; ++index) {
            tb[index].backgroundColor = "black";
        }

        var i;
        for (i = 0; i < as.length; ++i) {
            as[i].style.color = "white";
        }
            document.getElementsByTagName('nav')[0].style.backgroundColor = "black";
            document.getElementById("top-bar-mode-change-button").backgroundColor = "black";
            document.getElementById("top-bar-mode-change-button").borderColor = "white";
            document.getElementById("top-bar-logo").src = 'imgs/logo/logo2_w.png';
            document.body.style.backgroundColor = "black";
            document.body.style.color = "white";
            light = false;
    }
    else
    {
        var j;
        for (j = 0; j < i_els.length; ++j) {
            //console.log(i_els[j]);
            i_els[j].style.color = "black";
        }

        var index;
        for (index = 0; index < tb.length; ++index) {
            tb[index].backgroundColor = "white";
        }

        var i;
        for (i = 0; i < as.length; ++i) {
            as[i].style.color = "black";
        }
        
        document.getElementsByTagName('nav')[0].style.backgroundColor = "white";
        document.getElementById("top-bar-logo").src = 'imgs/logo/logo2.png';
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        light = true;
    }
}

//ISPISI SAMO VREDNOST SATA
function getVreme(){
    var date = new Date();
    var hrs = date.getHours();
    var result = date.getHours() + "AM";
    if( hrs > 12 ){
        hrs = hrs - 12;
        result = hrs + "PM";
    }
    document.getElementById('contact-vreme').innerHTML = result;
}

//VALIDACIJA NAMEs-NE-SPECIAL-CHARACTERS EMAIL-ISPRAVNOST SVE-POPUNJENO
function validate(){
    var first_name = document.getElementsByName('first-name');
    var last_name = document.getElementsByName('last-name'); 
    var email = document.getElementsByName('email'); 
    var msg = document.getElementsByName('message');

    var result = document.getElementById("contact-result");

    if(first_name[0].value == ""){
        result.innerHTML = "Polje 'first name' ne bi trebalo da bude prazno.";
    }
    else if(last_name[0].value == ""){
        result.innerHTML = "Polje 'last name' ne bi trebalo da bude prazno.";
    }
    else if(email[0].value == ""){
        result.innerHTML = "Polje 'email' ne bi trebalo da bude prazno.";
    }
    else if(msg[0].value == ""){
        result.innerHTML = "Polje 'message' ne bi trebalo da bude prazno.";
    }
    else{
        if(/^[a-zA-Z]+$/.test(first_name[0].value)){
            if(/^[a-zA-Z]+$/.test(last_name[0].value)){
                if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email[0].value)){
                    result.innerHTML = "Poruka je poslata!";
                }
                else{
                    result.innerHTML = "Polje 'email' bi trebalo da bude napisano u odgovarajucem formatu.";
                }
            }
            else{
                result.innerHTML = "Polje 'last name' bi trebalo da sadrzi samo slova.";
            }
        }
        else{
            result.innerHTML = "Polje 'first name' bi trebalo da sadrzi samo slova.";
        }
    }
}