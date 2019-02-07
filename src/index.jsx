import React from "react";
import ReactDOM from "react-dom";
import Catalog from "./components/Catalog.jsx";

ReactDOM.render(
    <Catalog perPage={8}/>, 
    document.getElementById("root")
);
