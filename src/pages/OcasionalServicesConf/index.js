import React from "react";
import { useLocation } from "react-router-dom";

const OcasionalServicesConf = () => {

    const location = useLocation();
    const vehicleIds = location.search.split("=")[1].split(",").map(Number);
    console.log("vehicleIds", vehicleIds);
    return (
        <div>
            <h1>Confirmation Page</h1>
        </div>

    )
}

export default OcasionalServicesConf;