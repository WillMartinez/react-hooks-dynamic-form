import React, { useState } from 'react'
import styled from 'styled-components'
// import uuid from "uuid"

// Create a Wrapper component that'll render a <section> tag with some styles
const FormContainer = styled.section`
  padding: 10px;
  background: papayawhip;
  display: flex;
`

export default function DynamicForm () {
  const colNames = ['password', 'key', 'username']
  const dynamicState = {}

  const createDynamicState = colNames => {
    colNames.map(item => (
      dynamicState[item] = ''
    ))
  }
  createDynamicState(colNames)
  // const [state, setState] = useState({ firstName: "", lastName: "", middleName: "" });
  const [state, setState] = useState(dynamicState)

  const onChange = (event) => {
    const { name, value } = event.target
    setState(prevState => ({ ...prevState, [name]: value }))
    event.preventDefault()
  }

  const currentState = () => {
    console.log('state: ', state)
  }

  const createDynamicForm = columnNames =>
    columnNames.map(item => (
      <div key={`meow ${item}`}>
        {item}
        <input
          key={item}
          type={'text'}
          value={state[item]}
          name={item}
          onChange={onChange}
        />
        <br />
      </div>
    ))

  return (
    <div>
      <FormContainer>
        <form>
          {createDynamicForm(colNames)}
        </form>
        <p>Name: {state.firstName}</p>
        <button onClick={currentState}>Check State</button>
      </FormContainer>
      {/* {createDynamicState(colNames)} */}
    </div>
  )
}
