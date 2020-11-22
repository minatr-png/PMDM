document.addEventListener('DOMContentLoaded', () => {
    const titleButton = document.getElementById('page-title-input');
    const description = document.getElementById('page-description');

    titleButton.addEventListener('focusout', () => {
        document.title = titleButton.value;
    });

    const divButtons  = document.createElement('div');

    const button1 = divButtons.appendChild(document.createElement('button'));
    const button2 = divButtons.appendChild(document.createElement('button'));
    const button3 = divButtons.appendChild(document.createElement('button'));

    button1.textContent = "Sección 1";
    button2.textContent = "Sección 2";
    button3.textContent = "Sección 3";
    button1.style.marginRight = '1em';
    button2.style.marginRight = '1em';

    document.body.appendChild(divButtons);

    button1.addEventListener('click', () => {
        showSection(1);
    });

    button2.addEventListener('click', () => {
        showSection(2);
    });

    button3.addEventListener('click', () => {
        showSection(3);
    });

    const divContent  = document.createElement('div');
    document.body.appendChild(divContent);

    button1.addEventListener('mouseover', () => {
        divContent.innerHTML = document.getElementById('section-1').innerHTML;
    });

    button2.addEventListener('mouseover', () => {
        divContent.innerHTML = document.getElementById('section-2').innerHTML;
    });

    button3.addEventListener('mouseover', () => {
        divContent.innerHTML = document.getElementById('section-3').innerHTML;
    });

    description.addEventListener('input', () => {        
        const counter = document.querySelectorAll('label')[1];
        counter.innerHTML = "Descripción del sitio: " + description.value.length;
    });

    const btnCounter  = document.createElement('button');
    btnCounter.innerHTML = "Cuenta palabras";
    document.body.appendChild(btnCounter);

    btnCounter.addEventListener('click', () => {
        const texts = document.querySelectorAll('section');
        texts.forEach(text => {
            const textLength = text.innerHTML.length;
            if(textLength > 10) 
            {
                const count = text.appendChild(document.createElement('p'));
                count.innerHTML = textLength;
            }
        });
    });
});

const showSection = (sect) => {
    document.getElementById('section-1').style.display = 'none';
    document.getElementById('section-2').style.display = 'none';
    document.getElementById('section-3').style.display = 'none';

    if (sect === 1)  document.getElementById('section-1').style.display = '';
    else if (sect === 2)  document.getElementById('section-2').style.display = '';
    else document.getElementById('section-3').style.display = '';
}