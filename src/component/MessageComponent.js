import React, {Component} from "react";

export class MessageComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <h4 className={`${this.props.bgcolor} text-white text-center p-3 m-2`}>
            {this.props.greeting}, {this.props.name}
        </h4>
    }
}
