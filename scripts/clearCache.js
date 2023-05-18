const fs = require("fs");
const path = require("path");

const cacheDir = path.join(__dirname, "node_modules", ".cache");

fs.rmdir(cacheDir, { recursive: true }, (err) => {
	if (err) {
		// eslint-disable-next-line no-console
		console.error("Ошибка при удалении папки .cache:", err);
	} else {
		// eslint-disable-next-line no-console
		console.log("Папка .cache успешно удалена.");
	}
});
