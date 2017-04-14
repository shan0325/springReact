'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const client = require('./client');

class EmployeeController extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {employees: []};
	}
	
	componentDidMount() {
		client({method: 'GET', path: '/api/employees'}).done(response => {
			this.setState({employees: response.entity._embedded.employees});
		});
	}
	
	_insertEmployee(_firstName, _lastName, _description) {
		if(_firstName == "") {
			alert("firstName을 입력해주세요");
			return;
		}
		
		fetch('/api/employees', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'				
			},
			body: JSON.stringify({
				firstName: _firstName,
				lastName: _lastName,
				description: _description
			})
		})
		.then((response) => response.json())
		.catch((error) => {
			console.error(error);
		});
		
		client({method: 'GET', path: '/api/employees'}).done(response => {
			this.setState({employees: response.entity._embedded.employees});
		});
	}
	
	render() {
		return (
			<div>	
				<EmployeeList employees={this.state.employees}/>
				<EmployeeCreateor onInsert={this._insertEmployee.bind(this)}/>
			</div>
		)
	}
}

class EmployeeList extends React.Component {
	render() {
		var employees = this.props.employees.map(employee =>
			<Employee key={employee._links.self.href} employee={employee}/>
		);
		
		return (
			<table>
				<tbody>
					<tr>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Description</th>
					</tr>
					{employees}
				</tbody>
			</table>
		)
		
	}
}

class Employee extends React.Component {
	render() {
		return (
			<tr>
				<td>{this.props.employee.firstName}</td>
				<td>{this.props.employee.lastName}</td>
				<td>{this.props.employee.description}</td>
			</tr>
		)
	}
}

class EmployeeCreateor extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			firstName: "",
			lastName: "",
			description: ""
		};
	}
	
	handleChange(e) {
		var nextState = {};
		nextState[e.target.name] = e.target.value;
		this.setState(nextState);
	}
	
	handleClick() {
		this.props.onInsert(this.state.firstName, this.state.lastName, this.state.description);
		this.setState({
			firstName: "",
			lastName: "",
			description: ""
		});
	}

	render() {
		return (
			<div>	
				<input type="text" name="firstName" placeholder="firstName" value={this.state.firstName} onChange={this.handleChange.bind(this)}/>
				<input type="text" name="lastName" placeholder="lastName" value={this.state.lastName} onChange={this.handleChange.bind(this)}/>
				<input type="text" name="description" placeholder="description" value={this.state.description} onChange={this.handleChange.bind(this)}/>
				<button onClick={this.handleClick.bind(this)}>등록</button>
			</div>
		);
	}
}

export default EmployeeController;

