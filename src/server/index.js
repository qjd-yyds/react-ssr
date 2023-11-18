import http from "./http.js";
import renderer from "./renderer";
import createStore from "./createStore";
import routes from "../share/routes";
import { matchRoutes } from "react-router-config";
// * 表示接受所有请求
http.get("*", (req, res) => {
    const store = createStore();
    // 1.获取路由信息
    // 根据请求地址匹配出要渲染的组件路由信息
    const primises = matchRoutes(routes, req.path).map(({ route }) => {
        if (route.loadData) {
            return route.loadData(store);
        }
    });
    // 数据完成后
    Promise.all(primises).then(() => {
        res.send(renderer(req, store));
    });
});
