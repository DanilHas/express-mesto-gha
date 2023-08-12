[![Tests](../../actions/workflows/tests-13-sprint.yml/badge.svg)](../../actions/workflows/tests-13-sprint.yml) [![Tests](../../actions/workflows/tests-14-sprint.yml/badge.svg)](../../actions/workflows/tests-14-sprint.yml)
# Проект Mesto фронтенд + бэкенд

## Описание проекта

В рамках данного проекта создавался бэкенд для проекта Mesto. Сервер создан с помощью express. Все данные отправляемые пользователем валидируются и записываются в базу данных MongoDB. Также осуществлена регистрация и авторизация пользователя. При авторизации создается jwt токен, который позволяет пользователю проходить аутентификацию. Кроме того осуществлена защита роутов, чтобы неавторизованный пользователь не смог посещать страницы, к которым у него нет доступа.

## Технологии

В данном проекте были использованы следующие технологии:

* Node js;
* Express;
* MongoDB;
* Mongoose;
* bcryptjs;
* celebrate;
* jsonwebtoken;
* validator;

## Запуск проекта

`npm run start` — запускает сервер
`npm run dev` — запускает сервер с hot-reload

* [Ссылка на репозиторий](https://github.com/DanilHas/express-mesto-gha)
