// testimonials.js (مع زرار حذف لكل تعليق)

document.addEventListener('DOMContentLoaded', () => {
  const testimonials = document.querySelectorAll('.testimonial');

  testimonials.forEach(testimonial => {
    const id = testimonial.dataset.id;
    const likeBtn = testimonial.querySelector('.like-btn');
    const likeCountElem = testimonial.querySelector('.like-count');
    const commentInput = testimonial.querySelector('.comment-input');
    const commentBtn = testimonial.querySelector('.comment-btn, .comment-submit');
    const commentsList = testimonial.querySelector('.comments-list');

    // ===== Load Likes =====
    let likes = localStorage.getItem(`testimonial-like-${id}`) || 0;
    likeCountElem.textContent = likes;

    // ===== Load Comments =====
    let comments = JSON.parse(localStorage.getItem(`testimonial-comments-${id}`)) || [];
    comments.forEach(comment => {
      const commentElem = createCommentElement(comment, commentsList, comments, id);
      commentsList.appendChild(commentElem);
    });

    // ===== Like Button =====
    likeBtn.addEventListener('click', () => {
      likes = parseInt(likes) + 1;
      likeCountElem.textContent = likes;
      localStorage.setItem(`testimonial-like-${id}`, likes);
    });

    // ===== Comment Button =====
    commentBtn.addEventListener('click', () => {
      const commentText = commentInput.value.trim();
      if(commentText === '') return;

      const commentElem = createCommentElement(commentText, commentsList, comments, id);
      commentsList.appendChild(commentElem);

      comments.push(commentText);
      localStorage.setItem(`testimonial-comments-${id}`, JSON.stringify(comments));

      commentInput.value = '';
    });
  });

  // ===== Function to create comment with delete button =====
  function createCommentElement(text, listElem, commentsArray, id) {
    const commentWrapper = document.createElement('div');
    commentWrapper.style.display = 'flex';
    commentWrapper.style.justifyContent = 'space-between';
    commentWrapper.style.alignItems = 'center';
    commentWrapper.style.marginBottom = '5px';

    const commentElem = document.createElement('p');
    commentElem.textContent = text;
    commentElem.style.margin = '0';
    commentElem.style.padding = '6px 10px';
    commentElem.style.borderRadius = '6px';
    commentElem.style.background = '#111';
    commentElem.style.color = '#ffffff';
    commentElem.style.flex = '1';

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.style.marginLeft = '8px';
    deleteBtn.style.padding = '4px 8px';
    deleteBtn.style.border = 'none';
    deleteBtn.style.background = '#ff7a18';
    deleteBtn.style.color = '#fff';
    deleteBtn.style.borderRadius = '5px';
    deleteBtn.style.cursor = 'pointer';
    deleteBtn.style.fontSize = '12px';

    deleteBtn.addEventListener('click', () => {
      listElem.removeChild(commentWrapper);
      // remove from localStorage
      const index = commentsArray.indexOf(text);
      if(index > -1){
        commentsArray.splice(index, 1);
        localStorage.setItem(`testimonial-comments-${id}`, JSON.stringify(commentsArray));
      }
    });

    commentWrapper.appendChild(commentElem);
    commentWrapper.appendChild(deleteBtn);

    return commentWrapper;
  }
});
