import {useEffect, useState} from "react";

import {User} from "../User/User";
import {userService} from "../../services/userService";
import {UserDetails} from "../UserDetails/UserDetails";
import css from "./Users.module.css"

const Users = () => {
    const [users, setUsers] = useState([]);
    const [userDetails, setUserDetails] = useState(null);

    useEffect(() => {
        userService.getAll().then(({data}) => setUsers(data))
    }, []);

    const getCurrentUser = (user) => {
        console.log(user);
        setUserDetails(user);
    }

    return (
        <div className={css.Users}>
            <div >
                {users.map(user => <User user={user} key={user.id} getCurrentUser={getCurrentUser}/>)}
            </div>
            <hr/>
            {userDetails !== null && <UserDetails userDetails={userDetails}/>}
        </div>
     );
};

export {Users};