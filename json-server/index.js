const jsonServer = require("json-server");
const path = require("path");
const https = require("https");
const http = require("http");
const fs = require("fs");

const IS_DEV = process.env.MODE === "development";

const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, "db.json"));

server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);

// Нужно для небольшой задержки, чтобы запрос проходил не мгновенно, имитация реального апи
if (IS_DEV) {
	server.use(async (req, res, next) => {
		await new Promise((res) => {
			setTimeout(res, 800);
		});
		next();
	});
}

// Эндпоинт для логина
server.post("/login", (req, res) => {
	try {
		const { username, password } = req.body;
		const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, "db.json"), "UTF-8"));
		const { users = [] } = db;

		const userFromBd = users.find((user) => user.username === username && user.password === password);

		if (userFromBd) {
			return res.json(userFromBd);
		}

		return res.status(403).json({ message: "User not found" });
	} catch (e) {
		console.log(e);
		return res.status(500).json({ message: e.message });
	}
});

// проверяем, авторизован ли пользователь
// eslint-disable-next-line
server.use((req, res, next) => {
	if (!req.headers.authorization) {
		return res.status(403).json({ message: "AUTH ERROR" });
	}

	next();
});

server.use(router);

// настраиваем и запускаем https или http сервер в зависимости от окружения
if (IS_DEV) {
	const HTTP_PORT = 8000;
	const httpServer = http.createServer(server);

	httpServer.listen(HTTP_PORT, () => {
		console.log(`http server is running on ${HTTP_PORT} port`);
	});
} else {
	const privateKey = fs.readFileSync("/etc/letsencrypt/live/fsd-blog.ru-0003/privkey.pem", "utf8");
	const certificate = fs.readFileSync("/etc/letsencrypt/live/fsd-blog.ru-0003/fullchain.pem", "utf8");
	const credentials = { key: privateKey, cert: certificate };
	const PORT = 8443;
	const httpsServer = https.createServer(credentials, server);

	httpsServer.listen(PORT, () => {
		console.log(`https server is running on ${PORT} port`);
	});

}
