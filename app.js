import React from "react";
import ReactDOM from "react-dom/client";

const struct = React.createElement( "div", { id : "parent" },
    React.createElement( "h1", { id : "child2" }, "heading2" )
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(struct);


