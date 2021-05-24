import React from 'react'

function CurrentPatient({currentName, currentDuration, currentDoctor, isNew}) {

    return (
        <div className="current-patient-container">
            <h2>Current Patient</h2>
            <div className={!currentName ? 'current-patient-card' : 'current-patient-card active'}>
                {isNew ? <p id="new-patient-indicator">NEW PATIENT</p> : null }

                <h3>PATIENT</h3>
                <p id="patient-name">{!currentName ? 'N/A' : currentName}</p>

                <h4>DURATION</h4>
                <p>{!currentDuration ? 'N/A' : currentDuration}</p>

                <h4>ATTENDING DOCTOR</h4>
                <p>{!currentDoctor ? 'N/A' : currentDoctor}</p>

                <div className="current-patient-buttons">
                    <div className="top-buttons">
                        <button>COPY INFO</button>
                        <button>VIEW INFO</button>
                    </div>

                    <button id="discharge-button">DISCHARGE PATIENT</button>
                </div>
            </div>
        </div>
    )
}

export default CurrentPatient
