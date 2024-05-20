# React + TypeScript + Vite

Пример простой реализации react библиотеки компонентов. Задача показать простой конфиг для.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

# Основные этапы

## Подготовка и настройка проекта 


Создаем шаблон проекта с помощью Vite:

```
# npm 7+
# react-ts-lib - название проекта
# react-ts - используемый шаблон
npm create vite react-ts-lib -- --template react-ts
```

Переходим в созданную директорию, устанавливаем зависимости и запускаем сервер для разработки:

```
cd react-ts-lib
npm i
npm run dev
```

Приводим директорию к следующей структуре:

```
- src
  - lib
    - Button
      - Button.tsx
    - index.ts
- App.tsx
- index.css
- vite.config.ts
- ...
```

## Разработка компонента

Создание react компонентов.

### Режим разработки 

```bash
npm run dev
```

## Сборка и публикация пакета

### локального тестирования библиотеки

Для локального тестирования библиотеки необходимо сделать следующее:

находясь в корневой директории проекта, выполняем команду `npm link` для создания символической ссылки. 

Эта команда приводит к добавлению пакета в глобальную директорию `node_modules`. Список глобально установленных пакетов можно получить с помощью команды `npm -g list --depth 0`:

 находясь в корневой директории (или любой другой), выполняем команду `npm link @my-scope/react-ts-lib` для привязки пакета к проекту.

_Обратите внимание_: после локального тестирования пакета необходимо выполнить 2 команды:

- `npm unlink @my-scope/react-ts-lib` для того, чтобы отвязать пакет от проекта;
- `npm -g rm @my-scope/react-ts-lib` для удаления пакета из `node_modules` на глобальном уровне.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

# References

- [Статья взятая за основу](https://habr.com/ru/companies/timeweb/articles/691338/)
- [github пример статьи](https://github.com/harryheman/blog-posts/tree/master/react-ts-lib)
- [В этой статье хорошо описано как публиковать npm пакет т.е сделать его публичным](https://habr.com/ru/articles/660285/#f6)