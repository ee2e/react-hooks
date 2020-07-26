import React, { Component, useState } from "react";

// class App extends Component {
//   state = {
//     count: 0,
//   };
//   modify = (n) => {
//     this.setState({
//       count: n,
//     });
//   };
//   render() {
//     const { count } = this.state;
//     return (
//       <div>
//         <div>{count}</div>
//         <button onlick={() => this.modify(count + 1)}>Increment</button>
//       </div>
//     );
//   }
// }

const App = () => {
  // count : 값, setCount : 값을 변경하는 방법
  const [count, setCount] = useState(0);
  const [email, setEmail] = useState("");
  const updateEmail = (e) => {
    const {
      target: { value },
    } = e;
    setEmail(value);
  };
  return (
    <div>
      {count}
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <input placeholder="Email" value={email} onChange={updateEmail}></input>
    </div>
  );
};

export default App;
