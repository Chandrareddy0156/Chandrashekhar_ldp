// export default function Button() {
//     function handleClick() {
//       alert('You clicked me!');
//     }
  
//     return (
//       <button onClick={handleClick}>
//         Click me
//       </button>
//     );
//   }
  

//   <button onClick={function handleClick() {
//     alert('You clicked me!');
//   }}>

{/* <button onClick={() => {
  alert('You clicked me!');
}}> */}



// Reading props in event handlers


// function AlertButton({ message, children }) {
//     return (
//       <button onClick={() => alert(message)}>
//         {children}
//       </button>
//     );
//   }
  
//   export default function Toolbar() {
//     return (
//       <div>
//         <AlertButton message="Playing!">
//           Play Movie
//         </AlertButton>
//         <AlertButton message="Uploading!">
//           Upload Image
//         </AlertButton>
//       </div>
//     );
//   }
  

// Stopping propagation 
// function Button({ onClick, children }) {
//     return (
//       <button onClick={e => {
//         e.stopPropagation();
//         onClick();
//       }}>
//         {children}
//       </button>
//     );
//   }
  
//   export default function Toolbar() {
//     return (
//       <div className="Toolbar" onClick={() => {
//         alert('You clicked on the toolbar!');
//       }}>
//         <Button onClick={() => alert('Playing!')}>
//           Play Movie
//         </Button>
//         <Button onClick={() => alert('Uploading!')}>
//           Upload Image
//         </Button>
//       </div>
//     );
//   }
  
// prevent default page reload

// export default function Signup() {
//     return (
//       <form onSubmit={e => {
//         e.preventDefault();
//         alert('Submitting!');
//       }}>
//         <input />
//         <button>Send</button>
//       </form>
//     );
//   }




import { useReducer, useRef, useEffect } from "react";


interface Task {
  id: number;
  text: string;
  completed: boolean;
}

type Action =
  | { type: "ADD_TASK"; payload: string }
  | { type: "TOGGLE_TASK"; payload: number }
  | { type: "DELETE_TASK"; payload: number };

/* ---------------- REDUCER ---------------- */
function taskReducer(state: Task[], action: Action): Task[] {
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...state,
        {
          id: Date.now(),
          text: action.payload,
          completed: false,
        },
      ];

    case "TOGGLE_TASK":
      return state.map((task) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task
      );

    case "DELETE_TASK":
      return state.filter((task) => task.id !== action.payload);

    default:
      return state;
  }
}

/* ---------------- COMPONENT ---------------- */
export default function TaskManager() {
  const [tasks, dispatch] = useReducer(taskReducer, []);
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input on first render
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleAddTask = () => {
    const value = inputRef.current?.value.trim();
    if (!value) return;

    dispatch({ type: "ADD_TASK", payload: value });
    inputRef.current!.value = "";
    inputRef.current?.focus();
  };

  return (
    <div style={{ maxWidth: 400 }}>
      <h3>Task Manager</h3>

      <input ref={inputRef} placeholder="Enter task..." />
      <button onClick={handleAddTask}>Add</button>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span
              onClick={() =>
                dispatch({ type: "TOGGLE_TASK", payload: task.id })
              }
              style={{
                cursor: "pointer",
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.text}
            </span>

            <button
              onClick={() =>
                dispatch({ type: "DELETE_TASK", payload: task.id })
              }
            >
             Delete 
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
