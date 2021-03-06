import React from 'react'
import DynamicForm from '../form/dynamic-form'
import { MainContainer, FormContainer, TableContainer } from "./style"
import DynamicTable from "../dynamic-table/dynamic-table"

const colNames1 = ["First Name", "Last Name", "User Name", "Email", "Id"]
const colNames2 = ["Address", "Zip Code", "State", "Country"]
const colNames3 = ["Major", "Minor", "Hobbies"]

export default function Main () {
	return (
		<MainContainer>
			<FormContainer>
				<DynamicForm colNames={colNames1} />
				<DynamicForm colNames={colNames2} />
				<DynamicForm colNames={colNames3} />
			</FormContainer>
			<TableContainer>
				<DynamicTable />
			</TableContainer>
		</MainContainer>
	)
}
