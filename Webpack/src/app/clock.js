import format from 'date-fns/format';
// Ajouter json5-loader à la config
// import config from './config.json5';

// Ajouter favicons-webpack-plugin
// https://github.com/jantimon/favicons-webpack-plugin
// Pour générer les fichiers favicons

export const formatHour = 'HH:mm:ss';

export class Clock {
  /**
   * Clock Constructor
   * @param {HTMLDivElement} divElt
   */
  constructor(divElt) {
    this.divElt = divElt;
  }
  /**
   * Renders clock
   */
  render() {
    const now = new Date();
    this.divElt.innerText = format(now, formatHour);
  }
  start() {
    this.render();
    setInterval(this.render.bind(this), 1000);
  }
}

