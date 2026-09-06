const filterBtns = document.querySelectorAll('.filters button');
const classes = document.querySelectorAll('.class');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.filters .active').classList.remove('active');
    btn.classList.add('active');

    const filter = btn.dataset.filter;

    classes.forEach(item => {
      if (filter === 'all' || item.classList.contains(filter)) {
        item.classList.remove('hidden');  
      } else {
        item.classList.add('hidden');     
      }
    });
  });
});
