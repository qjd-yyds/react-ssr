import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import routes from "../share/routes";
import { Provider } from "react-redux";
import store from "./createStore";

// hydrate 会复用之前的节点
ReactDOM.hydrate(
    <Provider store={ store }>
        <BrowserRouter>{ renderRoutes(routes) }</BrowserRouter>
    </Provider>
    ,
    document.querySelector("#root"));
