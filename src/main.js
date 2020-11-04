var step = 1;

/*
M
A
X
L
E
N
G
T
H
*/

document.addEventListener('DOMContentLoaded', () => {
    const cont = document.getElementById('continue');
    const back = document.getElementById('back');
    const fini = document.getElementById('finish');
    const urlI = document.getElementById('url');
    //const st2T = document.getElementsByClassName('step2Text');
    
    stepManager();
    //document.getElementById('postal').maxLength = '4';

    cont.addEventListener('click', () =>
    {
        if (step != 2)
        {
            step ++;
            stepManager();
        }
        else step2ContinueAbled(cont);
    });
    back.addEventListener('click', () =>
    {
        step --;
        stepManager();
    });
    fini.addEventListener('click', () => 
    {
        location.replace(document.getElementById("url").value);
    });
    urlI.addEventListener('input', () =>
    {
        step1ContinueAbled();
    });
});

const step1ContinueAbled = () => {
    if (document.getElementById("url").value != "") document.getElementById("continue").disabled = false;
    else document.getElementById("continue").disabled = true;
}

const step2ContinueAbled = (cont) => {
    var errors   = document.getElementById("errors");
    var erName   = document.getElementById("erName");
    var erBirth  = document.getElementById("erBirth");
    var erTown   = document.getElementById("erTown");
    var erPostal = document.getElementById("erPostal");

    var nameTF = document.getElementById("name").value      == "";
    var birtTF = document.getElementById("birthDate").value == "";
    var townTF = document.getElementById("town").value      == "";
    var postTF = document.getElementById("postal").value;

    if (nameTF || birtTF || postTF === "" || postTF.length > 4 || townTF)
    {
        var errorsText = "";

        if (nameTF) 
        {
            erName.style.display  = "";
            errorsText += erName.textContent;
        }
        else erName.style.display = "none";
        if (birtTF) 
        {
            erBirth.style.display = "";
            errorsText += erBirth.textContent + "\n";
        }
        else erBirth.style.display = "none";
        if (townTF) 
        {
            erTown.style.display  = "";
            errorsText += erTown.textContent + "\n";
        }
        else erTown.style.display = "none";
        if (postTF === "" || postTF.length > 4) 
        {
            erPostal.style.display   = "";
            errorsText += erPostal.textContent + "\n";
        }
        else erPostal.style.display = "none";

        var newDiv = document.createElement("div"); 
        var newContent = document.createTextNode("Hola!¿Qué tal?"); 
        newDiv.appendChild(newContent); //añade texto al div creado. 

        // añade el elemento creado y su contenido al DOM 
        var currentDiv = errors; 
        document.body.insertBefore(newDiv, currentDiv); 
        /*errors.textContent = errorsText;
        errors.style.display = "";*/
    }
    else
    {
        step ++;
        stepManager();
    }
}

const dataObj = () => {
    const nameV = document.getElementById('name');
    const birtV = document.getElementById('birthdate');
    const direV = document.getElementById('direction');
    const postV = document.getElementById('postal');
    const provV = document.getElementById('province');
    const townV = document.getElementById('town');

    var user = {name:nameV, birth:birtV, direction:direV, postal:postV, province:provV, town:townV};

    /*var ul = document.getElementById("list");
    ul.appendChild(document.createElement("li").value = "hkasdjhkasdjhkasdjhkjhkasjhkasdjhk");

    console.log(ul);*/
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
        document.getElementById("step1").style.display      = "none";
        document.getElementById("step3").style.display      = "none";
        document.getElementById("step4").style.display      = "none";
        document.getElementById("errors").style.display     = "none";
        document.getElementById("erName").style.display     = "none";
        document.getElementById("erBirth").style.display    = "none";
        document.getElementById("erPostal").style.display   = "none";
        document.getElementById("erTown").style.display     = "none";

        document.getElementById("step2").style.display = "";
        document.getElementById("back").style.display  = "";
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

        dataObj();
    }
}