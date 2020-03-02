import { SET_VISIBILITY_FILTER } from './visibilityFilterActionTypes';
import { VisibilityFilters } from '../../const';

export default function visibilityFilterReducer(state = VisibilityFilters.SHOW_ALL, action) {
	switch (action.type) {
		case SET_VISIBILITY_FILTER:
			return action.filter;

		default:
			return state;
	}
}
