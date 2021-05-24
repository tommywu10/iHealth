import React, {useState} from 'react'
import CurrentPatient from './CurrentPatient'
import WaitingPatients from './WaitingPatients'

function PatientQueue({patientsArray}) {
    const [currentName, setCurrentName] = useState('')
    const [currentDuration, setCurrentDuration] = useState('')
    const [currentDoctor, setCurrentDoctor] = useState('')
    return (
        <div>
            <h1 id="patient-queue-title">Patient Queue</h1>
            <div className="patient-queue-container">
                <CurrentPatient 
                    patientsArray={patientsArray} 
                    currentName={currentName}  
                    currentDuration={currentDuration} 
                    currentDoctor={currentDoctor} />
                <WaitingPatients 
                    patientsArray={patientsArray} 
                    currentName={currentName}  
                    currentDuration={currentDuration} 
                    currentDoctor={currentDoctor} 
                    setCurrentName={setCurrentName} 
                    setCurrentDuration={setCurrentDuration} 
                    setCurrentDoctor={setCurrentDoctor}/>
            </div>
            
        </div>
    )
}

export default PatientQueue
