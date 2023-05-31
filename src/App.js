import {
  useState,
  useEffect,
} from "react"; /*useEffect는 두 개의 argument를 가지는 function
첫 번째 argument : 딱 한 번만 실행하고 싶은 코드
두 번째 argument : 나중에 할 것
api를 호출하는 것과 같은 중요한 상황일 때, state가 변경되면 처음 한 번만 코드 실행, 그 이후 다시는 실행되지 않게 문제 해결부터!
*/
function App() {
  const [counter, setValue] = useState(0); //setValue는 counter를 변경해주는 함수
  const onClick = () => setValue((prev) => prev + 1); //이전 counter에 1이 더해져서 return 됨
  console.log("i run all the time");
  useEffect(() => {
    console.log("CALL THE API....");
  }, []);
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;

/* useEffect function은 쉽게 말해서
우리 코드가 딱 한번만 실행될 수 있도록 보호해준다! */
