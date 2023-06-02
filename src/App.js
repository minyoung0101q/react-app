import { useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  return (
    <div>
      <h1>The Coins!</h1>
      {loading ? <strong>Loading...</strong> : null}
    </div>
  );
}

export default App;

/* Coin Tracker
State 생성 => 1. 하나는 로딩을 위한 거고 2. 또 다른 건 리스트를 잠시 갖고 있기 위한 것
*/
