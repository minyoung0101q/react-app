import { useState, useEffect } from "react";
function App() {
  const [counter, setValue] = useState(0); //setValue는 counter를 변경해주는 함수
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1); //이전 counter에 1이 더해져서 return 됨
  const onChange = (event) => setKeyword(event.target.value);
  console.log("i run all the time");
  useEffect(() => {
    console.log("CALL THE API....");
  }, []);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;

/* useEffect function은 쉽게 말해서
우리 코드가 딱 한번만 실행될 수 있도록 보호해준다! */
/* 저번에 했던 state와 input의 콤비네이션을 연습할 것! */
