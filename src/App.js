import React, {Component, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {MessageFunction} from "./component/MessageFunction";
import {MessageComponent} from "./component/MessageComponent";
import {Summary} from "./component/Summary";
import ReactDOM from "react-dom";

let name = "Geralt";
const city = "Rivia";

let names = ["Bob", "Alice", "Dora"]

function reverseNames() {
    names.reverse();
    // ReactDOM.render(<App/>, document.getElementById('root'));
}

function promoteName(name) {
    names = [name, ...names.filter(val => val !== name)];
    // ReactDOM.render(<App/>, document.getElementById('root'));
}

export default function App() {
    const message = () => `Hello ${name} of ${city}`;
    //
    // constructor(props) {
    //     super(props);
    //     this.setState({
    //         counter: 0
    //     })
    // }

    const [counter, setCounter] = useState(0);

    const incrementCounter = (increment) => setCounter(counter + increment);

    return <div className="text-center">
        {/*<h4 className="bg-primary text-white text-center p-3">*/}
        {/*    {message()}*/}
        {/*</h4>*/}
        <img src={logo} width="50%" alt="reactLogo"/>
        <link rel="stylesheet"
              href={process.env.PUBLIC_URL + "/static.css"}/>
        <img src={process.env.PUBLIC_URL + "/logo.svg"} width="50%" alt="reactLogo"/>

        {/*<MessageFunction greeting={"Guten Tag"} name={"Marta"} bgcolor={"bg-primary"}/>*/}
        {/*<MessageFunction greeting={"Bonjour"} name={"Teo"} bgcolor={"bg-success"}/>*/}
        {/*<MessageComponent greeting={"Ciao"} name={"Mario"} bgcolor={"bg-warning"}/>*/}
        {/*<MessageComponent greeting={"Arigatō"} name={"Hiro"} bgcolor={"bg-danger"}/>*/}

        <table className="table table-sm table-striped">
            <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Letters</th>
            </tr>
            </thead>
            <tbody>
            {names.map((name, index) => <tr key={name}>
                <Summary index={index} name={name} reverseCallback={reverseNames} promoteCallback={promoteName}
                         counter={counter} incrementCallback={incrementCounter}/>
            </tr>)}
            </tbody>
        </table>
    </div>
}
