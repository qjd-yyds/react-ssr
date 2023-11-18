import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom"; // 匹配录音
import { renderRoutes } from "react-router-config"; // 将路由信息转换成组件
import routes from "../share/routes";
import { Provider } from "react-redux";
import serialize from "serialize-javascript";

export default (req, store) => {
    const content = renderToString(<Provider store={ store }>
        <StaticRouter location={ req.path }>{ renderRoutes(routes) }</StaticRouter>
    </Provider>);
    const initalState = serialize(store.getState());
    return `
        <html>
            <head>
                <title>react ssr</title>
            </head>
            <body>
                <div id="root">${ content }</div>
                <script>
                    window.INITIAL_STATE = ${ JSON.stringify(initalState) }
                </script>
                <script src="bundle.js"></script>
            </body>
        </html>
    `;
}