import { writable } from 'svelte/store';

// Функция для безопасного определения начального языка
const getInitialLang = () => {
  // Проверяем, выполняется ли код в браузере
  if (typeof window !== 'undefined') {
    return localStorage.getItem('lang') || 
           navigator?.language?.slice(0, 2) || 
           'en';
  }
  return 'en'; // Значение по умолчанию для сервера
};

export const lang = writable(getInitialLang());

export function setLanguage(newLang: string) {
  lang.set(newLang);
  // Сохраняем только в браузере
  if (typeof window !== 'undefined') {
    localStorage.setItem('lang', newLang);
  }
}