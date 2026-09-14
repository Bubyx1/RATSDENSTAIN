/* =========================================================================
   CONFIGURAZIONE LOCALE — questo file NON va sovrascritto quando aggiorni
   index.html. È l'unico posto dove mettere i tuoi valori.
   ========================================================================= */

window.RD_CONFIG = {

  // URL del Web App di Google Apps Script. Finisce con /exec
  API_URL: "INCOLLA_QUI_URL_WEB_APP_GOOGLE_APPS_SCRIPT",

  // PIN del pannello organizzatori.
  // NOTA: questo file è pubblico su GitHub Pages, quindi il PIN è leggibile
  // da chiunque guardi il codice sorgente. Va bene per tenere fuori gli
  // ospiti curiosi, non è una password vera. Vedi CLAUDE.md.
  ADMIN_PIN: "3110",

  // Cadenze di polling in millisecondi.
  // POLL_IDLE: durante la serata normale. Non abbassarlo per "sembrare più
  // reattivo": il carico sul backend cresce e non risolve nulla.
  // POLL_REVEAL: solo durante la premiazione attiva, dove il ritardo si nota.
  POLL_IDLE_MS: 8000,
  POLL_REVEAL_MS: 2500,

  // Budget di peso per foto, in byte. Alzalo se la qualità in penombra
  // non ti soddisfa: da quando le foto stanno su Drive e non nelle celle
  // del foglio, non c'è più un limite tecnico stretto.
  TARGET_BYTES: 500 * 1024
};
