function Hero(props) {
    return (
        <div>
        <img src={props.imageURL} />
        <h1>{props.title}</h1>
        <p>{props.subtitle}</p>

    </div>
    );
}


// const jsx = 
// <div>
//     <img src="http://sourcingelectricals.net/wp-content/uploads/2017/12/Facebook-Logo-PNG-Clipart-copy-700x421.png" />
//     <h1>Hello</h1>
//     <p>React</p>

// </div>;
ReactDOM.render(<Hero 
                title = "React"
                imageURL = "Facebook-Logo.png"
                subtitle = "Библиотека"
                
                />, 
    
    
    document.getElementById('root'));
