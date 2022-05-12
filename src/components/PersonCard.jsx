import React, { useState } from 'react'
import styles from './style_components/MyButtonComponent.module.css'

const PersonCard = props => {
    const lastName = props.lastName
    const firstName = props.firstName
    const [age, setAge] = useState(props.age)
    const hairColor = props.hairColor

    const birthday = (age) => setAge(age + 1)

    return (
        <>
            <h1> {lastName}, {firstName} </h1>
            <p> Age: {age} </p>
            <p> Hair Color: {hairColor} </p>
            <button className={styles.btn} onClick={() => birthday(age)} >Birthday Button for {firstName} {lastName} </button>
        </>
    )
}

export default PersonCard