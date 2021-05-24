import React from 'react'
import PatientWidget from './PatientWidget'

function WaitingPatients({patientsArray, currentName, setCurrentName, currentDuration, setCurrentDuration, setCurrentDoctor}) {
   
    return (
        <div className="waiting-patients-container">
            <h2>10 Patients Waiting</h2>
            <div>
                {patientsArray.map(patient => <PatientWidget name={patient.name} waitTime={patient.waitTime} isNew={patient.isNew} doctor={patient.doctor} currentName={currentName} setCurrentName={setCurrentName} currentDuration={currentDuration} setCurrentDoctor={setCurrentDoctor} setCurrentDuration={setCurrentDuration}/>)}
            </div>
        </div>
    )
}

export default WaitingPatients
