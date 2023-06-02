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
    </div>
  );
}

export default App;

/* State, Effect, props를 연습하면서 우리가 지금까지 배운 모든 것들을 적용해볼 것
먼저, 간단한 to-do list를 만드는 것으로 시작!
*/

/*
바닐라JS에서 배운 내용: form이 submit이라는 이벤트를 갖고 있음

*/
