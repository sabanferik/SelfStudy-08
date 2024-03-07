import React, { useState } from "react";
import { hastaData, doctorData } from "../helper/Data";
import PatientList from "../components/PatientList";

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
              <div key={dr.id} >
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

        {/* hastaekle */}
      </div>

      <PatientList/>
    </div>
  );
};

export default Home;
