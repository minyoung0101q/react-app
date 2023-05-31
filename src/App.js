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
  useEffect(() => {
    console.log("SEARCH FOR", keyword);
  }, [keyword]); //이 'keyword'가 변화할 때 코드를 실행할 거라고 react.js에게 알려주는 것

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

/* 코드 확인 : keyword가 변화할 때만 marvel을 검색하도록 할 것!
  이 'keyword'가 변화할 때 코드를 실행할 거라고 react.js에게 알려주는 것
*/
