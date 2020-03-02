import { ADD_TODO, TOGGLE_TODO } from './todoActionTypes';

let nextTodoId = 0;

export const addTodo = text => ({
	type: ADD_TODO,
	id: nextTodoId++,
	text
});

export const toggleTodo = id => ({
	type: TOGGLE_TODO,
	id
});