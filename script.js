/* Ici on place dans une variable l'id associé a l'input de la checkbox */

const darkMode = document.getElementById('dark-mode');

/* Ici on écoute l'évenement sur l'input */
/* Quand l'input "change" alors la fonction se joue */
/* la fonction dit que quand la checkbox change alors on injecte au BODY -situer dans le DOM(document)- la class CSS appeler .Dark 
On injecte la classe "DARK" dans le BODY au moment ou la checkbox change. */
/* On pourrais remplacer 'Change' par 'click' */
darkMode.addEventListener('change', () => {
  document.body.classList.toggle('dark');
})