const botun = document.getElementById("sub");
botun.addEventListener("click", processData)

function processData() {
    const ime = document.getElementById("ime");
    const prezime = document.getElementById("prez");
    const sve = document.getElementById("sve");
    const stud = document.querySelector("input[type=radio][name=studij]:checked");
    const izb = document.querySelectorAll("input[type=checkbox][name=izborni]:checked");


    if (ime.value.length === 0 || prez.value.length === 0 || sve.value.length === 0) {
        alert("Niste ispunili sva polja!");
    } else {
        const imeVal = ime.value;
        const prezVal = prezime.value;
        const sveVal = sve.value;
        const studVal = stud.value;
        const izbVal = [];

        for (let i = 0; i < izb.length; i++) {
            izbVal.push(izb[i].value)
        }

        localStorage.setItem("name", imeVal);
        localStorage.setItem("surname", prezVal);
        localStorage.setItem("university", sveVal);
        localStorage.setItem("study", studVal);
        localStorage.setItem("course", izbVal);


        // localStorage.setItem("course", JSON.stringify(izbVal));
        // console.log(JSON.parse(localStorage.getItem("course")));

        window.location.href = "web_form.html";
    }

}

