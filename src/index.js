/**
 * Мы передаем строку и должны заменить любую z или v вне зависимости от регистра
 * на символ звездочки *
 * @param {string} string
 * @returns {string}
 */
export const replaceZAndVFromString = (string) => {

    let strReplace = string.replaceAll('z', '*').replaceAll('v', '*')
    return strReplace
};

const replacedString = replaceZAndVFromString('strt z and v');

console.log(replacedString);

/**
 * Функция должна принять 3 аргумента и все строки. Мы передаем строку,
 * вторая строка это искомое слово, третья это то слово, на которое мы должны
 * заменить. Смотрите использование в файле check.js рядом. Должно вернуть строку
 * 1 аргумента с замененным словом(2 аргумент) на слово(3 аргумент)
 * @param {string} string
 * @param {string} word
 * @param {string} newWord
 * @returns {string}
 */

export const changeWord = (string, word, newWord) => {
    let strNew = string.replace(word, newWord)
    return strNew
};
const changedString = changeWord('my name bohdan and I', 'bohdan', 'vlad'); // Должно вернуть 'my name vlad and I'
// Работаем по первому совпадению, на второе нам все равно. Если совпадений нет, возвращаем оригинальную строку с первого аргумента

console.log(changedString);


/**
 * Должна вернуть строку(1 аргумент) на обрезанную по длине(2 аргумент, число)
 * @param {string} string
 * @param {number} length
 * @returns {string}
 */

export const truncate = (string, length) => {
    let strNew = string.slice(0, length)
    return strNew

};

const truncatedString = truncate('test strubg ', 3); // Должно вернуть 'tes'

console.log(truncatedString);
/**
 * Принимает строку в первом аргументе, и символ во втором
 * И должно вернуть количество этих символов в этой строке
 * Попробуйте реализовать просто через цикл for и с проверкой
 * посимвольно. Кстати, проверка регистронезависимая. Если у нас
 * строка 'I am ivan' и хочу найти количество символов i то будет
 * их 2, и если I то тоже 2
 * @param {string} string
 * @param {string} symbol
 * @returns {number}
 */
export const quantityOfSymbols = (string, symbol) => {

    console.log(string)
    let strLowerCase = string.toLowerCase()
    console.log(strLowerCase)
    let sum = 0
    for (let i = 0; i < strLowerCase.length; i += 1) {
        if (strLowerCase[i] === symbol) {
            sum += 1
        }
    }
    console.log(sum)
    return sum
};

const cycledSymbols = quantityOfSymbols('Test', 't');

console.log(cycledSymbols); // вернет 2;

/**
 * Принимает строку в первом аргументе, и символ во втором
 * И должно вернуть количество этих символов в этой строке
 * Попробуйте реализовать через метод indexOf. Напомню, в
 * нем есть второй аргумент, который говорит, от какой позиции
 * делать поиск. Я хочу, чтобы вы сделали бесконечный цикл
 * while и искали символы этим методом, и сделали break когда позиций
 * больше нет. Так будет более оптимально, меньше проходов цикла.
 * Кстати, проверка регистронезависимая. Если у нас
 * строка 'I am ivan' и хочу найти количество символов i то будет
 * их 2, и если I то тоже 2
 * @param {string} string
 * @param {string} symbol
 * @returns {number}
 */

export const quantityOfSymbolsWithIndexOf = (string, symbol) => {
console.log(string)
let strLowerCase = string.toLowerCase()
let pos = 0
let sum = 0

while (true) {
    let foundPos = strLowerCase.indexOf(symbol, pos);
    if (foundPos === -1) break;
    pos = foundPos + 1;
    sum += 1
}
return sum
}

const cycledSymbolsIndexOf = quantityOfSymbolsWithIndexOf('Test', 't');

console.log(cycledSymbolsIndexOf); 
