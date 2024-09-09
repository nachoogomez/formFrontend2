const form = document.getElementById('form');
const selectField = document.getElementById('selectField');

function loadSelectOptions() {
  fetch('options.json')
    .then(response => response.json())
    .then(data => {
      data.options.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option.value;
        optionElement.textContent = option.label;
        selectField.appendChild(optionElement);
      });
    })
    .catch(error => console.error('Error al cargar las opciones:', error));
}

document.addEventListener('DOMContentLoaded', loadSelectOptions);


form.addEventListener('submit', function(event) {
  event.preventDefault(); 


  const formData = {
    name: form.name.value,
    email: form.email.value,
    password: form.password.value,
    materia: form.selectField.value
  };

  console.log(formData);
});
