import {ComponentOne} from "./components/ComponentOne";
import {ComponentTwo} from "./components/ComponentTwo";
import {useSelector} from "react-redux";

const App = () => {
    const {count} = useSelector(state => state.counter1)
    console.log('Log App: ',count)
    return (
        <div>
            count: {count}
            {/*count2: {count2}*/}
            <ComponentOne/>
            {/*<ComponentTwo/>*/}
        </div>
    );
};

export {App};