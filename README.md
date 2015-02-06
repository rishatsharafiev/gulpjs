# gulpfile-js
### Установка node.js
1. Скачать <a href="http://nodejs.org/download/">Node.js</a> для вашей платформы.
2. Установить *Node.js*.
3. Ввести в консоли, чтобы узнать установился ли *Node.js* и *npm*.
```bash
$ node -v
v0.13.0-pre
$ npm -v
2.1.14
```

### Установка зависимостей
1. перейти в директорию проекта.
```bash
$ cd gruntfile
```
2. Установить *gulp* глобально.
```bash
$ npm install -g gulp
```
3. Установить зависимости.
```bash
$ npm install
```

### Настройка

* ```javascript
/* options, paths */
var options = {
    prefix_options: ["last 7 version", "> 1%", "ie 8", "ie 7"], // настройки плагина grunt-autoprefixer

    css_src: ['src/css/**/*.css', 'src/css/*.css'], // исходники css для обработки
    css_dest: 'dest/css/', // директория назначения css
    css_file: 'main.css', // файл, в который записывать результат css обработки

    js_src: ['src/js/**/*.js', 'src/js/*.js'], // исходники js для обработки
    js_dest: 'dest/js/', // директория назначения js
    js_file: 'main.js' // файл, в который записывать результат js обработки
};
```

### Использование
1. Запустить задачу по умолчанию.
```bash
$ gulp # запуск задач process-css и process-js
```
2. Запустить просмотр заданных директорий на предмет изменений, при появлении изменений запускаются задачи.
```bash
$ gulp watch # запуск задач process-css и process-js, при фиксации изменений в заданных директориях
```
3. Запустить обработку css из указанных директорий.
```bash
$ gulp process-css
```
4. Запустить обработку js из указанных директорий.
```bash
$ gulp process-js
```
5. Запустить проверку js из указанных директорий.
```bash
$ gulp jshint
```

### Ссылки
* [Пакет в npm](https://www.npmjs.com/package/gruntfile-js)
* [Вопросы и ответы](https://github.com/rishatsharafiev/gruntfile/issues)