// Раздаёт index.html сразу на двух адресах, чтобы проверить оба случая:
//   http://localhost:8765  — этот адрес добавляем в «Разрешённые домены»;
//   http://localhost:8766  — его в списке нет, встраивание должно блокироваться.
// Запуск: node serve.mjs
import { createServer } from "node:http";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

// Файл читается на каждый запрос — правки index.html видны без перезапуска.
const file = join(dirname(fileURLToPath(import.meta.url)), "index.html");

for (const port of [8765, 8766]) {
  createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(readFileSync(file));
  }).listen(port, "127.0.0.1", () => {
    console.log(`http://localhost:${port}`);
  });
}
