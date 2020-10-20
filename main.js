//Ejecución de las operaciones
document.addEventListener('DOMContentLoaded', () =>
{
    changeTitle();
    addID();
    halfSize();
    ninjaLink();
    imgCheckbox();
});


//Operación 1
const changeTitle = () => { document.title = "Ahora trabajando con DOM dinámico"; }


//Operación 2
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


//Operación 3
const halfSize = () => 
{
    var e = document.querySelectorAll("section")[0];

    e.style.fontSize = "50%";    
}


//Operación 4
//Esta función se encarga de darle el formato inicial a los links y cuando el usuario interactúa con ellos llama a la función indicada
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

//Estas tres funciones dan el formato al link cuando el ratón se pone encima, se quita o clicka respectivamente
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

//Las dos siguientes operaciones no me funcionan pero dejo lo que yo había intentado hacer y que no funciona

//Operación 5
const imgCheckbox = () =>
{
    var x = document.createElement("INPUT");
    
    x.setAttribute("type", "checkbox");    
    document.body.appendChild(x);

    var but = document.querySelectorAll("button")[0];

    if(document.querySelectorAll("input")[0].checked) but.hidden = true;
    else but.hidden = false;
    
}

//Operación 6
const changeImg = () => { document.querySelectorAll("button")[0].onclick = function() { juanjo() }; } //No verifico si checkbox está checked porque si no el botón no estaría disponible


const juanjo = () =>
{
    document.querySelectorAll("img")[0].src = "https://dam.ngenespanol.com/wp-content/uploads/2019/03/luna-colores-nuevo.png";
    
    var but = document.querySelectorAll("button")[0];
    but.disabled = true;
    but.style.backgroundColor = "gray";
}