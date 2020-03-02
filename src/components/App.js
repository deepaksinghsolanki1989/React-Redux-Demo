import React from 'react';
import Filter from './Filter';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

const App = () => (
	<div style={{ border: "1px solid #333", margin: "100px auto 0", padding: "0 25px 25px", width: "40%" }}>
		<div style={{ textAlign: "center" }}>
			<h1>Todo List</h1>
		</div>
		<div style={{ float: "left", marginBottom: "20px", width: "100%" }}>
			<div style={{ float: "left" }}><AddTodo /></div>
			<div style={{ float: "right" }}><Filter /></div>
		</div>
		<div>
			<VisibleTodoList />
		</div>
	</div>
)

export default App