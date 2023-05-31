import { useState } from "react";

function App() {
  const [counter, setValue] = useState(0); //setValue는 counter를 변경해주는 함수
  const onClick = () => setValue((prev) => prev + 1); //이전 counter에 1이 더해져서 return 됨
  console.log("render"); /* component가 render될 때 console.log 찍어봄 
  앞서, 우리는 계속 state를 change해 왔고(4줄), 그럴 때 마다 3~13줄이 다시 실행되는 것에 익숙함, 
  counter에 0이 아니라 새로운 값이 들어가는 것만 빼고는
  똑같이 function이 실행됨 */
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
