import React, {useRef, useState} from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript', body: 'Javascript - язык программирования'},
        {id: 2, title: 'JavaScript 2', body: 'Javascript - язык программирования'},
        {id: 3, title: 'JavaScript 3', body: 'Javascript - язык программирования'}
    ])

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className="App">
            <PostForm create={createPost} />
            <PostList
                posts={posts}
                title={"Посты про JS"}
                remove={removePost}
            />
        </div>
    );
}

export default App;
