import {ComponentOne} from "./components/ComponentOne";
import {ComponentTwo} from "./components/ComponentTwo";
import {useSelector} from "react-redux";

const App = () => {
    const {count} = useSelector(state => state.counter1)
    const {count: count2} = useSelector(state => state.counter2)
    console.log('Log App: ', count)
    return (
        <div>
            <div>
            count: {count}
            <ComponentOne/>
            </div>
            <div>
            count2: {count2}
            <ComponentTwo/>
            </div>
        </div>
    );
};

export {App};