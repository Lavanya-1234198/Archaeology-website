 const loginForm = document.getElementById('loginForm');
    const errorMessageElement = document.getElementById('errorMessage');

    loginForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      // Validate username and password
      if (username !== 'admin' || password !== 'password') {
        errorMessageElement.textContent = 'Invalid username or password';
        return;
      }

      // Successful login
     alert( 'Login successful!');
    });
