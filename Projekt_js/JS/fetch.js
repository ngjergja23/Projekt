let nome = localStorage.getItem("name");
let surname = localStorage.getItem("surname");
let university = localStorage.getItem("university");
let study = localStorage.getItem("study");
let course = localStorage.getItem("course");

let para = document.getElementById("data");


let nametxt = document.createTextNode("Ime: " + nome);
let surnametxt = document.createTextNode("Prezime: " + surname);
let unitxt = document.createTextNode("Sveučilište: " + university);
let studytxt = document.createTextNode("Studij: " + study);
if (course.length!==0) {
    var coursetxt = document.createTextNode("Izborni kolegiji: " + course);
}



para.appendChild(nametxt);
para.appendChild(document.createElement("br"));
para.appendChild(surnametxt);
para.appendChild(document.createElement("br"));
para.appendChild(unitxt);
para.appendChild(document.createElement("br"));
para.appendChild(studytxt);
para.appendChild(document.createElement("br"));
para.appendChild(coursetxt);



function changeCSS(){
    let stylesheet = document.getElementById("css_index");
    

    if (stylesheet.getAttribute("href") === "styles/web_style.css") {
        stylesheet.setAttribute("href", "styles/changed_style.css");        
    }else {
        stylesheet.setAttribute("href", "styles/web_style.css")
    }
}