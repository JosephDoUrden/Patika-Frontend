const divTodos = document.getElementById("todos");
const frmTodos = document.getElementById("frmTodos");
const txtTitle = document.getElementById("title");
const toastTrigger = document.getElementById("message");
const toastLiveExample = document.getElementById("showMessage");

let todos = [
    {
        title: "Wake Up!",
        done: true,
    },
    {
        title: "To do sports",
        done: false,
    },
    {
        title: "Take a walk",
        done: true,
    },
];

function listTodos() {
    todos.sort((a, b) => a.done - b.done); //yapılmayanların ilk sıraya gelmesini istiyorum bu yüzden "sort" kullandim
    saveData(); //verileri kaydetmek için...
    divTodos.innerHTML = "";
    for (const todo of todos) {
        let div = document.createElement("div");
        let input = document.createElement("input"); //"input" oluşturup tik atılan kutucukları ekledim
        input.setAttribute("type", "checkbox");
        input.checked = todo.done;
        input.onchange = (e) => toggleTodo(todo); //tiklediğimde alta geçmesi için "event" kullandım
        div.append(input);
        let span = document.createElement("span"); //"span" oluşturup içerikleri ekledim
        span.textContent = todo.title;
        div.append(span);
        let button = document.createElement("button"); //"button" oluşturup çarpı işareti ekledim
        button.setAttribute("type", "button");
        button.onclick = (e) => deleteTodo(todo); //silme işlemi için "event" kullandım
        button.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        div.append(button);
        divTodos.append(div);
    }
}

function saveData() { //verileri kaydetmek için "localStorage" kullandım
    localStorage["data"] = JSON.stringify(todos);
}

function loadData() {
    let json = localStorage["data"];  //localStorage'da data bilgisi var mı?
    if (!json) return; //eğer data yoksa buradan çık
    try {
        todos = JSON.parse(json);
    }
    catch { }
}

function toggleTodo(todo) { //tiklediğimde alta geçmesi için...
    todo.done = !todo.done;
    listTodos();
}

function deleteTodo(todo) { //silme işlemi için...
    let i = todos.indexOf(todo);
    todos.splice(i, 1);
    listTodos();
}



frmTodos.onsubmit = function (event) {  //formu submit edebilmek için "event" kullandım
    event.preventDefault();  //form kaybolmuyor,kutucukta kalıyor
    todos.push({  //yeni maddeler ekleyebilmek için...
        title: txtTitle.value.trim(),
        done: false
    });
    listTodos();
    txtTitle.value = "";
};

if (toastTrigger) {  //Toast için...
    toastTrigger.addEventListener('click', () => {
        const toast = new bootstrap.Toast(toastLiveExample)

        toast.show()
    })
}



loadData();
listTodos();
