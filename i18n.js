import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(HttpApi) // Загружает переводы через HTTP
  .use(LanguageDetector) // Определяет язык пользователя
  .use(initReactI18next) // Интеграция с React
  .init({
    supportedLngs: ["en", "ru"], // Поддерживаемые языки
    fallbackLng: "en", // Язык по умолчанию
    debug: true, // Включает вывод для отладки
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json", // Путь к файлам переводов
    },
    interpolation: {
      escapeValue: false, // Отключает экранирование для React
    },
  });

export default i18n;
