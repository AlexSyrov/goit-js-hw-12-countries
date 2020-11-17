import CardTpl from '../handlebars/hendel.hbs';
import CardTplTwo from '../handlebars/hendel_two.hbs';
import { noticeError } from './notice';
import getRefs from './refs'
const refs = getRefs()

export function markupFun(countrie) {
    const markup = CardTpl(countrie);
    inAdHtml(markup)
}

export function markupTwoFn(countrie) {
    const markup = CardTplTwo(countrie);
    inAdHtml(markup);
    if (countrie.length > 10) {
      noticeError(countrie.length)
    } 
}

function inAdHtml(markup) {
    refs.form.insertAdjacentHTML('beforeend', markup);
}
