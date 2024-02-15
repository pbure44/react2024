import {useEffect, useState} from "react";

import {userService} from "../../services/userService";
import {User} from "../User/user";
import css from './Users.module.css'
import {UserDetails} from "../UserDetails/userDetails";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [userDetails, setUserDetails] = useState(null);

    useEffect(() => {
        userService.getAll().then(({data})=>setUsers(data))
    }, []);

    const getCurrentUser=(user)=>{
        console.log(user);
        setUserDetails(user);
    }

    return (
        <div className={css.Users}>
            <div>
                {users.map(user=><User key={user.id} user={user} getCurrentUser={getCurrentUser}/>)}
            </div>
            <hr/>
            <div>
                {userDetails && <UserDetails userDetails={userDetails}/> }
            </div>
        </div>
    );
};

export {Users};