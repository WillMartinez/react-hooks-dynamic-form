import React from 'react'
import { Table, TableRow, TableHead, TableData } from "./styles"

// DynamicTable.propTypes = {
// 	colNames: PropTypes.array,
// 	rowData: PropTypes.array
// }

const tableRowData1 = { firstName: "William", lastName: "Martinez", email: "williamjmartinez@me.com"}
const tableRowData2 = { firstName: "Bruce", lastName: "Banner", email: "hulk@avengers.com"}
const tableRowData3 = { firstName: "Billie", lastName: "Smith", email: "billsmith@cats.com"}


const tableRowDataObject = [
	tableRowData1,
	tableRowData2,
	tableRowData3
]


export default function DynamicTable() {
	const createDynamicHeaders = (columnNames) => (
		columnNames.map(item => (
			<TableHead key={item}>{item}</TableHead>
		))
	)
	
	
	const createDynamicRow = (data) => (
		data.map(dataItem => (
			<TableRow key={dataItem}>
				<TableData key={dataItem}>{dataItem}</TableData>
			</TableRow>
		))
	)
		
	const convertRowData = (dataObject) => {
		dataObject.map(data => {
			const arrayData = Object.values(data)
			console.log(data)
			return createDynamicRow(arrayData)
		})

	}

	return (
		<Table>
			<TableRow>
				{
					createDynamicHeaders(["First Name", "Last Name", "Email"])
				}
			</TableRow>
			<TableRow>
				{
					convertRowData(tableRowDataObject)
				}
			</TableRow>
		</Table>
	)
}
