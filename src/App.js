import {useRef, useState} from "react";

const App = () => {

    const name = useRef();
    const age = useRef();
    const [user,setUser]=useState({});
    const save = (e) => {
        e.preventDefault();
        // console.log(name.current.value);
        // console.log(age.current.value);
        console.log(e.target.name.value);
        console.log(e.target.age.value);
    }

    console.log(user);

    const handler =(e)=>{
        setUser(prevState => ({...prevState,[e.target.name]:e.target.value}))
    }

    return (
        <div>
            <form onSubmit={save}>
                <input type="text" placeholder={'name'} name={'name'} onChange={handler}/>
                <input type="text" placeholder={'age'} name={'age'} onChange={handler}/>
                <button>Save</button>
            </form>
        </div>

    );
};

export {App};