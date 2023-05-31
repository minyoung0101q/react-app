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
    console.log("SEARCH FOR", keyword); //이렇게 하면 한 번만 실행됨 -> keyword가 변화할 때만 코드를 실행해야 하는데..counter가 변화할 때는 제외하고.
  }, []);
  /* search keyword에 변화가 있을 때만! marvel영화를 검색하고 싶은데, counter가 변화할 때에도 marvel 영화를 검색하고 싶지는 않다. */
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

/* keyword가 변화할 때만 marvel을 검색하도록 할 것! */
