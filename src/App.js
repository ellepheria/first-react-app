import React, {useRef, useState} from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript', body: 'Javascript - язык программирования'},
        {id: 2, title: 'JavaScript 2', body: 'Javascript - язык программирования'},
        {id: 3, title: 'JavaScript 3', body: 'Javascript - язык программирования'}
    ])
    const [title, setTitle] = useState('');
    const bodyInputRef = useRef();

    const addNewPost = (event) => {
        event.preventDefault();
        console.log(title);
        console.log(bodyInputRef.current.value)
    }

    return (
        <div className="App">
            <form >
                {/* Управляемый компонент */}
                <MyInput
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                    type="text"
                    placeholder='Название поста'
                />
                {/* Неуправляемый\Неконтролируемый компонент */}
                <MyInput
                    ref={bodyInputRef}
                    type="text"
                    placeholder='Описание поста'
                />
                <MyButton onClick={addNewPost}>
                    Добавить пост
                </MyButton>
            </form>
            <PostList posts={posts} title={"список постов 1"}/>
        </div>
    );
}

export default App;
