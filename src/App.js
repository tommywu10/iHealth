import React from 'react'
import './Style/style.scss'
import PatientQueue from './Components/PatientQueue'

function App() {
  let patientsArray = [
    {
        "id" : "1",
        "name" : "John Doe",
        "waitTime" : "0:11",
        "isNew": false,
        "doctor": "Dr. Strange"
    },
    {
        "id" : "2",
        "name" : "Bruce Wayne",
        "waitTime" : "0:20",
        "isNew": true,
        "doctor": "Dr. Who"
    },
    {
        "id" : "3",
        "name" : "Tony Stark",
        "waitTime" : "0:01",
        "isNew": true,
        "doctor": "Dr. Who"
    },
    {
        "id" : "4",
        "name" : "Frodo Baggins",
        "waitTime" : "0:33",
        "isNew": false,
        "doctor": "Dr. Wu"
    },
    {
        "id" : "5",
        "name" : "Sarah Connor",
        "waitTime" : "2:11",
        "isNew": false,
        "doctor": "Dr. House"
    },
    {
        "id" : "6",
        "name" : "Ellen Ripley",
        "waitTime" : "5:31",
        "isNew": false,
        "doctor": "Dr. House"
    },
    {
        "id" : "7",
        "name" : "John Rambo",
        "waitTime" : "0:41",
        "isNew": true,
        "doctor": "Dr. Strange"
    },
    {
        "id" : "8",
        "name" : "Jack Sparrow",
        "waitTime" : "1:27",
        "isNew": false,
        "doctor": "Dr. Phil"
    },
    {
        "id" : "9",
        "name" : "Dwight Schrute",
        "waitTime" : "1:01",
        "isNew": false,
        "doctor": "Dr. Who"
    },
    {
        "id" : "10",
        "name" : "Dennis Reynolds",
        "waitTime" : "6:66",
        "isNew": false,
        "doctor": "Dr. Strange"
    },
]

  return (
    <div className="app">
      <PatientQueue patientsArray={patientsArray}/>
    </div>
  )
}

export default App

