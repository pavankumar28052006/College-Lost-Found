document.getElementById('reportForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const form = e.target;
  const item = {
    type: form.type.value,
    title: form.title.value,
    description: form.description.value,
    location: form.location.value,
    contact: form.contact.value,
    date: form.date.value
  };

  const items = JSON.parse(localStorage.getItem('items')) || [];
  items.push(item);
  localStorage.setItem('items', JSON.stringify(items));

  alert('Item submitted!');
  window.location.href = 'dashboard.html';
});