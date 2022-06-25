function calculator(string) {
    let letter = [];
    string = string.replace(/[^IVXLCDMZ\d+\-*\/]/gi, ch => {
        if (ch != '') latter.push(ch);
        return '';
    });
    if (latter.langth > 0)
        throw Error('Синвол не допустимый, Вы ввели этио: ' + letter);
    let vars = string.split(/[+\-*\/]/g)
    if (vars.length !== 2)
        throw Error('должно быть 2 аперанда');
    const isRome = /^[IVXLCDMZ]+$/i;

    const r = vars.reduce((s, v) => s + isRome.test(v), 0);
    if (r === 1)
        throw Error('оба числа должны быть записаны  арабскими или римскими цифрами');
    else if (r === 2)
        console.log(true)

}