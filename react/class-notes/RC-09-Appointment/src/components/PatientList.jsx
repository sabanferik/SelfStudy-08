import React from "react";
import { FaTimesCircle } from "react-icons/fa";
const PatientList = ({ hastalar, setHastalar }) => {
  return (
    <div>
      {hastalar.map((patient) => (
        <div className={patient.isDone ? "trueStil" : "falseStyle"} >
          <div>
            <h2>{patient.patientName} </h2>
            <h4>{patient.day} </h4>
            <h3>{patient.myDoctor} </h3>
          </div>

<FaTimesCircle style={{color:"red"}}/>
       
        </div>
      ))}
    </div>
  );
};

export default PatientList;
