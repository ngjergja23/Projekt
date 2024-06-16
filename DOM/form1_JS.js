function changeH1Style(){
    let h1 = document.getElementsByTagName("h1")[0];
    h1.style.color = "green";
}
//document.addEventListener("click", function(){
//    alert("Some alert message!!!");
//  });

function processFormData() {

    let name = document.getElementById("usr_nameField");
    let mail = document.getElementById("usr_mailField");
    let ff = document.getElementById("fbox");
    let dt = new Date();
    let dmy = dt.getDate() + "/" + (dt.getMonth()+1) + "/" + dt.getFullYear() + ".";


    if(name.value.length == 0 || mail.value.length == 0){
        alert("Trebate unijeti oba podatka u formu!");
    } else {
        document.getElementById("p_form_data").style.color = "blue";
        document.getElementById("p_form_data").style.fontSize = "15pt";
        document.getElementById("p_form_data").style.fontFamily = "Courier New, Courier, monospace";
        let un = "<br /> <b> User name: </b>" + name.value;
        let um = "<br /> <b> User mail: </b>" + mail.value;
        let film = "<br /> <b> Žanr - favorit: </b>" + ff.value;
        document.getElementById("p_form_data").innerHTML = un + um + film;
        name.value = "";
        mail.value = "";
    }

    let prg = document.createElement("p");
    prg.style.backgroundColor = "#191a63";
    prg.style.fontSize = "15px";
    prg.style.fontFamily = "Arial, Helvetica, sans-serif";
    prg.style.color="white";

    let datum = dmy;
    let day_info = dt.getDay();
    let dat_info = document.createTextNode(datum);
    prg.appendChild(dat_info);
    let div_elm = document.getElementById("date_div");
    let dayTime_info_node = document.createTextNode(" - " + getDay(day_info));
    prg.appendChild(dayTime_info_node);
    div_elm.appendChild(prg);
    alert(getDay(day_info));


}

function getDay(inf) {
    if(inf == 1){
        return "Ponedjeljak";
    } else if(inf == 2){
        return "Utorak";
    } else if(inf == 3) {
        return "Srijeda";
    } else if(inf == 4) {
        return "Četvrtak";
    } else if(inf == 5) {
        return "Petak";
    } else if(inf == 6) {
        return "Subota";
    } else {
        return "Nedjelja";
    }
}