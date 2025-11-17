# Докеризация приложения

- IP адрес 51.250.40.206
- Frontend https://kupi-frontend.nomorepartiessbs.ru
- Backend https://api.kupi-frontend.nomorepartiessbs.ru

## Локальная работа

```bash
# запуск контейнера с backend (есть зависимость от БД)
docker run --rm -p 4000:5000 --env-file ../.env pr-b
# запуск контейнера с frontend
docker run --rm -p 3000:3000 pr-f
```

## Деплой

```bash
# склонировать репозиторий
git clone https://github.com/itsanti/nodejs-docker-and-compose.git
# создать файл настроек .env
cp .env.example .env
# выполнить для запуска приложения
docker compose -f .\docker-compose.pub.yaml up -d --build
```
