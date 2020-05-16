import React from "react";

export function MessageFunction(props) {

    return <h4 className={`${props.bgcolor} text-white text-center p-3 m-2`}>
        {props.greeting}, {props.name}
    </h4>
}
