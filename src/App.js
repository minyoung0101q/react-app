import { useState } from "react";

function App() {
  const [counter, setValue] = useState(0); //setValue는 counter를 변경해주는 함수
  const onClick = () => setValue((prev) => prev + 1); //이전 counter에 1이 더해져서 return 됨
  console.log(
    "call an api"
  ); /* 새로고침을 하면 component가 처음으로 render될 것 => call an api
  하지만!! 다시 state가 변화하면, API를 또 불러올 거고, 이건 굳이 필요하지 X! 
  만약 state가 계속 변화하면 API를 또 불러올 것인데, 이건 굳이 필요하지 X, 우린 API를 계속 call 해야 하는 상황이 된다...
  이게 바로 우리가 해결하고 싶었던 문제!
  ***우리는 어떻게 특정 코드들이 첫번째 component render에서만 실행되게 하는지 배우고 싶다!! => 처음 한 번만!, 나중에 state가 변화해도, 그 코드는 다시 실행되지 않음!
  */
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;

/* 가끔은 첫번째로 render할 때만 코드를 실행하고 싶을 수 있음
지금은, 내 state가 변할 때마다 매번 이 console.log는 실행됨
첫번째 render에만 코드가 실행되고, 다른 state 변화에는 실행되지 않도록 하는 것을 하고 싶음!

=> 이런 일이 언제일어나느냐?!
예를 들어, 내가 API를 통해 데이터를 가져올 때
첫번째 component render에서 API를 call하고, 이후에 state가 변화할 때, 그 API에서 데이터를 또 다시 가져오고 싶진 않겠지요? 
*/
