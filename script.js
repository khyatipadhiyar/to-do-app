const todoTaskList = document.querySelector('.todoTaskList');
const todoEntry = document.querySelector('#todoEntry');
const todoActivity = document.querySelector('.todoActivity');

//Light Mode

const headerMode = document.querySelector('.headerMode');
const modeImg = document.querySelector('.mode');
const bodyDark =document.querySelector('body');
const createToDo = document.querySelector('.createToDo');
const todoTaskListLight = document.querySelector('.todoTaskList');
const todoActivityLight = document.querySelector('.todoActivity');
const inputLight = document.querySelector('.inputDark');


headerMode.addEventListener('click',(e)=>{
modeImg.classList.toggle('modeLight');
modeImg.classList.toggle('mode');
bodyDark.classList.toggle('bodyDark');
bodyDark.classList.toggle('bodyLight');
createToDo.classList.toggle('createToDoLight');
todoTaskListLight.classList.toggle('todoTaskListLight');
todoActivityLight.classList.toggle('todoActivityLight');
inputLight.classList.toggle('inputLight');
})
//Default List

let arrTodoList = ['Complete Todo App on Frontend Mentor','Pickuup groceries','read for  1 hour','10 minitues meditation'];

let count = 0;
arrTodoList.forEach(todoList => {
  const todoItem = document.createElement('Div');
  todoItem.className='todoItem';
   todoItem.innerHTML=`
   
   <div class="itemIndividual">
   <div class="itemIndividualText">
       <div class="round">
         <input type="checkbox" id="checkbox${count}" />
         <label for="checkbox${count}"></label>
       </div>
       <div>
         <p>${todoList}</p>
       </div>
   </div>
   <div class="itemIndividualClose">
     <img src='images/icon-cross.svg' class='crossImg'>
   </div>
 </div>

      `;

//close todo item
      let getTodoItemindividual = todoItem.querySelector('.itemIndividualClose');
      
      getTodoItemindividual.addEventListener('click',(e)=>{
       todoItem.remove();
       countActive();
      })

   todoTaskList.appendChild(todoItem);

   let getroundEl = todoItem.querySelector('.round label');
   let getitems = todoItem.querySelector('p');
   getroundEl.addEventListener('click',(e)=>{
    getitems.classList.toggle('line-through');
    countActive();
   });
   count=count+1;
  
 });

 //Append ToDoLIst Item
todoEntry.addEventListener("keyup", function(event) {
  
  event.preventDefault();
  if (event.keyCode === 13) {

  const todoItem = document.createElement('Div');
  todoItem.className='todoItem';
   todoItem.innerHTML=`
        <div class="itemIndividual">
          <div class="itemIndividualText">
              <div class="round">
                <input type="checkbox" id="checkbox${count}" />
                <label for="checkbox${count}"></label>
              </div>
              <div>
                <p>${event.target.value}</p>
              </div>
          </div>
          <div class="itemIndividualClose">
            <img src='images/icon-cross.svg' class='crossImg'>
          </div>
        </div>
      `;
     //close todo item
      let getTodoItemindividual = todoItem.querySelector('.itemIndividualClose');
     
      getTodoItemindividual.addEventListener('click',(e)=>{
       todoItem.remove();
       countActive();
      })


      let getroundEl = todoItem.querySelector('.round label');
      let getitems = todoItem.querySelector('p');
      getroundEl.addEventListener('click',(e)=>{
       getitems.classList.toggle('line-through');
     countActive();
       
      });
   todoTaskList.appendChild(todoItem);
   count=count+1;
  }
  countActive();
});
// to do close


//Todo Actiive

const itemActive = document.querySelector('.itemActive');

itemActive.addEventListener('click',(e)=>{
 
  allItems = document.querySelectorAll('.todoItem');
  
  allItems.forEach((aIE)=>{
    let pElement = aIE.querySelector('p');
    if(pElement.classList.contains('line-through')){
      aIE.style.display='none';
    }else{
      aIE.style.display='flex';
    }
  })
 
});
//To do all
const itemAll = document.querySelector('.itemAll');

itemAll.addEventListener('click',(e)=>{
 
  allItems = document.querySelectorAll('.todoItem');
  
  allItems.forEach((aIE)=>{
    aIE.style.display='flex';
  })
  
});

//To do completed

const itemCompleted = document.querySelector('.itemCompleted');

itemCompleted.addEventListener('click',(e)=>{
 
  allItems = document.querySelectorAll('.todoItem');
  
  allItems.forEach((aIE)=>{
    let pElement = aIE.querySelector('p');
    if(!pElement.classList.contains('line-through')){
      aIE.style.display='none';
    }else{
      aIE.style.display='flex';
    }
  })
  
});
//itemleft

const itemLeftlab = document.querySelector('.itemLeftlab');


function countActive(){
  allItems = document.querySelectorAll('.todoItem');
  let leftItem = document.querySelector('.leftItem');
  
  let count=0;

    allItems.forEach((aIE)=>{
      let pElement = aIE.querySelector('p');
      
      if(!pElement.classList.contains('line-through')){
        count=count+1;
      }
     
    })
    //return count;
    leftItem.innerHTML=count;
}

//clear todo


const itemClear = document.querySelector('.itemClear');
allItems = document.querySelectorAll('.todoItem');
console.log(allItems);

itemClear.addEventListener('click',()=>{
  allItems.forEach((aIE)=>{
    let pElement = aIE.querySelector('p');
    if(pElement.classList.contains('line-through')){
      aIE.remove();
    }
  })
})
countActive();

