import {useEffect, useState} from "react";

import {postService} from "./services/postService";
import {Posts} from "./components/PostContainer/Posts";
import {PostForm} from "./components/PostContainer/PostForm";
import {PostsContainer} from "./components/PostContainer/PostsContainer";

const App = () => {


    return (
        <PostsContainer/>
    );
};

export {App};