import {SubmitHandler, useForm} from "react-hook-form";
import {IAuth} from "../interfaces";
import {useAppDispatch, useAppSelector} from "../hooks";
import {authActions} from "../redux/slices/authSlice";
import {useNavigate} from "react-router-dom";

const Register = () => {
    const {register, handleSubmit} = useForm<IAuth>();
    const dispatch = useAppDispatch();
    const {registerError} = useAppSelector(state => state.auth)
    const navigate = useNavigate();
    const reg: SubmitHandler<IAuth> = async (user) => {
        const {meta: {requestStatus}} = await dispatch(authActions.register({user})) //key 'user' and value also 'user', so we write only one 'user'
        if (requestStatus === 'fulfilled') {
            navigate('/login')
        }
    }

    return (
        <div>
            {registerError &&
                <h5>{registerError}</h5>} {/*if we have registerError (not null), we will write it with 'h5 header'*/}
            <form onSubmit={handleSubmit(reg)}>
                <input type='text' placeholder='username' {...register('username')}/>
                <input type='text' placeholder='password' {...register('password')}/>
                <button>Register</button>
            </form>
        </div>
    );
};

export {Register};