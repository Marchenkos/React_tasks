import React from "react";
import ReactDom from "react-dom";
import "./index.css";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cities: [],
            adjectives: [],
            history:[{
                pair:Array(2).fill(""),
            }]
        };
    }

    componentDidMount() {
        const API = "https://gp-js-test.herokuapp.com/api";
        fetch(API)
            .then(response => response.json())
            .then(data => this.setState({
                cities: data.cities,
                adjectives: data.adjectives,
            }));
    }

    handleClick() {
        const history = this.state.history.slice();
        const current = history[history.length - 1];
        let pair = current.pair.slice();

        if (this.state.history.length < this.state.cities.length * this.state.adjectives.length) {
            const index = this.state.history.length;
            const city = this.state.cities[Math.floor(Math.random()*this.state.cities.length)];
            const adjective = this.state.adjectives[Math.floor(Math.random()*this.state.adjectives.length)];

            if(!history.includes([adjective, city])) {
                console.log(history);
                console.log([adjective, city]);

                pair = [adjective, city];
            } else {
                this.handleClick();
            }
        } else {
            return;
        }

        this.setState({
            history: history.concat([
                {
                    pair: pair
                }
            ]),
        })
    }

    render() {
        const history = this.state.history;
        const current = history[history.length - 1];
        const pair = current.pair;

        const status = "All: " + (this.state.cities.length * this.state.adjectives.length) + " / now: " + (this.state.history.length - 1);

        return (
            <React.Fragment>
                <input type="text" value={pair[0] + " " + pair[1]}></input>
                <button onClick={() => this.handleClick()}>click me</button>
                <div>{status}</div>
            </React.Fragment>
        );
    }
}

ReactDom.render(<App/>, document.getElementById("root"));