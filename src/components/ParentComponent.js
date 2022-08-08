import React, {useState} from 'react'
import DisplayData from './DisplayData';
import Form from './Form'

export default function ParentComponent() {
    const [firstName, setFirstName] = useState("John");
    const [lastName, setLastName] = useState("Henry");

    function handleFirstNameChange(event) {
        setFirstName(event.target.value);
        console.log(event.target.value);
    }

    function handleLastNameChange(event) {
        setLastName(event.target.value);
        console.log(event.target.value);
    }
  

  return (
    <>
    <Form
        firstName={firstName}
        lastName={lastName}
        handleFirstNameChange={handleFirstNameChange}
        handleLastNameChange={handleLastNameChange}
    />
    <DisplayData firstName={firstName} lastName={lastName} />
    </>
  )
}
