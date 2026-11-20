import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import Hello from './components/Hello.js';
import Form from './components/Form.js';
import Range from './components/Range.js';
import Blog from './components/Blog.js';


class App extends React.Component
{
    state =
        {
            posts :[
                     { id: '1', title: "Погода", content: "Одна на север, другая на восток" },
                     { id: '2', title: "О ценах", content: "Сколько стоит киллограм гвоздей, если пика козырь" },
                     { id: '3', title: "О людях", content: "Вам 27 лет" },
                 ]
        }
    removePost = (id) =>
    {
        this.setState({posts: this.state.posts.filter(post => post.id !== id)})
    }
    render()
    {
        return (
            <div className="App">
                <Header />
                <Hello />        <hr />
                <Form />         <hr />
                <Range />        <hr />
                <Blog posts={this.state.posts} removePost={this.removePost} />

            </div>
        );
    }
}

export default App;
