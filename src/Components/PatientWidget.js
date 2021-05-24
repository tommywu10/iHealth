import React, {useState} from 'react'
import {FaTimes} from 'react-icons/fa'

function PatientWidget({name, waitTime, doctor, isNew, setCurrentName, setCurrentDuration, setCurrentDoctor, setIsNew}) {

    function handleClick(){
        setCurrentName(name)
        setCurrentDuration(waitTime)
        setCurrentDoctor(doctor)
        setIsNew(isNew)
        console.log()
    }

    function deletePatient(){
        
    }

    return (
        <div className="patient-widget" style={{background : isNew ? 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(247,216,107,1) 0%, rgba(247,216,107,1) 4%, rgba(255,255,255,1) 4%)' : 'white'}}>
            <div className="patient-widget-name">
                <h3>PATIENT</h3>
                <p>{name}</p>
            </div>

            <div>
                <h3>WAIT TIME</h3>
                <p>{waitTime}</p>
            </div>

            <button type="button" onClick={handleClick}>SEE PATIENT</button>

            <FaTimes id="remove-icon" onClick={deletePatient}/>
        </div>
    )
}

export default PatientWidget
