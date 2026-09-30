# Тестовая копия totgus.ru/dostavka

Минимальная страница с тем же `<iframe>`, что на https://totgus.ru/dostavka
(там: `<iframe src="https://web.restomania.ru/totgus" … seamless>` в блоке высотой 800px).
Нужна, чтобы проверить CSP `frame-ancestors` («Разрешённые домены» в backend-админке).

```sh
node serve.mjs
```

- http://localhost:8765 — добавить в «Разрешённые домены» нужного приложения;
- http://localhost:8766 — не добавлять: здесь фрейм должен блокироваться.

Какую страницу встраивать — параметр `?src=`, по умолчанию `http://localhost:3210/dvagusya`
(локальный `nuxt dev --port 3210 --hostname 127.0.0.1` из C:\git\web с `API_ENDPOINT=http://localhost:22080/1.0`;
порты 3000 и 3100 заняты dashboard; в локальном дампе приложения `totgus` нет).

Проверить сервер разработки (dev/stage) можно так же:
`http://localhost:8765/?src=https://dev-web.restomania.ru/<alias>`, но http://localhost
там в список не добавить (только https), поэтому для серверов проверка — с настоящего сайта.

`http://localhost` принимается в список только локально: в base
`params['frameAncestors']['allowInsecureLocalhost'] = true` (params-local.php),
в web — только под `nuxt dev`.
