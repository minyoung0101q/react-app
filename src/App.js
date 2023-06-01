import { useState, useEffect } from "react";

function Hello() {
  useEffect(() => {
    console.log("I'm here");
  }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev); //setShowing을 통해 이전 value를 받아온 다음에, 그 value의 반댓값을 return 할 것
  // console.log(showing);
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

/* Cleanup function : 많이 쓰이는 것은 아님!

*/
