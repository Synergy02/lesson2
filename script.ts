/**
 * Для установки вам понадобится NodeJS в системе, если нет, то скачиваем и устанавливаем с официального сайта
 *
 * Установка локально как Dev Dependency (запуск как npx tsc)
 *
 * Установка глобально (запуск как tsc)
 *
 * Рассмотрим справку по компилятору npx tsc --help и некоторые доступные флаги (опции)
 */



/**
 *
 * Напишем 1ю функцию
 */

/**
 *
 * служебный комментарий
 * // @ts-nocheck для пропуска проверки всего файла
 * // @ts-check для проверки всего файла (чаще используется для JS)
 *
 * // @ts-expect-error and // @ts-ignore - первая директива ожидает ошибку на следующей строке и не выделяет ее
 * вторая просто говорит компилятору не проверять следующую строку. По сути делают одно и то же, разница в деталях и контексте.
 * См https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-9.html#ts-ignore-or-ts-expect-error
 */



function greetings(name: string) {
    const newElement = document.createElement('h2')
    newElement.innerHTML = `Hello, ${name}`;
    document.querySelector('.content')?.append(newElement);
}

greetings('Sergey');

/**
 * TS-файл необходимо скомпилировать в JS и подключить готовый JS в HTML-документ
 *
 * ``tsc ./lesson2/script.ts ``
 *
 * или скомпилировать с другим именем выходного файла tsc ./lesson2/script.ts --outfile my-super-script.js


 */

greetings(12345);

// @ts-ignore
greetings({name: 'Vasya'});
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