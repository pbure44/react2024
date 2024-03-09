import {useState} from "react";

const ComponentTwo = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <button>inc2</button>
            <button>dec2</button>
            <button>reset2</button>
        </div>
    );
};

export {ComponentTwo};