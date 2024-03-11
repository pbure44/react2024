import {useDispatch} from "react-redux";
import {counterActions} from "../redux/slices/counterSlice";

const ComponentOne = () => {
const dispatch=useDispatch();
    return (
        <div>
            <div>
                <button onClick={()=>dispatch(counterActions.inc())}>inc</button>
                <button onClick={()=>dispatch(counterActions.dec())}>dec</button>
                <button onClick={()=>dispatch(counterActions.reset())}>reset</button>
            </div>
        </div>
    );
};

export {ComponentOne};