import { ADD_TODO, TOGGLE_TODO } from './todoActionTypes';

const initialState = [
	{ id: 1, text: "Pick up kids from school", completed: false },
	{ id: 2, text: "Prepare for presentation", completed: true },
	{ id: 3, text: "Print Statements", completed: false },
	{ id: 4, text: "Create invoice", completed: false },
	{ id: 5, text: "Call John", completed: true },
	{ id: 6, text: "Meeting with Alisa", completed: false }
]

export default function todoReducer(state = initialState, action) {
	switch (action.type) {
		case ADD_TODO:
			return [
				...state,
				{
					id: action.id,
					text: action.text,
					completed: false
				}
			];

		case TOGGLE_TODO:
			return state.map(todo =>
				(todo.id === action.id)
					? { ...todo, completed: !todo.completed }
					: todo
			);

		default:
			return state
	}
}
