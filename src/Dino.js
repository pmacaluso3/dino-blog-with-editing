function Dino(props) {
    console.log(props)
    return (
        <div>
            <h1>{props.title}</h1>
            <p>by {props.author}</p>
            <p>{props.body}</p>
            <h2>Comments:</h2>
            <p>{props.comments[0]}</p>
        </div>
    )
}

export default Dino