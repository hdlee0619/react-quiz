import './App.css';
import { useState } from 'react';

function App() {
  const [toDo, setToDo] = useState([]);
  const [toDoTitle, setToDoTitle] = useState('');

  const clickHandler = () => {
    let copy = [toDoTitle, ...toDo];
    setToDo(copy);
    setToDoTitle('');
  };

  return (
    <div className="App">
      <div className="input-box">
        <input type="text" placeholder="자바스크립트를 배워봅시다" onChange={(e) => setToDoTitle(e.target.value)} value={toDoTitle} />
        <button onClick={clickHandler}>추가하기</button>
      </div>
      <div className="list-container">
        <h3 className="list-title">Todo List</h3>
        <div className="list-cards">
          {toDo.map((item, idx) => (
            <div className="todo-card" key={idx}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
