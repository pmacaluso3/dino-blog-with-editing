import './App.css'

function App(props) {
    return (
        <div className="App">
            <h1>{props.post.title}</h1>
            <p>by {props.post.author}</p>
            <p>{props.post.body}</p>
            <h2>Comments:</h2>
            <p>{props.post.comments[0]}</p>
        </div>
    )
}

export default App