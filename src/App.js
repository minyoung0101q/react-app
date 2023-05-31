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
    if (keyword !== "" && keyword.length > 5) {
      console.log("SEARCH FOR", keyword);
    }
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

/* 
이번엔 counter가 변화할 때에는 console.log("SEARCH FOR", keyword); => 이 코드는 실행되지 X.
위 코드는 keyword가 변화할 때만 실행됨.
이제 useEffect의 첫 번째 인자와 두 번째 인자를 쓰는 방식을 이해함

정리하자면 다음과 같다.
우리가 useEffect의 첫번째 인자만 써주고, 두번째 인자를 빈 array를 준다면([]) => 코드는 단 한 번만 실행된다.
9줄에서는 react가 지켜볼 게 아무것도 없으니까(두번째 인자가 빈 배열이니까) 처음 한 번만 실행된다.
12줄에서는 keyword가 변화할 때 마다 코드가 항상 실행된다. => 이건 우리가 react.js에게 '이 keyword를 지켜봐.'라고 말해줬기 때문!!
***즉, keyword가 변화할 때 코드를 실행하라는 말이다!!***
(1)
크롬에서 새로고침하면!
예상대로 처음에는 모든 게 실행된다.
i run all the time
CALL THE API....
SEARCH FOR
위가 console 창에 뜬다.

(2)
만약 click me 버튼을 클릭하면
계속 실행되고자 했던 코드만 실행되고,
검색하는 movies API는 호출되지 않는 것을 볼 수 있다!!
i run all the time => 이것만 클릭한 횟수만큼 console 창에 뜬다.

(3)
만약 영화를 검색한다면 => input 창에 키보드로 입력하는 것을 의미
이제는 영화를 검색하고 있다!
예를 들어 m 을 치면 => console창에는 
i run all the time
SERACH FOR m
위와 같이 뜬다!

이것이 useEffect의 마법이다!
*/

/* 
하지만, 아직 검색창이 완벽하게 동작한다고 할 수는 없다!
그건 component가 시작될 때도 검색이 되고 있기 때문이다.
=> if문 활용한 코드 확인
keyword가 빈 값이 아니라면, 그 때 keyword를 검색.

<if문 넣어서 크롬 새로고침(실행)>
=> (1) console창에 아래와 같이 뜬다.
i run all the time
CALL THE API....
=> 항상 실행되는 코드와 movies API가 모두 한 번씩 실행되었다.

(2) click me button을 누르면 다른것들 아무것도 실행되지 않고 있다.
i run all the time => 이 문장이 콘솔 창에 클릭 횟수에 따라 뜬다.

(3) 검색을 한다.
i run all the time이 클릭 횟수에 따라 늘어나고,
5글자를 넘는다면(if문 조건) 이제는 marvel에 대한 검색이 이루어진 것을 확인 가능하다!
*/

/*
StrictMode 제거하면 console.log가 두 번 찍히는 것을 방지 => 아래 블로그 참고
: https://velog.io/@hyes-y-tag/React-useEffect%EA%B0%80-%EB%91%90%EB%B2%88-%EC%8B%A4%ED%96%89%EB%90%9C%EB%8B%A4%EA%B3%A0
*/
