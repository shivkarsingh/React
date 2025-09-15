const struct = React.createElement( "div", { id : "parent" },
    [ React.createElement( "h1", { id : "child1" }, "heading1" ), React.createElement( "h1", { id : "child2" }, "heading2" ) ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(struct);



