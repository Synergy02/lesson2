/**
 * Установка локально как Dev Dependency (запуск как npx tsc)
 *
 * Установка глобально (запуск как tsc)
 *
 * Рассмотрим справку по компилятору npx tsc --help
 */
/**
 *
 * Напишем 1ю функцию
 */
function greetings(name) {
    var _a;
    var newElement = document.createElement('h2');
    newElement.innerHTML = "Hello, ".concat(name);
    (_a = document.querySelector('.content')) === null || _a === void 0 ? void 0 : _a.append(newElement);
}
greetings('Sergey');
/**
 * TS-файл необходимо скомпилировать в JS и подключить готовый JS в HTML-документ
 *
 * ``npx tsc ./lesson2/script.ts ``
 *
 * или скомпилировать с другим именем выходного файла tsc ./lesson2/script.ts --outfile my-super-script.js


 */
greetings(12345);
greetings({ name: 'Vasya' });
greetings(false);
/**
 * Снова необходимо скомпилировать, чтоб файл обновился.
 * Чтоб не перезапускать компиляцию после каждого изменения, давайте запустем watcher
 * npx tsc ./lesson2/script.ts -w
 */
/**
 *  Попробуем теперь ограничить нашу функцию, сделать ее типизированной. Начнем с аргумента.
 * Добавим аргументу один из базовых типов string - строка. Разберем ошибки.
 *
 * lesson2/script.ts:33:11 - error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.

    33 greetings(12345);
                ~~~~~

    lesson2/script.ts:34:11 - error TS2345: Argument of type '{ name: string; }' is not assignable to parameter of type 'string'.

    34 greetings({name: 'Vasya'});
                ~~~~~~~~~~~~~~~

    lesson2/script.ts:35:11 - error TS2345: Argument of type 'boolean' is not assignable to parameter of type 'string'.

    35 greetings(false);
                ~~~~~

    [6:48:18 PM] Found 3 errors. Watching for file changes.
 */
/**
 * Несмотря на ошибки TS все равно скомпилирует файл
 */ 
