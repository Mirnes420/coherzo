i18next.init({
  lng: 'en',
  debug: false,
  resources: {
    en: {
      translation: {
        "title": "Emergency Triage | High-Ticket Leads Straight To WhatsApp",
        // Add more translation keys and values here
      }
    },
    es: {
      translation: {
        "title": "Triaje de Emergencia | Clientes Potenciales Directo a WhatsApp",
        // Add more translation keys and values here
      }
    }
  }
}, function(err, t) {
  // initialize elements
  updateContent();
});

function updateContent() {
  // Example of how to translate elements
  // document.title = i18next.t('title');
  // document.querySelectorAll('[data-i18n]').forEach(function(element) {
  //   element.innerHTML = i18next.t(element.getAttribute('data-i18n'));
  // });
}

function changeLanguage(lng) {
  i18next.changeLanguage(lng, updateContent);
}
