import React from "react";

const One = (props) => (
    <div>
        <h1>A Thing I have Done</h1>
        <p>The Page is for item id : {props.match.params.id}</p>
    </div>
);

export default One;