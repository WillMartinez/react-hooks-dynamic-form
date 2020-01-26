import React, { useState } from 'react'
import { FormContainer, Form, Input, InputRow, Title, Button } from "./style"
import PropTypes from 'prop-types'

DynamicForm.propTypes = {
	colNames: PropTypes.array 
}

export default function DynamicForm(props) {
	const dynamicState = {}

	const createDynamicState = colNames => {
		colNames.map(item => (
			dynamicState[item] = ''
		))
	}
	createDynamicState(props.colNames)
	const [state, setState] = useState(dynamicState)
	
	const onChange = (event) => {
		const { name, value } = event.target
		setState(prevState => ({ ...prevState, [name]: value }))
		event.preventDefault()
	}
	const consoleLogState = () => {
		console.log(state)
	}

	const createDynamicForm = columnNames =>
		columnNames.map(item => (
			<InputRow key={`${item}`}>
				<Title>{item}:</Title>
				<Input
					key={item}
					type={'text'}
					value={state[item]}
					name={item}
					onChange={onChange}
				/>
				<br />
			</InputRow>
		))
	
	const {colNames} = props
	return (
		<FormContainer>
			<Form>
				{createDynamicForm(colNames)}
			</Form>
			<Button key={"button".concat(colNames)} onClick={consoleLogState}>Log State</Button>
		</FormContainer>
	)
}
