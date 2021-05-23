import React from 'react'
import PatientWidget from './PatientWidget'

function WaitingPatients() {
    return (
        <div className="waiting-patients-container">
            <h2>10 Patients Waiting</h2>
            <div>
                <PatientWidget /> 
                <PatientWidget /> 
                <PatientWidget /> 
            </div>
        </div>
    )
}

export default WaitingPatients
