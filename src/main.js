var step = 1;

document.addEventListener('DOMContentLoaded', () => {
    stepManager();
});

const continueEvent = () => {
    step ++;
    stepManager();
}

const backEvent = () => {
    step --;
    stepManager();
}

const step1ContinueAbled = () => {
    if (document.getElementById("url").value != "") document.getElementById("continue").disabled = false;
    else document.getElementById("continue").disabled = true;
}

const step2ContinueAbled = () => {
    var name      = document.getElementById("name").value      != "";
    var birthDate = document.getElementById("birthDate").value != "";
    var postal    = document.getElementById("postal").value    != "";
    var town      = document.getElementById("town").value      != "";

    if (name && birthDate && postal && town) document.getElementById("continue").disabled = false;
    else document.getElementById("continue").disabled = true;
}

const finish = () => {
    location.replace(document.getElementById("url").value);
}

const stepManager = () => {
    if (step == 1)
    {
        document.getElementById("step2").style.display = "none";
        document.getElementById("step3").style.display = "none";
        document.getElementById("step4").style.display = "none";
        document.getElementById("back").style.display  = "none";

        document.getElementById("step1").style.display    = "";
        document.getElementById("continue").style.display = "";

        step1ContinueAbled();
    }
    if (step == 2)
    {
        document.getElementById("step1").style.display = "none";
        document.getElementById("step3").style.display = "none";
        document.getElementById("step4").style.display = "none";

        document.getElementById("step2").style.display = "";
        document.getElementById("back").style.display  = "";

        step2ContinueAbled();
    }
    if (step == 3)
    {
        document.getElementById("step1").style.display = "none";
        document.getElementById("step2").style.display = "none";
        document.getElementById("step4").style.display = "none";

        document.getElementById("step3").style.display    = "";
        document.getElementById("back").style.display     = "";
        document.getElementById("continue").style.display = "";
    }
    if (step == 4)
    {
        document.getElementById("step1").style.display    = "none";
        document.getElementById("step2").style.display    = "none";
        document.getElementById("step3").style.display    = "none";
        document.getElementById("continue").style.display = "none";

        document.getElementById("step4").style.display = "";
        document.getElementById("back").style.display  = "";
    }
}

/*
const addID = () => 
{
    let sectionID = 0;

    var selectAll = document.querySelectorAll("section");

    for (let i = 0; i < selectAll.length; i++) {
        var e = selectAll[i];
    
        e.id = sectionID;

        sectionID ++;
    }
}

const halfSize = () => 
{
    var e = document.querySelectorAll("section")[0];

    e.style.fontSize = "50%";    
}

const ninjaLink = () => 
{
    var selectAll = document.querySelectorAll("a");

    for (let i = 0; i < selectAll.length; i++) {
        var e = selectAll[i];
    
        e.style.textDecoration = "none";
        e.style.color = "black";

        e.onmouseover = function() { mouseOver(e) };
        e.onmouseout  = function() { mouseOut(e) };
        e.onclick     = function() { click(e) };
    }
}

const mouseOver = (ele) =>
{
    ele.style.textDecoration = "underline";
    ele.style.color = "blue";
}
  
const mouseOut = (ele) =>
{
    ele.style.textDecoration = "none";
    ele.style.color = "black";
}

const click = (ele) => { ele.style.color = "red"; } //No menciono textDecoration porque este ya le será dado en el mouseOver

const imgCheckbox = () =>
{
    var x = document.createElement("INPUT");
    
    x.setAttribute("type", "checkbox");    
    document.body.appendChild(x);

    var but = document.querySelectorAll("button")[0];

    if(document.querySelectorAll("input")[0].checked) but.hidden = true;
    else but.hidden = false;
    
}

const changeImg = () => { document.querySelectorAll("button")[0].onclick = function() { juanjo() }; } //No verifico si checkbox está checked porque si no el botón no estaría disponible

const juanjo = () =>
{
    document.querySelectorAll("img")[0].src = "https://dam.ngenespanol.com/wp-content/uploads/2019/03/luna-colores-nuevo.png";
    
    var but = document.querySelectorAll("button")[0];
    but.disabled = true;
    but.style.backgroundColor = "gray";
}
*/