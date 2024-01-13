// import React, { useReducer } from "react";

// type Props = {
//   name: string;
// };

// interface CounterState {
//   count: number;
//   error: string | null;
// }

// type CounterAction = { type: "INCREMENT" } | { type: "DECREMENT" };

// const CounterReducer = (
//   state: CounterState,
//   action: CounterAction
// ): CounterState => {
//   switch (action.type) {
//     case "INCREMENT":
//       return { ...state, count: state.count + 1 };

//     case "DECREMENT":
//       return { ...state, count: state.count - 1 };

//     default:
//       return { ...state, count: state.count };
//   }
// };

// const Counter: React.FC<Props> = ({ name }) => {
//   const [state, dispatch] = useReducer(CounterReducer, {
//     count: 0,
//     error: null,
//   });
//   return (
//     <div className="container">
//       <h4 className="m-2" style={{ userSelect: "none" }}>
//         This counter app is made by: {name}
//       </h4>
//       <p className="m-2 fs-4" style={{ userSelect: "none" }}>
//         Counter: {state.count}
//       </p>
//       <button
//         className="btn btn-primary m-2"
//         onClick={() => dispatch({ type: "INCREMENT" })}
//         disabled={state.count === 10}
//       >
//         Increment
//       </button>
//       <button
//         className="btn btn-danger m-2"
//         onClick={() => dispatch({ type: "DECREMENT" })}
//         disabled={state.count === 0}
//       >
//         Decrement
//       </button>
//     </div>
//   );
// };

// export default Counter;

import React, { useReducer } from "react";

type Props = {
  name: string;
};

interface CounterState {
  count: number;
  error: string | null;
}

type CounterAction = { type: "INCREMENT" } | { type: "DECREMENT" };

const CounterReducer = (
  state: CounterState,
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    default:
      return { ...state, count: state.count };
  }
};

const Counter: React.FC<Props> = ({ name }) => {
  const [state, action] = useReducer(CounterReducer, { count: 0, error: null });

  return (
    <div>
      <h4 className="m-2">This counter app is made by: {name}</h4>
      <p className="m-2">Counter: {state.count}</p>
      <button
        className="btn btn-success m-2"
        onClick={() => action({ type: "INCREMENT" })}
        disabled={state.count === 10}
      >
        Increment
      </button>
      <button
        className="btn btn-danger m-2"
        onClick={() => action({ type: "DECREMENT" })}
        disabled={state.count === 0}
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
