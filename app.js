indow.addEventListener('load', event => {

  console.log(' Blog Client: ready to Launch');

  const baseURL = 'http://localhost:3003/api/blogposts/';
  const newPostButtonEl = document.getElementById('new-post');
  const allPostsEl = document.getElementById('all-posts');
  const postsListEl = document.createElement('ul');
  allPostsEl.appendChild(postsListEl);
  const focusPostEl = document.getElementById('focus-post');
