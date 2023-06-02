import { useState, useEffec } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return; //만약 toDO가 비어있다면 그냥 return 시킴 -> 이 함수를 작동하지 않도록 만듦
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo(""); //그렇지 않다면 toDo를 추가하도록 만듦
  };
  console.log(toDos);
  console.log(toDos.map((item, index) => <li key={index}>{item}</li>));
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>{" "}
      {/*jsx에서 자바스크립트를 넣고 싶다면 { 중괄호 안에 작성 }*/}
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
        {/* toDos는 text로 된 array */}
      </ul>
    </div>
  );
}

export default App;

/* map 함수
map은 하나의 array에 있는 item을 내가 원하는 무엇이든지로 바꿔주는 역할을 하고
그건 결국 새로운 array로 return 해줌.

map은 함수의 첫번째 argument로 현재의 item을 가져올 수 있음.
map의 함수의 첫번째 argument가 진행되고 있는 순서에 맞는 item임.

map을 활용해 component를 return 한다!!
*/
