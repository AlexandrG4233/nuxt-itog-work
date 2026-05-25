import { defineRule, configure } from "vee-validate";
import { email, required } from "@vee-validate/rules";
import { localize, setLocale } from "@vee-validate/i18n";

const phoneValidator = (value) => {
  if (value === null || value === undefined || value === "") return true;
  return /^((\+7|8)\s?\(?\d{3}\)?\s?\d{3}-?\d{2}-?\d{2})$/.test(value);
};

defineRule("email", email);
defineRule("required", required);
defineRule("phone", phoneValidator);

const loadLocale = async () => {
  try {
    const response = await fetch('/json/vee-validate/ru.json');
    const ruLocale = await response.json();
    
    configure({
      generateMessage: localize({
        ru: ruLocale,
      }),
    });
    
    setLocale("ru");
  } catch (error) {
    console.error('Failed to load locale:', error);
  }
};

export default defineNuxtPlugin(() => {
  loadLocale();
});