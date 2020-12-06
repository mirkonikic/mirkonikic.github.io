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

            document.getElementById("top-bar-mode-change-button").backgroundColor = "black";
            document.getElementById("top-bar-mode-change-button").borderColor = "white";
            document.getElementById("top-bar-logo").src = 'logo2_w.png';
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

        document.getElementById("top-bar-logo").src = 'logo2.png';
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
        result.innerHTML = "Field 'first name' should not be empty.";
    }
    else if(last_name[0].value == ""){
        result.innerHTML = "Field 'last name' should not be empty.";
    }
    else if(email[0].value == ""){
        result.innerHTML = "Field 'email' should not be empty.";
    }
    else if(msg[0].value == ""){
        result.innerHTML = "Field 'message' should not be empty.";
    }
    else{
        if(/^[a-zA-Z]+$/.test(first_name[0].value)){
            if(/^[a-zA-Z]+$/.test(last_name[0].value)){
                if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email[0].value)){
                    result.innerHTML = "Poruka je poslata!";
                }
                else{
                    result.innerHTML = "Field 'email' should be written in a proper format.";
                }
            }
            else{
                result.innerHTML = "Field 'last name' should only contain letters.";
            }
        }
        else{
            result.innerHTML = "Field 'first name' should only contain letters.";
        }
    }
}