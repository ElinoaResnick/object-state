// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [toDo, setToDo] = useState('')
  const [toDoList, setToDoList] = useState(['Buy Milk', 'Do HW', 'Drink Water', 'bla'])

  function handleToDoChange(e){
    setToDo(e.target.value)
  }

  console.log("====Example====")
  let A = 'Messi'
  let B = A

  console.log(B)
  B = 'Ronaldo'
  console.log(A)
  console.log(B)

  console.log("====Arreys====")
  let listA = ['Messi','Mbappe', 'Ronaldo']
  let listB = listA
  listA.push('Kane')
  listB.push('Mordic')
  console.log(listA)
  console.log(listB)

  console.log("====Spred Opreator====")
  let listC = [...listA]
  listC.push('Grizman')
  console.log(listA)
  console.log(listC)

  let listD = listA.filter(player => player !== 'Ronaldo')
  console.log(listA)
  console.log(listD)


  function addItem(){
    // setToDoList(toDoList.push(toDo))
    setToDoList([...toDoList,toDo])
    console.log(toDoList)
  }

  return (
    <div className="App">
      <input value={toDo} onChange = {handleToDoChange}/>
      <button onClick={addItem}>add to list</button>
      <h3>My To Do List</h3>
      <ul>
        {
          toDoList.map(
            toDo =>(
              <li>{toDo}</li>
            )
          )
        }
      </ul>
    </div>
  );
}

export default App;
