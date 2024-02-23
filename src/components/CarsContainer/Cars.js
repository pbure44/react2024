import {Car} from "./Car";
import {carService} from "../../services/carService";

const Cars = ({cars,setTrigger,setCarForUpdate}) => {


    const deleteCar = async (carId)=>{
        await carService.delete(carId);
        setTrigger(prev=>!prev);
    }

    return (
        <div>
            {cars.map(car=><Car key={car.id} car={car} deleteCar={deleteCar} setCarForUpdate={setCarForUpdate}/>)}
        </div>
    );
};

export {Cars};