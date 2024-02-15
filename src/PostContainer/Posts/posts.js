import {useEffect, useState} from "react";
import {postService} from "../../services/postService";

const Posts = () => {
const [posts,setPosts]=useState([]);

useEffect(() => {
postService.getAll().then(({data})=>setPosts(data))

    }, []);

    return (
        <div>
            Posts
        </div>
    );
};

export {Posts};