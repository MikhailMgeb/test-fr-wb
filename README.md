# Getting Started with Create React App

### ЗАДАЧА:

- Создать мини-приложение, где есть форма, в которой
- текстовый инпут и селект.
- Из селекта можно выбрать тип: "user" или "repo".

- В зависимости от того, что выбрано в селекте, при отправке формы приложение делает запрос на один из следующих эндпоинтов:

```sh
https://api.github.com/users/${nickname}
```
пример значений: defunkt, ktsn, jjenzz, ChALkeR, Haroenv

```sh
// https://api.github.com/repos/${repo}
```
пример значений: nodejs/node, radix-ui/primitives, sveltejs/svelte

В списке ниже выводится полученная информация;
- если это юзер, то его full name и число репозиториев;
- если это репозиторий, то его название и число звезд.

### Выполнено:
- Типизация всех элементов.
- Выполнено в одном файле App.tsx, НО с дроблением на компоненты.0
