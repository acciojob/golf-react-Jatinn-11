import React, { Component } from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            renderBall: false,
            posi: 0,
            ballPosition: { left: "0px" }
        };
        this.renderChoice = this.renderBallOrButton.bind(this)
        this.buttonClickHandler = this.buttonClickHandler.bind(this)
        this.handleKeyDown = this.handleKeyDown.bind(this)
    };

    buttonClickHandler() {
        this.setState({ renderBall: true });
    }

    handleKeyDown(event) {
        if (event.key === "ArrowRight" || event.keyCode=== 39) {
            const newPosi = this.state.posi + 5;
            this.setState({
                posi: newPosi,
                ballPosition: { left: `${newPosi}px` }
            });
            console.log(newPosi)
        }
    }

    componentDidMount() {
        window.addEventListener("keydown", this.handleKeyDown);
    }

    componentWillUnmount() {
        window.removeEventListener("keydown", this.handleKeyDown);
    }

    renderBallOrButton() {
        if (this.state.renderBall) {
            return <div className="ball" id = "ball" style={this.state.ballPosition}></div>
        } else {
            return <button className = "start" onClick={this.buttonClickHandler}>Start</button>
        }
    }
 
    render() {
        return (
            <div className="playground">
                {this.renderBallOrButton()}
            </div> 
        )
    }
}

export default App;