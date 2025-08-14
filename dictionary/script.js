let defLang = 'en';

function WordClass(en, jp) {
    return {
        'en': en,
        'jp': jp,
    };
}

let classTranslations = {
    'c': WordClass('content word', '内容語'),
    'a': WordClass('adposition', '接置詞'),
    'p': WordClass('particle', '助詞'),
};

/*
This part is in './words.js':

words = {
    'testy': {
        fontKey: 'tessty',
        wordClass: 'c',
        'def-en': ['This is a definition.'],
        'def-jp': ['これは定義です．'],
    },

    'testy testy': {
        fontKey: 'tessty tessty',
        wordClass: 'a',
        'def-en': ['This too is a definition.', 'This is actually a second definition.'],
        'def-jp': ['これも定義です．', 'これは実は二つ目の定義です．'],
    },
}
*/

function addWord(word) {
    const $MAIN = $('.main');
    let definitionsHtml = '';
    words[word]['def-' + defLang].forEach((def) => {
        definitionsHtml += `<li>${def}</li>`;
    });

    const $WORD_INFO_HTML = `<div class="card extruded"><div class="word"><h1 class="ocular" aria-hidden="true">${words[word].fontKey}</h1><h2 class="muted">${word}</h2></div><div class="word-definitions"><h3>${classTranslations[words[word].wordClass][defLang]}</h3><ol>${definitionsHtml}</ol></div></div>`;

    $MAIN.append($WORD_INFO_HTML);
}

function addWords() {
    const $MAIN = $('.main');
    $MAIN.empty();
    Object.keys(words).forEach((word) => addWord(word));
}

function setSearchLang(option) {
    $('.lang-search-option').removeClass('active');
    $(`[data-search="${option}"]`).addClass('active');
}

function setDefLang(option) {
    defLang = option;
    $('.lang-def-option').removeClass('active');
    $(`[data-def="${option}"]`).addClass('active');
    addWords();
}

$(document).ready(addWords);