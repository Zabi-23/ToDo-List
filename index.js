var _a, _b;
{
    // **globala variabler**
    // Lista med alla todo-uppgifter
    var todos_1 = JSON.parse(localStorage.getItem('todos') || '[]');
    // DOM-elementet för listan med todo-uppgifter
    var todoList_1 = document.querySelector('#todo-list');
    // DOM-elementet för inmatningsfältet
    var inputTodo_1 = document.querySelector('#todo-input');
    //lägg en ny todo-uppgift
    function addTodo(text) {
        var newTodo = {
            id: Date.now(),
            text: text,
            done: false,
        };
        //lägg till den nya todo-uppgiften i listan
        todos_1.push(newTodo);
        //Spra todo-listan till local storge
        saveTodos();
        //Uppdatera listan med todo-uppgifter i DOM
        renderTodos();
    }
    //Ta bort en todouppgift
    function removeTodo(id) {
        //filtererar bort den todo som ska tas bort
        todos_1 = todos_1.filter(function (todo) { return todo.id !== id; });
        // spara todo-listan till lockal storage
        saveTodos();
        //Uppdatera listan med todo-uppgifter i DOM
        renderTodos();
    }
    //**Spara todo-listan till local storage**
    function saveTodos() {
        localStorage.setItem('todos', JSON.stringify(todos_1));
    }
    // **Uppdatera listan med todo-uppgifter i DOM**
    function renderTodos() {
        //töm listan med todo-uppgifter
        todoList_1.innerHTML = '';
        // loopa igenom alla todo-uppgifter
        todos_1.forEach(function (todo) {
            //skpa en ny li-element för varje todo-uppigift
            var li = document.createElement('li');
            //skapa en checkbox för varje todo
            var checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = todo.done;
            //updaterad checkboxen status när den ändras
            checkbox.addEventListener('change', function () {
                todo.done = checkbox.checked;
                saveTodos();
            });
            //lägg till text till todo uppgift
            li.textContent = todo.text;
            //lägg till checkboxen till li-element
            li.prepend(checkbox);
            //skapa en redigera knapp för varje todo-uppgift
            var editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.addEventListener('click', function () { return editTodo(todo.id); });
            li.appendChild(editButton);
            // skapa en tar bort knapp för varje todo-uppgift
            var deleteButton = document.createElement('button');
            deleteButton.textContent = 'x';
            //lägg till eventelyssnar för att ta bort todo-uppgiften
            deleteButton.addEventListener('click', function () { return removeTodo(todo.id); });
            // lägg till ta bort knapp till li element
            li.appendChild(deleteButton);
            // lägg till li element till listan med todo uppgifter
            todoList_1.appendChild(li);
        });
    }
    // Redigera en befintlig todo-uppgift
    function editTodo(id) {
        /* const todo = todos.find((t:Todo) => t.id === id); */
        var filteredTodos = todos_1.filter(function (t) { return t.id === id; });
        var todo = filteredTodos.length > 0 ? filteredTodos[0] : null;
        if (todo) {
            var newText = prompt('Redigera uppgift:', todo.text);
            if (newText) {
                todo.text = newText;
                saveTodos();
                renderTodos();
            }
        }
    }
    // Delete all
    function clearTdos() {
        // töm listan med todo uppgifter¨
        todos_1 = [];
        // spara todo-listan till lockal storage
        saveTodos();
        // Uppdatera listan med todo-uppgifter i DOM
        renderTodos();
    }
    // **Lägg till eventlyssnare för att lägga till en ny todo-uppgift**
    (_a = document.querySelector('#add-todo')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () { return addTodo(inputTodo_1.value); });
    // **Lägg till eventlyssnare för att ta bort alla todo-uppgifter**
    (_b = document.querySelector('.todo-delete-all')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', clearTdos);
    // **Uppdatera listan med todo-uppgifter när sidan laddas**
    window.addEventListener('DOMContentLoaded', function () { return renderTodos(); });
}
