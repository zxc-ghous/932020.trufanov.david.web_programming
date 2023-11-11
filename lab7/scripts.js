function createFigure(figureName){
    //Для того, чтобы элемент не вылез за пределы экрана и не залез на меню 
    const OFFSET = 50; 

    var numOfFigures = document.getElementById("numberOfFigures").value;
    for (let i=0; i < numOfFigures; i++){
        let div = document.createElement('div');
        div.className = 'Shape';

        let size = Math.random() * 300 + 5;
        let heightOfWindow = document.documentElement.clientHeight - size - OFFSET - 10;
        let widthOfWindow = document.documentElement.clientWidth - size - 10;

        div.style.width = size + 'px';
        div.style.height = size + 'px';
        
        div.style.top = Math.random() * heightOfWindow + OFFSET + 'px';
        div.style.left = Math.random() * widthOfWindow + 'px';
        
        div.style.border = '1px solid black';

        SelectFigure(figureName, div, size);

        document.body.append(div);

        div.onclick = function(){
            div.style.background = "yellow";
            div.style.opacity = '80%';
        };
        div.ondblclick = function(){div.remove()};
    }
}

function SelectFigure(figureName, div, size)
{
    if (figureName == "Circle")
    {
        div.style.borderRadius =  size/2 + 'px';
        div.style.background = 'green';
    }
    else if (figureName == "Square")
    {
        div.style.background = 'red';
    }
    else if (figureName == "Triangle")
    {
        div.style.border = size/2 + "px solid transparent";
        div.style.borderBottom = size/2 + "px solid blue";

        div.style.width = "0px";
        div.style.height = "0px";
    }
    else 
    {
        console.log('Некорректное имя фигуры');
    }
}
