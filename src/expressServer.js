const express = require("express");
const path = require("path");

const app = express();
const router = express.Router();

router.get("/", (request, response) => {
    // Envia o arquivo que está no path especificado como resposta ao request
    response.sendFile(path.join(__dirname + "/pages/home.html"));
});

router.get("/contato", (req, res) => {
    res.sendFile(path.join(__dirname + "/pages/contato.html"));
});

app.use(router);

app.listen(3334, () => {
    console.log("servidor rodando");
});
