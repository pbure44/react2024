import {carService} from "../../services/carService";

const Car = ({car, deleteCar, setCarForUpdate}) => {
    const {id, brand, price, year} = car;

    return (
        <div>
            <div>id :{id}</div>
            <div>brand :{brand}</div>
            <div>price :{price}</div>
            <div>year :{year}</div>
            <button onClick={()=>setCarForUpdate(car)}>update</button>
            <button onClick={()=>deleteCar(car.id)}>delete</button>
        </div>
    );
};

export {Car};