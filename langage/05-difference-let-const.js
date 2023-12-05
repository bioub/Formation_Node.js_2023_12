// const prenom = 'Romain';
// prenom = 'Toto'; // TypeError: Assignment to constant variable.

let prenom = 'Romain';
prenom = 'Toto';

// avec const on ne peut pas utiliser les affectations
// =, +=, -=, ++, --...
// ça n'empeche pas .push par exemple ou :
// for (const buttonEl of buttonEls)

const prenoms = ['Romain'];
prenoms.push('Toto');
