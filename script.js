const inputBox = document.getElementById('data');
const display = document.getElementById('list-container');

function toDo(){
    if(inputBox.value === ''){
        alert("You Not List The Note")
    }
    else{
        let li = document.createElement('li')
        li.innerHTML=inputBox.value;
        display.appendChild(li)

        let span=document.createElement('span')
        span.innerHTML='\u00d7'
        li.appendChild(span)
    }
    inputBox.value=''
    saveData()
}

display.addEventListener('click', function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle('checked')
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        saveData()
    }
},false);

function saveData(){
    localStorage.setItem('data', display.innerHTML)
}
function showData(){
    display.innerHTML=localStorage.getItem('data')
}
showData()
