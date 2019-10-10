import React from "react";
import ReactDom from "react-dom";
import "./style/index.css"

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            history: [],
            pairsSize: 0,
            pairs: [],
            currenrPair: ""
        };
    }

    randomSort(array) {
        let index;
    
        for( let i = array.length -1; i > 0; i--) {
            index = Math.floor(Math.random()*(i + 1));
            [array[i], array[index]] = [array[index], array[i]]
        }
    
        return array;
    }

    componentDidMount() {
        const API = "https://gp-js-test.herokuapp.com/api";
        
        fetch(API)
            .then(response => response.json())
            .then(data => {
                let pairs = [];

                for(let adjective of data.adjectives) {
                    for(let city of data.cities) {
                        pairs.push(`${adjective} ${city}`);
                    }
                }

                const randomPairs = this.randomSort(pairs);

                return this.setState({
                    pairs: randomPairs,
                    pairsSize: randomPairs.length
                })
            });
        
    }

    handleClick = () => {
        const pairs = this.state.pairs;
        const history = this.state.history;

        if(pairs.length != 0) {
            const currenrPair = pairs.pop();
            history.push(currenrPair);

            this.setState({
                currenrPair: currenrPair,
                history: history,
                pairs:pairs
            });
        }
    }

    render() {
        const state = this.state;
        const history = state.history;
        const currentPair = state.currenrPair;
        const historyFormat = newFormat(history);
        const status = "All: " + state.pairsSize + " / now: " + history.length;

        return (
            <React.Fragment>
                <input type="text" value={currentPair}></input>
                <button onClick={this.handleClick}>click me</button>
                <textarea className="history" value={historyFormat}></textarea>
                <div>{status}</div>
            </React.Fragment>
        );
    }
}

function newFormat(array) {
    let format = array.join("\n");

    return format;
}

ReactDom.render(<App/>, document.getElementById("root"));
