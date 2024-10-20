// This will get the button element.
const button = document.getElementById("addButton");
const chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});



button.addEventListener('click', function(){
    const input = document.getElementById("favchap");
    const inputValue = input.value;
    if (inputValue !== ' '){
        displayList(inputValue);
        chaptersArray.push(inputValue);
        setChapterList();
        inputValue = '';
        input.focus();
    };
    
   
});

deleteButton.addEventListener('click', function(){
    list.removeChild(li);
    input.focus();
});

function displayList(item) {
    const list = document.getElementById("list");
    const li = document.createElement("li");
    const deleteButton = document.createElement('button');
    li.textContent = item;
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');
    li.append(deleteButton);
    list.append(li);
    deleteButton.addEventListener('click', function(){
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
    input.value=' ';
};

function setChapterList() {
    localStorage.setItem("BomList", JSON.stringify(chaptersArray));
};

function getChapterList() {
    return JSON.parse(localStorage.getItem('BomList'));
};

function deleteChapter(chapter){
    chapter = chapter.slice(0, chapter.length -1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
};