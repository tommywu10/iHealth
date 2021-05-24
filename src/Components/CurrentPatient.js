import React from 'react'

function CurrentPatient({currentName, currentDuration, currentDoctor}) {

    return (
        <div className="current-patient-container">
            <h2>Current Patient</h2>
            <div className="current-patient-card">
                <h3>PATIENT</h3>
                <p id="patient-name">{currentName}</p>

                <h4>DURATION</h4>
                <p>{currentDuration}</p>

                <h4>ATTENDING DOCTOR</h4>
                <p>{currentDoctor}</p>

                <div className="top-buttons">
                    <button>COPY INFO</button>
                    <button>VIEW INFO</button>
                </div>

                <button id="discharge-button">DISCHARGE PATIENT</button>
            </div>
        </div>
    )
}

export default CurrentPatient
