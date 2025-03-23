let latin = '';
const EXPAN_SYLLABLES = {
    'i': 'ȯ',
    'a': 'o',
    'u': 'ō',
    'ti': 'ṙ',
    'ta': 'r',
    'tu': 'r̄',
    'ki': 'ɹ̇',
    'ka': 'ɹ',
    'ku': 'ɹ̄',
    'ri': 'ƞ̇',
    'ra': 'ƞ',
    'ru': 'ƞ̄',
    'ni': 'ɥ̇',
    'na': 'ɥ',
    'nu': 'ɥ̄',
    'hi': 'ɔ̇',
    'ha': 'ɔ',
    'hu': 'ɔ̄',
    'PERIOD': ' · ',
    ' ': ' ',
}

$(document).keyup(function() {
    if (!'iautkrnh. '.split().some(e => $('#input').val().includes(e))) {
        $('#input').text($('#input').slice(0, -1));
    }

    $('#output').html(toExpan($('#input').val()));
});

function toExpan(str) {
    let output = '';
    console.log(syllables(str))
    syllables(str).forEach(e => {
        output += EXPAN_SYLLABLES[e] || `<span class='red'>${e}</span>`;
    });
    
    return output;
}

function syllables(str) {
    let currSyllable = '';
    let output = [];
    for (let e of str.split('')) {
        if ('iau'.includes(e)) {
            if ('tkrnh'.includes(currSyllable)) {
                currSyllable += e;
            } else {
                output.push(currSyllable);
                currSyllable = e;
            }
        } else if (e === '.') {
            output.push(currSyllable);
            currSyllable = '.';
        } else if (e === ' ') {
            if (currSyllable === '.') {
                currSyllable = 'PERIOD';
            } else {
                output.push(currSyllable);
                currSyllable = ' ';
            }
        } else {
            output.push(currSyllable);
            currSyllable = e;
        }
    }
    output.push(currSyllable);

    if (!output[0]) {
        output.shift();
    }

    return output;
}