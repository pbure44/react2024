import {useForm} from "react-hook-form";
import {postService} from "../../services/postService";

const PostForm = () => {
    const {reset, register, handleSubmit} = useForm();

    const save = (item) => {
        console.log(item);
        postService.create(item).then(({data})=> console.log(data))


    }

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'title'} {...register('title')}/>
            <input type="text" placeholder={'body'} {...register('body')}/>
            <button>save</button>
        </form>
    );
};

export {PostForm};