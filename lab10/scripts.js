var isLightOn = false;

//transition для элементов по умолчанию находится тут
function Initialization()
{
    document.getElementById('curtain').style.transition = '0.2s';   //скорость приподнимания занавеса
    document.getElementById('light').style.transition = '0.2s';     //скорость включения света
    document.getElementById('rabbit').style.transition = '0.5s';    //скорость перемещения кролика
    document.getElementById('bird').style.transition = '0.5s';      //скорость перемещения голубя
    document.getElementById('wizard').style.transition = '0.2s';    //скорость появления фокусника
    document.getElementById('hat').style.transition = '0.2s';       //скорость появления шляпы
}

//Поднятие занавеса
function RaiseCurtain() 
{
    let curtain = document.getElementById('curtain');
    curtain.style.transition = '1s';
    curtain.style.marginTop = '-100vh';
}

function ReplaceAnimal(currentAnimal) 
{
    let bird = document.getElementById('bird');
    let rabbit = document.getElementById('rabbit');
    let upperPosition = '550px';
    let lowerPosition = '650px';
    bird.style.transition = rabbit.style.transition = '0.5s'


    if (currentAnimal == 'bird')
    {
        rabbit.style.top = upperPosition;
        bird.style.top = lowerPosition;
    }
    else if (currentAnimal == 'rabbit')
    {
        bird.style.top = upperPosition;
        rabbit.style.top = lowerPosition;
    }
    else
    {
        console.log("Некорректно задано имя животного");
    }
}

function LightOn() 
{
    let elements = new Array();
    elements[0] = document.getElementById('light');
    elements[1] = document.getElementById('rabbit');
    elements[2] = document.getElementById('hat');
    elements[3] = document.getElementById('bird');
    elements[4] = document.getElementById('wizard');

    //Длительность переходов задана в функции Initialization
    if (isLightOn)      //Выключаем свет
    {
        elements[0].style.opacity = 0;

        for (let i = 1; i < 5; i++)
        {
            elements[i].style.opacity = 0;
            elements[i].style.transition = '0.2s'
        }

        isLightOn = false;
    }
    else                //Иначе включаем
    {
        elements[0].style.opacity = 0.5;

        for (let i = 1; i < 5; i++)
        {
            elements[i].style.opacity = 1;
            elements[i].style.transition = '0.2s'
        }

        isLightOn = true;
    }
}