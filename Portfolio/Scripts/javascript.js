//   author:		Shania Prins
//   datum:		22-9-2025  

//   beschrijving:   Javascript voor de dark mode fucntie.



const link = document.getElementById('color-switch');

link.addEventListener('click', function(event) {
  event.preventDefault();

  const currentText = link.textContent.trim();
  const body = document.body;

  if (body.classList.contains('dark-mode')) {
    body.classList.remove('dark-mode');
    link.textContent = 'Dark mode';
  } else {
    body.classList.add('dark-mode');
    link.textContent = 'Light mode';
  }
});


function openOutlook() {
}