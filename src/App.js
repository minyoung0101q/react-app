import { useState, useEffect } from "react";
function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  useEffect(() => {
    console.log("I run only once.");
  }, []);
  useEffect(() => {
    console.log("I run when 'keyword' changes.");
  }, [keyword]);
  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);
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

/* useEffect Recap 
ReactJS에서 가장 멋진 점은, component를 refresh(새로고침) 한다는 것, 새로운 데이터가 들어올 때 마다 UI를 refresh 함
즉, state가 변할 때마다 rerender 된다는 것(react는 변화가 일어날 때만 refresh함)

하지만, 가끔은 component안에 딱 한번만 실행하고 싶은 코드가 있을 수도 있고, 이런 경우에는 state가 변할 때마다 refresh 되는 것이 문제가 될 수 있다.
1. 코드를 시작할 때 처음 한 번만 실행하고 싶을 수도 있음
2. component안의 특정 데이터가 변화할 때 실행해야할 수도 있음
3. 특정 개수의 state가 변화할 때 실행시킬 수도 있음
=> 위 3개를 하기 위해서는 useEffect를 활용해야 함

useEffect의 두 개 argument에 대한 설명
첫번째 인자: 우리가 실행시키고 싶은 코드
두번재 인자: dependencies라고 불리우는 것, dependencies의 의미는 react.js가 지켜봐야 하는 것들 => 그리고 그것들이 변화할 때, react.js가 코드를 실행시키는 것.
두 번째 인자에 작성한 것이 변화하면 첫 번째 인자에 작성한 코드를 리액트가 실행시킴

useEffect는 react.js가 동작하는 관점에서 말하자면 방어막 같은 것
ReactJS는 간단한 동작으로 작동됨
=> state를 변화시킬 때 component를 재실행시키는 것!
UI의 관점으로 보면 위와 같은 점이 좋은 점이지만,
문제는 어떤 코드들은 계속해서 실행되면 안될 수도 있음! => 이것이 useEffect를 사용하는 이유임
useEffect를 통해 우리는 언제 코드를 실행하라 지 선택권을 가질 수 있음!
*/
