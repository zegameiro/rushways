import React from "react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const OcasionalServicesConf = () => {

    const [vehicleIds, setVehicleIds] = useState([]);
    const [vehicleQuantities, setVehicleQuantities] = useState({});
    const [totalQuantity, setTotalQuantity] = useState(0);

    const searchParams = useSearchParams();

    useEffect(() => {
        const params = Object.fromEntries(searchParams.entries());
        setVehicleIds(params.vehicleIds.split(",").map(Number));
        setVehicleQuantities(params);
        setTotalQuantity(
            Object.values(params).reduce((total, quantity) => total + Number(quantity), 0)
        );
    }, [searchParams]);

    console.log("vehicleIds ", vehicleIds);
    console.log("vehicleQuantities ", vehicleQuantities);
    console.log("totalQuantity ", totalQuantity);

    return (
        <div>
            <h1>Confirmation Page</h1>
        </div>

    )
}

export default OcasionalServicesConf;