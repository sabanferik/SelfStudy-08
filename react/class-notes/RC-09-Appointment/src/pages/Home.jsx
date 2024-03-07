import React, { useState } from "react";
import { hastaData, doctorData } from "../helper/Data";
import PatientList from "../components/PatientList";
import AddPatient from "../components/AddPatient";

const Home = () => {
  const [doctors, setDoctors] = useState(doctorData);
  const [hastalar, setHastalar] = useState(hastaData);
  return (
    <div>
      <div>
        <header>
          <h1>HOSPITAL</h1>
          <div className="dr">
            {doctors.map((dr) => (
              <div key={dr.id}>
                <img
                  src={dr.doctorImg}
                  width="180px"
                  height="150px"
                  className="btn"
                  style={{ background: "aqua" }}
                  alt=""
                />
                <h4
                  style={{ background: "aqua", borderLeft: "10px solid blue" }}
                >
                  {dr.doctorName}{" "}
                </h4>
              </div>
            ))}
          </div>
        </header>

        <AddPatient hastalar={hastalar} setHastalar={setHastalar} />
      </div>

      <PatientList hastalar={hastalar} setHastalar={setHastalar} />
    </div>
  );
};

export default Home;
