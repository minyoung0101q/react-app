import { useState, useEffect } from "react";
function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("i run all the time");
  useEffect(() => {
    console.log("CALL THE API....");
  }, []);
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("SEARCH FOR", keyword);
    }
  }, [keyword]);

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
useEffect에 대해 배워야 할 것은 다 배움
마지막 한 개가 남긴 했지만, 아직은 꼭 필요한 것이 아니기에 나중에 배울 것
*/

/*
언제 코드가 실행될지 결정하는 방법을 배움
예를 들면 component가 생성되는 첫 시작점, 
무엇인가 update될 때도 코드 실행 가능, 그리고 특정한 keyword가 update될 때만 코드를 실행할 수 있음
*/