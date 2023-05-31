import { useState } from "react";

function App() {
  const [counter, setValue] = useState(0); //setValue는 counter를 변경해주는 함수
  const onClick = () => setValue((prev) => prev + 1); //이전 counter에 1이 더해져서 return 됨
  console.log("call an api");
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
