/**
 * 
 * @param {String} carta
 * @returns {HTMLImageElement} imagen de carta de retorno 
 */
export const crearCartaHTML = (carta) =>{
    if(!carta) throw new Error('La carta es un argumento obligatorio')
    
    const imgCarta = document.createElement('img');
    imgCarta.classList.add('carta');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    return imgCarta
}

