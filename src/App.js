import React, {useState} from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css'
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript', body: 'Javascript - язык программирования'},
        {id: 2, title: 'JavaScript 2', body: 'Javascript - язык программирования'},
        {id: 3, title: 'JavaScript 3', body: 'Javascript - язык программирования'}
    ])

    return (
        <div className="App">
            <form >
                <input type="text" placeholder='Название поста'/>
                <input type="text" placeholder='Описание поста'/>
                <MyButton>
                    Добавить пост
                </MyButton>
            </form>
            <PostList posts={posts} title={"список постов 1"}/>
        </div>
    );
}

export default App;
