import {useEffect, useState} from "react";
import {carService} from "../services/carService";
import {Cars} from "./Cars";
import {CarForm} from "./CarForm";

const CarsContainer = () => {
    const [cars, setCars] = useState([]);
    const [trigger, setTrigger] = useState(0)
    const [carForUpdate, setCarForUpdate] = useState(null)
    
    useEffect(() => {
        carService.getAll().then(({data})=>setCars(data))
    }, [trigger]);
    return (
        <div>
            <CarForm setTrigger={setTrigger} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate}/>
            <hr/>
            <Cars cars={cars} setCarForUpdate={setCarForUpdate}/>
        </div>
    );
};

export {CarsContainer};