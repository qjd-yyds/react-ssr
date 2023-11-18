import express from "express";

const http = express();
http.use(express.static("public"));
http.listen(8000, () => {
    console.log("server is running localhost:8000");
});

export default http;
