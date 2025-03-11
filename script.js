const btn = 
document.getElementById('btn');

const navLinks =
document.querySelector('.nav-links');


btn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
```

