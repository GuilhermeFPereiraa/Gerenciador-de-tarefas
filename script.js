let input = document.getElementById('inputTask');
let btn = document.getElementById('btnEnter');
let main = document.getElementById('main');
let contador = 0;

function addTask() {
  let inputValue = input.value;
  ++contador;
  
  if ((inputValue !== '') && (inputValue !== null) && (inputValue !== undefined)) {
    let valorTask = `<div id='${contador}' class="task">
    <div id='${contador}' class="iconTask" onclick='enviarTask(${contador})'>
      <i id='icone_${contador}' class="fa-regular fa-circle"></i>
    </div>
    <div id='${contador}' class="inputTask" onclick='enviarTask(${contador})'>
      ${inputValue}
    </div>
    <div class="btnTask">
      <button class="btnDelete" onclick='deleteTask(${contador})'>Delete</button>
    </div>
  </div>`
  main.innerHTML += valorTask;
  }
  input.value = '';
  input.focus();
}

function enviarTask(id) {
  let enviar = document.getElementById(id);
  let classe = enviar.getAttribute('class');

  if (classe == 'task') {
    enviar.classList.add('taskFeita');
    
    var icone = document.getElementById(`icone_${id}`);
    icone.classList.remove('fa-circle');
    icone.classList.add('fa-circle-xmark');
  } else {
    enviar.classList.remove('taskFeita');

    var icone = document.getElementById(`icone_${id}`);
    icone.classList.remove('fa-circle-xmark');
    icone.classList.add('fa-circle');
  }
}

function deleteTask(id) {
  let deletar = document.getElementById(id);
  deletar.remove();
}

input.addEventListener('keydown', function(e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    btn.click();
  }
})