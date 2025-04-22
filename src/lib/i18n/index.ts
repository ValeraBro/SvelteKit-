import type { Translations } from './types';   
import en from './translations/en.json';
import ru from './translations/ru.json';

const resources: Record<string, Translations> = {
  en,
  ru
};

export const t = (key: string, lang: string, replacements?: Record<string, string>): string => {
    const keys = key.split('.');
    let result: any = resources[lang];
  
    // Находим строку перевода
    for (const k of keys) {
      result = result?.[k];
      if (result === undefined) return key;
    }
  
    // Заменяем плейсхолдеры (если они есть)
    if (replacements) {
      return Object.entries(replacements).reduce(
        (str, [placeholder, value]) => str.replace(`{${placeholder}}`, value),
        result
      );
    }
  
    return result;
  };
  