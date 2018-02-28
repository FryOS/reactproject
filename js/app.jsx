// function Hero(props) {
//     let count = 0
//     function handleClick() {
//         count =+ 1;
//     }
//     return (
//         <div className="cointainer">
//             <div className="count">{count}</div>
//             <img src={props.imageURL} onClick={handleClick} />
//             <h1>{props.title}</h1>
//             <p>{props.subtitle}</p>

//     </div>
//     );
// }

const Hero = React.createClass({
    getInitialState: function(){
        return {
            count:0
        };
    },
    handleClick: function() {
        this.setState({
            count: this.state.count + 1
        });
    },
    render: function(){
        return (
            <div className="cointainer">
                <div className="count">{this.state.count}</div>
                <img src={this.props.imageURL} onClick={this.handleClick} />
                <h1>{this.props.title}</h1>
                <p>{this.props.subtitle}</p>

        </div> 
        );
    }
});
ReactDOM.render(
    <div>
            <Hero 
                title = "React"
                imageURL = "Facebook-Logo.png"
                subtitle = "Библиотека"
                
                
                />
                
            <Hero 
                title = "Angular"
                imageURL = "Angular_full_color_logo.svg.png"
                subtitle = "Библиотека для всего"
                
                
            />    
    </div>,
    
    document.getElementById('root'));
