import { combineReducers } from 'redux';

// reducers
import todoReducer from './todo';
import visibilityFilterReducer from './visibility-filter';

export default combineReducers({
	todos: todoReducer,
	visibilityFilter: visibilityFilterReducer
});
