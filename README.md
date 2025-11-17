# Докеризация приложения

- IP адрес 51.250.40.206
- Frontend https://kupi-frontend.nomorepartiessbs.ru
- Backend https://api.kupi-frontend.nomorepartiessbs.ru

## Локальная работа

```bash
# запуск контейнера с backend (есть зависимость от БД)
docker run --rm -p 4000:5000 --env-file ../.env pr-b
```
