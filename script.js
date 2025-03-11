const btn = 
document.getElementById('btn');

const navLinks =
document.querySelector('.menu');


btn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
```

