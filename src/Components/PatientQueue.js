import React from 'react'
import CurrentPatient from './CurrentPatient'
import WaitingPatients from './WaitingPatients'

function PatientQueue() {
    return (
        <div>
            <h1>Patient Queue</h1>
            <div className="patient-queue-container">
                <CurrentPatient />
                <WaitingPatients />
            </div>
            
        </div>
    )
}

export default PatientQueue
