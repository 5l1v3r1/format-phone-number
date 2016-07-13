import { LanguageManager, LanguageKeyEnum } from 'intl-pn-formats';

var languageManager = new LanguageManager(
  'languageKey',
  'languagesKey',
  './locale-data/',
  window
);
languageManager.setLanguages([LanguageKeyEnum.EN, LanguageKeyEnum.KO, LanguageKeyEnum.PL, LanguageKeyEnum.UK]);
languageManager.initLanguage().then(function(messages) {
	console.log(messages);
  console.log(languageManager.getCurrentLanguageName());
});
// languageManager.setCurrentLanguage(CardsTranslation.LanguageKeyEnum.UK);
