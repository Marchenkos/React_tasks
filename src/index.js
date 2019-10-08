import React from "react";
import ReactDom from "react-dom";
import "./index.css";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cities: [],
            adjectives: [],
            history:[],
            pair: Array(2).fill(""),
        };

        this.handleClick = this.handleClick.bind(this);
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
        const cities = this.state.cities.slice();
        const adjectives = this.state.adjectives.slice();
        let pair = this.state.pair.slice();

        if (history.length < cities.length * adjectives.length) {

            const randomCities = randomSort(cities);
            const randomAdjectives = randomSort(adjectives);
            pair = [randomAdjectives[0], randomCities[0]];

            if(history.includes(pair)) {
                this.handleClick();
            } else {
                history.push(pair);
                this.setState({
                    pair: pair, 
                    history: history,
                })
            }
        } else {
            return;
        }
    }

    render() {
        const history = this.state.history;
        const pair = this.state.pair;
        const historyFormst = newFormat(history);
        const status = "All: " + (this.state.cities.length * this.state.adjectives.length) + " / now: " + this.state.history.length;

        return (
            <React.Fragment>
                <input type="text" value={pair[0] + " " + pair[1]}></input>
                <button onClick={this.handleClick}>click me</button>
                <textarea value={historyFormst}></textarea>
                <div>{status}</div>
            </React.Fragment>
        );
    }
}

function newFormat(array) {
    let format = array.map(el => "\n" + el[0] + " " + el[1]);

    return format;
}

function randomSort(array) {
    let index;

    for( let i = array.length -1; i > 0; i--) {
        index = Math.floor(Math.random()*(i + 1));
        [array[i], array[index]] = [array[index], array[i]]
    }

    return array;
}

ReactDom.render(<App/>, document.getElementById("root"));