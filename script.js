const btn = document.getElementById('dark-mode');

btn.addEventListener('change', () => {
  btn.checked?document.body.classList.add("dark"):document.body.classList.remove("dark");
  localStorage.setItem('darkModeStatus', btn.checked);
});

window.addEventListener('load', () => {
  if(localStorage.getItem('darkModeStatus')=="true"){
    document.body.classList.add("dark"); 
    document.getElementById('btn').checked = true;
  }
});