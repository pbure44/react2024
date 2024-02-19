import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const carService={
    getAll:()=>apiService(urls.cars.base),
    getById:(id)=>apiService(urls.cars.byId(id)),
    create:(data)=>apiService.post(urls.cars.base,data),
    updateById:(id,data)=>apiService.put(urls.cars.byId(id),data),
    deleteById:(id)=>apiService.delete(urls.cars.byId(id))
}

export {
    carService
}