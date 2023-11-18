import axios from "axios";


export const SAVE_USER = "save_user";
// 发送请求 获取用户列表数据
export const fetchUser = () => {
    return async (dispatch) => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        dispatch({
            type: SAVE_USER,
            payload: response
        });
    };
};
