// useReducer is very similar to useState, but it lets you 
// move the state update logic from event handlers into a single function 
// outside of your component



// UI → dispatch(action)
//         ↓
//     reducer(state, action)
//         ↓
//      new state
//         ↓
//     component re-renders


// Parameters 
// reducer: The reducer function that specifies how the state gets updated. It must be pure, should take the state and action as arguments, and should return the next state. State and action can be of any types.
// initialArg: The value from which the initial state is calculated. It can be a value of any type. How the initial state is calculated from it depends on the next init argument.
// optional init: The initializer function that should return the initial state. If it’s not specified, the initial state is set to initialArg. Otherwise, the initial state is set to the result of calling init(initialArg).
// Returns 
// useReducer returns an array with exactly two values:

// The current state. During the first render, it’s set to init(initialArg) or initialArg (if there’s no init).
// The dispatch function that lets you update the state to a different value and trigger a re-render.






// import { useReducer } from 'react';



// function reducer(state, action) {
//   switch (action.type) {
//     case 'incremented_age': {
//       return {
//         name: state.name,
//         age: state.age + 1
//       };
//     }
//     case 'changed_name': {
//       return {
//         name: action.nextName,
//         age: state.age
//       };
//     }
//   }
//   throw Error('Unknown action: ' + action.type);
// }

// const initialState = { name:'chandra', age: 22 };

// export default function Form() {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   function handleButtonClick() {
//     dispatch({ type: 'incremented_age' });
//   }

//   function handleInputChange(e) {
//     dispatch({
//       type: 'changed_name',
//       nextName: e.target.value
//     }); 
//   }

//   return (
//     <>
//       <input
//         value={state.name}
//         onChange={handleInputChange}
//       />
//       <button onClick={handleButtonClick}>
//         Increment age
//       </button>
//       <p>Hello, {state.name}. You are {state.age}.</p>
//     </>
//   );
// }



// useRef is a React Hook that lets you store a mutable value that:

// import { useRef, useEffect } from "react";

// export default function LoginForm() {
//   const emailInputRef = useRef<HTMLInputElement>(null);

// Auto-focus input when page loads
//   useEffect(() => {
//     emailInputRef.current?.focus();
//   }, []);

//   return (
//     <div>
//       <h3>Login</h3>
//       <input ref={emailInputRef} placeholder="Email" />
//       <button>Submit</button>
//     </div>
//   );
// }
