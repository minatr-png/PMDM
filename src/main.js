let step = 1;

document.addEventListener('DOMContentLoaded', () => {
    const cont = document.getElementById('continue');
    const back = document.getElementById('back');
    const con3 = document.getElementById('continue3');
    const bac3 = document.getElementById('back3');
    const fini = document.getElementById('finish');
    const urlI = document.getElementById('url');
    const towM = document.getElementById('town');
    
    stepManager();

    document.getElementById('postal').min = 0;
    document.getElementById('postal').max = 99999;
    document.getElementById('postal').maxLength = '4';

    cont.addEventListener('click', () =>
    {
        if (step != 2)
        {
            nextStep();
        }
        else step2ContinueAbled(cont);
    });
    back.addEventListener('click', () =>
    {
        stepBack();
    });
    con3.addEventListener('click', () =>
    {
        nextStep();
    });
    bac3.addEventListener('click', () =>
    {
        stepBack();
    });
    towM.addEventListener('focusout', () => 
    {
       towM.value = towM.value.toUpperCase();
    });
    fini.addEventListener('click', () => 
    {
        location.replace(document.getElementById('url').value);
    });
    urlI.addEventListener('input', () =>
    {
        step1ContinueAbled();
    });
});

const step1ContinueAbled = () => {
    if (document.getElementById('url').value != '') document.getElementById('continue').disabled = false;
    else document.getElementById('continue').disabled = true;
}

const step2ContinueAbled = (cont) => {
    const errors   = document.getElementById('errors');
    const erName   = document.getElementById('erName');
    const erBirth  = document.getElementById('erBirth');
    const erTown   = document.getElementById('erTown');
    const erPostal = document.getElementById('erPostal');

    const nameTF = document.getElementById('name').value      == '';
    const birtTF = document.getElementById('birthDate').value == '';
    const townTF = document.getElementById('town').value      == '';
    const postTF = document.getElementById('postal').value;

    if (nameTF || birtTF || postTF === '' || postTF.length > 5 || townTF)
    {
        let errorsText = [];

        if (nameTF) 
        {
            erName.style.display  = '';
            errorsText.push(erName.textContent);
        }
        else erName.style.display = 'none';
        if (birtTF) 
        {
            erBirth.style.display = '';
            errorsText.push(erBirth.textContent);
        }
        else erBirth.style.display = 'none';
        if (townTF) 
        {
            erTown.style.display  = '';
            errorsText.push(erTown.textContent);
        }
        else erTown.style.display = 'none';
        if (postTF === '' || postTF.length > 4) 
        {
            erPostal.style.display   = '';
            errorsText.push(erPostal.textContent);
        }
        else erPostal.style.display = 'none';

        while (errors.childElementCount != 0) errors.removeChild(errors.lastChild);

        errorsText.forEach(element => {
            const li   = document.createElement('LI');
            const text = document.createTextNode(element);
            li.appendChild(text);
            document.getElementById('errors').appendChild(li);
        });

        errors.style.display = '';
    }
    else
    {
        dataObj();
        nextStep();
    }
}

const dataObj = () => {
    const nameV = document.getElementById('name').value;
    const birtV = document.getElementById('birthDate').value;
    const direV = document.getElementById('direction').value;
    const postV = document.getElementById('postal').value;
    const provV = document.getElementById('province').value;
    const townV = document.getElementById('town').value;
    const ul    = document.getElementById('list');

    const user = {Nombre:nameV, Fecha_de_nacimiento:birtV, Direccion:direV, C_Postal:postV, Provincia:provV, Municipio:townV};

    while (ul.childElementCount != 0) ul.removeChild(ul.lastChild);

    Object.entries(user).forEach(element => {
        const li   = document.createElement('LI');
        const text = document.createTextNode(element[0] + ': ' + element[1]);
        li.appendChild(text);
        document.getElementById('list').appendChild(li);
    });
}

const stepManager = () => {
    if (step == 1)
    {
        document.getElementById('step2').style.display = 'none';
        document.getElementById('step3').style.display = 'none';
        document.getElementById('step4').style.display = 'none';
        document.getElementById('back').style.display  = 'none';

        document.getElementById('step1').style.display    = '';
        document.getElementById('continue').style.display = '';

        step1ContinueAbled();
    }
    if (step == 2)
    {
        document.getElementById('step1').style.display    = 'none';
        document.getElementById('step3').style.display    = 'none';
        document.getElementById('step4').style.display    = 'none';
        document.getElementById('errors').style.display   = 'none';
        document.getElementById('erName').style.display   = 'none';
        document.getElementById('erBirth').style.display  = 'none';
        document.getElementById('erPostal').style.display = 'none';
        document.getElementById('erTown').style.display   = 'none';

        document.getElementById('step2').style.display = '';
        document.getElementById('back').style.display  = '';
    }
    if (step == 3)
    {
        document.getElementById('step1').style.display = 'none';
        document.getElementById('step2').style.display = 'none';
        document.getElementById('step4').style.display = 'none';

        document.getElementById('step3').style.display    = '';
        document.getElementById('back').style.display     = '';
        document.getElementById('continue').style.display = '';
    }
    if (step == 4)
    {
        document.getElementById('step1').style.display    = 'none';
        document.getElementById('step2').style.display    = 'none';
        document.getElementById('step3').style.display    = 'none';
        document.getElementById('continue').style.display = 'none';

        document.getElementById('step4').style.display = '';
        document.getElementById('back').style.display  = '';
    }
}

const nextStep = () => {
    step ++;
    stepManager();
}

const stepBack = () => {
    step --;
    stepManager();
}