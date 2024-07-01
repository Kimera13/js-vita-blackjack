import { pedirCarta, valorCarta, crearCartaHTML } from './';

/**
 * 
 * @param {Number} puntosMinimos puntos minimos que necesita para ganar la computadora
 * @param {HTMLElement} puntosHTML elemento HTML para mostrar los puntos
 * @param {HTMLElement} divCartasComputadora elemento HTML para mostrar las cartas
 * @param {Array<String>} deck
*/
export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck = [] ) => {

    if ( !puntosMinimos ) throw new Error('Necesita los puntos minimos');
    if ( !puntosHTML ) throw new Error('Argumento puntosHTML es necesario');
    
    let puntosComputadora = 0;
   
    do {
        const carta = pedirCarta( deck );

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;

        const imgCarta = crearCartaHTML( carta );
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Po pa nadie :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Gana el maquina')
        } else if( puntosComputadora > 21 ) {
            alert('Olee, has ganao');
        } else {
            alert('Gana el maquina')
        }
    }, 160 );
}