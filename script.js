const btn = document.getElementById('dark-mode'); // on place l'input checkbox dans la variable btn

// ********************** CODE POUR PASSER LE BODY EN DARK MODE AU CLICK DU CHECK ***************************
btn.addEventListener('change', () => {
  // btn.checked?document.body.classList.add("dark"):document.body.classList.remove("dark"); cette phrase est la meme que celle pas commenté
  if(btn.checked){
    document.body.classList.add("dark")         //Si le bouton est checké on ajoute la class dark au body
  }else{
    document.body.classList.remove("dark")     //Sinon (s'il n'est pas checké) on supprime la classe dark au body
  }
  localStorage.setItem('darkMode', btn.checked); //on ajoute dans le localstorage la clef "darkMode" et la valeur est défini selon l'état du check du bouton
});                                               // s'il est check = true / et pas check = false



// ************************* CODE POUR QUE LE CHOIX DARK MODE RESTE ET SOIT APPLIQUE SUR TOUTES LES PAGES **********************/
window.addEventListener('load', () => {
  if(localStorage.getItem('darkMode')==="true"){ // Au chargement de la page si dans le localStorage darkMode est vrai alors =>
    document.body.classList.add("dark");        // on ajoute la class dark au body
    document.getElementById('btn').checked = true;  // si le bouton est checké alors il est true (vrai)
  }
});