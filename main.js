let mainText1 = document.getElementById('main-text-1');
let mainText2 = document.getElementById('main-text-2');
let mainText3 = document.getElementById('main-text-3');

let paragraph1 = document.getElementById('paragraph-1');
let paragraph2 = document.getElementById('paragraph-2');
let paragraph3 = document.getElementById('paragraph-3');

const arrDefRuMainText = ['Автозаполнение', 'Автофильтр', 'Гистограмма', 'Диаграмма', 'Дубликаты', 'Макрос', 'Массив', 'Объединение ячеек', 'Сортировка', 'Формат ячеек', 'Частичная ссылка', 'Транспонирование', 'Ячейка', 'Диапазон', 'Формула', 'Функция', 'Сводная таблица', 'Фильтр', 'Абсолютная ссылка', 'Относительная ссылка', 'Форматирование', 'Условное форматирование'];
const arrDefRuParagraph = [
    'Автоматическое заполнение ячеек данными по образцу.',
    'Быстрый отбор данных по определенным условиям.',
    'Тип диаграммы для отображения частоты значений.',
    'Графическое представление данных.',
    'Повторяющиеся значения в таблице.',
    'Автоматизация действий с помощью VBA.',
    'Группа значений, обработанных одной формулой.',
    'Создание одной ячейки из нескольких.',
    'Упорядочивание данных по возрастанию или убыванию.',
    'Настройка отображения данных (числа, даты, текст).',
    'Частично фиксированная ссылка, например $A1 или A$1.',
    'Изменение ориентации диапазона строк на столбцы и наоборот.',
    'Элемент таблицы, содержащий данные.',
    'Группа ячеек, например A1:C3.',
    'Выражение, выполняющее вычисления, например =A1+B1.',
    'Встроенные формулы, например =SUM(A1:A3)',
    'Инструмент для анализа данных.',
    'Позволяет отбирать данные по критериям.',
    'Фиксированная ссылка $A$1, не меняется при копировании.',
    'Изменяется при копировании (A1).',
    'Изменение внешнего вида ячеек (цвет, шрифт и т. д.).',
    'Автоматическое изменение внешнего вида ячеек по условиям.',
];

const arrDefEnMainText = ['Autofill', 'AutoFilter', 'Histogram', 'Chart', 'Duplicates', 'Macro', 'Array', 'Merge Cells', 'Sorting', 'Cell Format', 'Partial Reference', 'Transposition', 'Cell', 'Range', 'Formula', 'Function', 'Pivot Table', 'Filter', 'Absolute Reference', 'Relative Reference', 'Formatting', 'Conditional Formatting'];

const arrDefEnParagraph = [
    'Automatic filling of cells with data based on a pattern.',
    'Quick selection of data based on certain conditions.',
    'A type of chart for displaying frequency of values.',
    'Graphical representation of data.',
    'Repeating values in a table.',
    'Automation of actions using VBA.',
    'A group of values processed by a single formula.',
    'Creating a single cell from multiple ones.',
    'Arranging data in ascending or descending order.',
    'Configuring data display (numbers, dates, text).',
    'Partially fixed reference, for example $A1 or A$1.',
    'Changing the orientation of a range of rows to columns and vice versa.',
    'An element of a table containing data.',
    'A group of cells, for example A1:C3.',
    'An expression performing calculations, for example =A1+B1.',
    'Built-in formulas, for example =SUM(A1:A3).',
    'A tool for data analysis.',
    'Allows filtering data based on criteria.',
    'Fixed reference $A$1, does not change when copied.',
    'Changes when copied (A1).',
    'Changing the appearance of cells (color, font, etc.).',
    'Automatically changing the appearance of cells based on conditions.',
];

const arrDefSkMainText = ['Automatické vyplňovanie', 'Automatický filter', 'Histogram', 'Graf', 'Duplikáty', 'Makro', 'Pole', 'Zlúčenie buniek', 'Triedenie', 'Formát bunky', 'Čiastočný odkaz', 'Transpozícia', 'Bunka', 'Rozsah', 'Vzorec', 'Funkcia', 'Kontingenčná tabuľka', 'Filter', 'Absolútny odkaz', 'Relatívny odkaz', 'Formátovanie', 'Podmienené formátovanie'];

const arrDefSkParagraph = [
    'Automatické vyplnenie buniek údajmi podľa vzoru.',
    'Rýchly výber údajov na základe určitých podmienok.',
    'Typ grafu na zobrazovanie frekvencie hodnôt.',
    'Grafické znázornenie údajov.',
    'Opakujúce sa hodnoty v tabuľke.',
    'Automatizácia akcií pomocou VBA.',
    'Skupina hodnôt spracovaných jedným vzorcom.',
    'Vytvorenie jednej bunky z viacerých.',
    'Usporiadanie údajov vzostupne alebo zostupne.',
    'Nastavenie zobrazenia údajov (čísla, dátumy, text).',
    'Čiastočne fixovaný odkaz, napríklad $A1 alebo A$1.',
    'Zmena orientácie rozsahu riadkov na stĺpce a naopak.',
    'Prvok tabuľky obsahujúci údaje.',
    'Skupina buniek, napríklad A1:C3.',
    'Výraz vykonávajúci výpočty, napríklad =A1+B1.',
    'Vstavané vzorce, napríklad =SUM(A1:A3).',
    'Nástroj na analýzu údajov.',
    'Umožňuje filtrovať údaje podľa kritérií.',
    'Fixovaný odkaz $A$1, nemení sa pri kopírovaní.',
    'Mení sa pri kopírovaní (A1).',
    'Zmena vzhľadu buniek (farba, písmo atď.).',
    'Automatická zmena vzhľadu buniek na základe podmienok.',
];

let index = localStorage.getItem('currentIndex') ? parseInt(localStorage.getItem('currentIndex')) : 0;

function getWords() {
    if (index >= arrDefRuMainText.length) {
        index = 0;
    }

    mainText1.innerHTML = arrDefRuMainText[index];
    paragraph1.innerHTML = arrDefRuParagraph[index];

    mainText2.innerHTML = arrDefEnMainText[index];
    paragraph2.innerHTML = arrDefEnParagraph[index];

    mainText3.innerHTML = arrDefSkMainText[index];
    paragraph3.innerHTML = arrDefSkParagraph[index];

    index++;
    localStorage.setItem('currentIndex', index);
}


document.getElementById('btn').addEventListener('click', getWords);