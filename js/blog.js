// Load likes and comments
document.querySelectorAll('.post').forEach(post => {
  const id = post.dataset.id;
  const likeCount = post.querySelector('.like-count');
  const commentsList = post.querySelector('.comments-list');

  // Load likes
  const savedLikes = localStorage.getItem(`like-${id}`);
  if(savedLikes) likeCount.textContent = savedLikes;

  // Load comments
  const savedComments = JSON.parse(localStorage.getItem(`comments-${id}`) || "[]");
  savedComments.forEach(text => {
    const comment = document.createElement('p');
    comment.classList.add('comment');
    comment.textContent = text;

    // Add delete button for each comment
    const delBtn = document.createElement('span');
    delBtn.textContent = ' X';
    delBtn.classList.add('delete-comment');
    delBtn.style.color = 'red';
    delBtn.style.cursor = 'pointer';
    comment.appendChild(delBtn);

    commentsList.appendChild(comment);
  });
});

// Likes
document.querySelectorAll('.like-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const post = btn.closest('.post');
    const id = post.dataset.id;
    const countSpan = btn.querySelector('.like-count');
    let count = parseInt(countSpan.textContent) + 1;
    countSpan.textContent = count;
    localStorage.setItem(`like-${id}`, count);
  });
});

// Comments and delete comment
document.querySelectorAll('.comments-section').forEach(section => {
  const input = section.querySelector('.comment-input');
  const addBtn = section.querySelector('.comment-btn');
  const commentsList = section.querySelector('.comments-list');
  const post = section.closest('.post');
  const id = post.dataset.id;

  const saveComment = (text) => {
    const comment = document.createElement('p');
    comment.classList.add('comment');
    comment.textContent = text;

    const delBtn = document.createElement('span');
    delBtn.textContent = ' X';
    delBtn.classList.add('delete-comment');
    delBtn.style.color = '#ff7a18';
    delBtn.style.cursor = 'pointer';
    comment.appendChild(delBtn);

    commentsList.appendChild(comment);

    const savedComments = JSON.parse(localStorage.getItem(`comments-${id}`) || "[]");
    savedComments.push(text);
    localStorage.setItem(`comments-${id}`, JSON.stringify(savedComments));
  }

  addBtn.addEventListener('click', () => {
    const text = input.value.trim();
    if(text !== '') {
      saveComment(text);
      input.value = '';
    }
  });

  input.addEventListener('keypress', (e) => {
    if(e.key === 'Enter'){
      e.preventDefault();
      addBtn.click();
    }
  });

  // Delete comment using event delegation
  commentsList.addEventListener('click', (e) => {
    if(e.target.classList.contains('delete-comment')){
      const commentEl = e.target.parentElement;
      const savedComments = JSON.parse(localStorage.getItem(`comments-${id}`) || "[]");
      const newComments = savedComments.filter(c => c !== commentEl.firstChild.textContent);
      localStorage.setItem(`comments-${id}`, JSON.stringify(newComments));
      commentEl.remove();
    }
  });
});

