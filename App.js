const root = ReactDOM.createRoot(document.getElementById("root"));

const parentDiv = React.createElement("div",{id:"parent"},
[ React.createElement("div",{id:"child"}, 
 [React.createElement("h1",{},"Hello Haroon, it's my second react project"), 
 React.createElement("h3",{},"Hello Haroon, it's my second react project")]), 
 React.createElement("div",{id:"child2"}, 
 [React.createElement("h1",{},"Hello Haroon, it's my second react project"), 
 React.createElement("h3",{},"Hello Haroon, it's my second react project")])]
);

root.render(parentDiv);