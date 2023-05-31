import { useState, useEffect } from "react";
function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  useEffect(() => {
    console.log("I run only once.");
  }, []); //한 번만 실행 => beacuse 두번째 인자가 빈 array -> react.js가 아무것도 지켜보지 않음
  useEffect(() => {
    console.log("I run when 'keyword' changes.");
  }, [keyword]); //keyword(keyword는 state)가 변화할 때 실행
  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]); //counter가 변화할 때 실행
  useEffect(() => {
    console.log("I run when keyword & counter change");
  }, [keyword, counter]);
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

/*
useEffect를 연습하려면, 우리는 모든걸 하나씩 나눠볼 수 있음
useEffect를 하나 더 만듦
기억하기 -> keyword와 counter 둘 다 우리 state 안에 있음
*/
