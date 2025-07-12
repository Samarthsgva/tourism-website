window.onload = function() {
    const greeting = document.createElement('div');
    greeting.classList.add('greeting');
    greeting.innerHTML = '<p>Welcome to our travel website! Let’s explore together!</p>';
    document.body.prepend(greeting);
  
    setTimeout(() => {
      greeting.style.display = 'none';
    }, 5000); 
  };
  
