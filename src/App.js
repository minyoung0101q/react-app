import { func } from "prop-types";
import { useState, useEffect } from "react";

function Hello() {
  // function destroyedFn() {
  //   console.log("bye :(");
  // }
  // function effectFn() {
  //   console.log("created :)");
  //   return destroyedFn;
  // }
  useEffect(() => {
    console.log("hi :)");
    return () => console.log("bye :(");
  }, []);
  // useEffect(function () {
  //   console.log("hi :)");
  //   return function () {
  //     console.log("bye :(");
  //   };
  // }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev); //setShowing을 통해 이전 value를 받아온 다음에, 그 value의 반댓값을 return 할 것

  return (
    <div>
      {showing ? <Hello /> : null}{" "}
      {/* 자바스크립트를 쓸 때는 중괄호를 쓰는 것을 기억해야 한다! */}
      {/* 기억하기! => component는 단지 jsx를 부르는 function일 뿐이다! */}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>{" "}
      {/*클릭했을 때 showing이 true라면 Hide, showing이 false라면 Show */}
    </div>
  );
}

export default App;

/* react 경력자가 말하건데,
react 앱을 만들 때 destroyedFn이 주로 필요하지는 않다.
cleanup function을 사용하지 않는다고 함
이게 그렇게 자주 일어날 일은 아님
가끔은 해야 할 필요가 있을 수도 있지만,,
할 수 있는 것 자체는 좋다.

그러니까 실제로 destroyedFn 같은 것을 어디에 적용할 지 떠오르지 않는다고 해도
걱정하지 않아도 된다.
정말 특정한 케이스에만 사용하게 될 것이니까!
*/
