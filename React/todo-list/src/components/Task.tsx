import { useReducer, useState } from "react"

type Task = {
    id: number;
    text: string;
}

const initialState: Task[] = [];

type Action = | { type: "add"; text: string } | { type: "remove"; id: number } | { type: "reset" };

function reducer(state: Task[], action: Action) {
    switch (action.type) {
        case 'add':
            return [
                ...state,
                { id: Date.now(), text: action.text }
            ]
        case 'remove':
            return state.filter(task => task.id != action.id)
        case 'reset':
            return []
    }
}

export default function Task() {
    const [input, setInput] = useState('');
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <input
                type="text"
                value={input}
                onChange={(event) => setInput(event.target.value)}
            />
    
            <button onClick={() => dispatch({ type: "add", text: input })}>Add task</button>
            <button onClick={() => dispatch({ type: "reset" })}>Reset</button>

            <hr /><br />

            <ul>
                {state.map((task) => (
                    <li key={task.id}>
                        <span>{task.text}</span>
                        <button onClick={() => dispatch({ type: "remove", id: task.id })}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}