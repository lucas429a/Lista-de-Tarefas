const tasks = [
  {
    titulo: "Comprar comida para o gato",
    tipo: "Urgente",
  },
  {
    titulo: "Consertar Computador",
    tipo: "Prioritário",
  },
  {
    titulo: "Beber água",
    tipo: "Normal",
  },
];

function createCard(taskInfo) {
  // Criando elementos necessários
  const li = document.createElement("li");
  const div = document.createElement("div");
  const span = document.createElement("span");
  const p = document.createElement("p");

  
  
  // Adicionando o titulo da tarefa como texto do paragrafo
  p.innerText = taskInfo.titulo;
  
  // Adicionando span e paragrafo a div
  div.appendChild(span);
  div.appendChild(p);
  
  if(taskInfo.tipo == "Urgente"){
    span.className ="span-urgent"
  }else if(taskInfo.tipo == "Prioritário"){
    span.className = "span-priority"
  }else if(taskInfo.tipo == "Normal"){
    span.className = "span-normal"
  }

  // Criando botão para deletar tarefa
  const button = document.createElement("button");
  
  // Adicionando icone ao botão
  button.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
  button.addEventListener("click",function(e){
    let indexItem = tasks.indexOf(taskInfo);
    tasks.splice(indexItem,1);
    renderElements(tasks);
  }
  )
  
  /// Adicionando a div e o botão de deletar ao list item
  li.appendChild(div);
  li.appendChild(button);

  
  return li;
}

function renderElements(taskList) {
  const htmlList = document.querySelector(".tasks");
  htmlList.innerHTML = "";

  // Ajustar a lógica
  for(let i = 0; i < tasks.length; i++){
    let task =  tasks[i];

    let listTasks = createCard(task);
   
    htmlList.appendChild(listTasks);

  }
}
  
  const btn = document.querySelector("button");
  btn.addEventListener("click",function(e){
    e.preventDefault()
    let input = document.querySelector("#input_title");
    let value = input.value;
    let select = document.querySelector("#input_priority")
    let valueSelect = select.value;
    let newTask = {
          titulo : value,
          tipo : valueSelect
    }
    tasks.push(newTask);
    renderElements(tasks);
  })

  renderElements(tasks);



