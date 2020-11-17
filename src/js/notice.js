import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';
import { error } from '@pnotify/core';
import getRefs from './refs'

const refs = getRefs()

export function noticeError() {   
  refs.form.innerHTML = ''
  const myNotice = error({
  text: "Too many matches found. Pleas enter a more specific query"});
}