// This will get the button element.
const button = document.getElementById("addButton");

button.addEventListener('click', function(){
    const input = document.getElementById("favchap");
    const inputValue = input.value;
    if (inputValue !== ' '){
        const list = document.getElementById("list");
        const li = document.createElement("li");
        const deleteButton = document.createElement('button');
        li.textContent = inputValue;
        deleteButton.textContent = '❌';

        deleteButton.addEventListener('click', function(){
            list.removeChild(li);
            input.focus();
        });

        li.append(deleteButton);
        list.append(li);
        input.value=' ';
        
    };
    input.focus();
   
});




