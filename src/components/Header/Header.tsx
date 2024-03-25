import css from './Header.module.css'
import {Link} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {apiService, authService} from "../../services";
import {authActions} from "../../redux/slices/authSlice";
import {useEffect} from "react";

const Header = () => {
    const {currentUser} = useAppSelector(state => state.auth);
    const access = authService.getAccessToken();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (access && !currentUser) {
            dispatch(authActions.me())
        }
    }, []);

    return (
        <div className={css.Header}>
            <div>
                <h1>Cars</h1>
            </div>
            {
                currentUser
                    ?
                    <div>{currentUser.username} -- {new Date(currentUser.last_login).toLocaleString('en-US', {
                        day: 'numeric',
                        month: 'numeric',
                        year: 'numeric',
                        hour: 'numeric',
                        minute: 'numeric',
                        second: 'numeric',
                        hour12: false
                    })}</div>
                    :
                    <div className={css.reglog}>
                        <Link to={'/login'}>Login</Link>
                        <Link to={'/register'}>Register</Link>
                    </div>
            }
        </div>
    );
};

export {Header};