let lang = window.navigator.languages ? window.navigator.languages[0] : null;
lang =
  lang ||
  window.navigator.language ||
  window.navigator.browserLanguage ||
  window.navigator.userLanguage;

let shortLang = lang;
if (shortLang.indexOf('-') !== -1) shortLang = shortLang.split('-')[0];
console.log(shortLang);
function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    {
      pageLanguage: 'en',
      layout: google.translate.TranslateElement.InlineLayout,
    },
    'google_translate_element'
  );
  if (shortLang == 'en') {
    return;
  }
  setTimeout(() => {
    changeLang();
  }, 1000);
}
function changeLang() {
  let ele = document.querySelector('#google_translate_element select');
  switch (shortLang) {
    case 'ua':
      ele.selectedIndex = 99;
      break;
    case 'fr':
      ele.selectedIndex = 26;
      break;
    default:
      ele.selectedIndex = 20;
      break;
  }
  ele.dispatchEvent(new Event('change'));
}
