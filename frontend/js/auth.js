function getUsers() {
  return JSON.parse(localStorage.getItem('users')) || [];
}

function saveUser(user) {
  const users = getUsers();
  users.push(user);
  localStorage.setItem('users', JSON.stringify(users));
}

// Register
document.getElementById('registerForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const form = e.target;
  const user = {
    name: form.name.value,
    email: form.email.value,
    password: form.password.value
  };

  const users = getUsers();
  if (users.some(u => u.email === user.email)) {
    alert('Email already exists!');
    return;
  }

  saveUser(user);
  alert('Registered successfully!');
  window.location.href = 'index.html';
});

// Login
document.getElementById('loginForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const form = e.target;
  const email = form.email.value;
  const password = form.password.value;

  const users = getUsers();
  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    localStorage.setItem('token', email); // store email as token
    alert('Login successful!');
    window.location.href = 'dashboard.html';
  } else {
    alert('Invalid credentials');
  }
});