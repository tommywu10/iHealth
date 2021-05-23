import React from 'react'
import {FaTimes} from 'react-icons/fa'

function PatientWidget() {
    return (
        <div className="patient-widget-container">
        <div>
            <h3>PATIENT</h3>
            <p>Name</p>
        </div>

        <div>
            <h3>WAIT TIME</h3>
            <p>0:00</p>
        </div>

        <button>SEE PATIENT</button>

        <FaTimes id="remove-icon"/>
        </div>
    )
}

export default PatientWidget
