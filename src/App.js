import React, {useMemo, useRef, useState} from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/modal/MyModal";

function App() {
    const [posts, setPosts] = useState([
        {id: 3, title: 'cc 3', body: 'ff - язык программирования'},
        {id: 2, title: 'bb 2', body: 'ee - язык программирования'},
        {id: 1, title: 'aa', body: 'dd - язык программирования'}
    ])
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);

    const sortedPosts = useMemo(() => {
        if (filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
        }
        return posts;
    }, [filter.sort, posts]);

    const sortedAndSearchedPosts = useMemo(() =>
            sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase())),
        [filter.query, sortedPosts])

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className="App">
            <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
                Добавить пост
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>
            <hr style={{margin: 15}}/>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            <PostList
                posts={sortedAndSearchedPosts}
                title={"Посты про JS"}
                remove={removePost}
            />
        </div>
    );
}

export default App;
