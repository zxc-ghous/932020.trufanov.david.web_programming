function AddRow()
{
    var row = document.querySelector(".row").cloneNode(true);
    var table = document.querySelector("#table");
    table.appendChild(row);
}

function DeleteRow(button) 
{
    button.parentElement.remove();
}

function MoveUp(button) {
    let a = button.parentElement.previousElementSibling;
    if (a)
    {
        //Вставляет a после текущего элемента
        button.parentElement.after(a);
    }
}

function MoveDown(button) {
    let a = button.parentElement.nextElementSibling;
    if(a)
    {
        //Вставляет a перед текущим элементом
        button.parentElement.before(a);
    }
}

function Save() {
    let i1 = document.querySelectorAll(".input1");
    let i2 = document.querySelectorAll(".input2");

    var a = []
    for (var i = 1; i < i1.length; i++)         //т.к. первый элемент - скрытый блок
    {
        a.push(i1[i].value + " : " + i2[i].value);
    }
    a = JSON.stringify(a);
    a = '{' + a.slice(1, a.length - 1) + '}';   //т.к. оконечные элементы - квадратные скобки, они исключены

    let outputDiv = document.querySelector("#output");
    outputDiv.innerHTML = a;
}
