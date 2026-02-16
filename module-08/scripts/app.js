// TODO: Get posts info
// console.log(posts);

const searchFormEl = document.querySelector('.search-form');
const postsEl = document.querySelector('.cards');
const toastEl = document.querySelector('.toast');

renderPosts(posts);
searchFormEl.addEventListener('submit', handleSearchForm);

function renderPosts(posts = []) {
  const markup = posts
    .map(
      ({
        id,
        title,
        body,
        tags,
        reactions: { likes, dislikes },
        views,
        userId,
        coverImage,
      }) => {
        return `
      <li class="card border-dark mb-3" data-userid="${userId}" data-postid="${id}">
            <img
              src="${coverImage}"
              class="card-img-top"
              alt="${title}"
              height="300"
            />
            <div class="card-body">
              <h5 class="card-title">${title}</h5>
              <hr />
              <div class="card-meta mb-3">
                <div class="card-meta-tags">
                  <p class="m-0 text-black-50 fw-lighter">
                    <i class="bi bi-tag"></i>
                  </p>
                  <ul class="tags-list">
                  ${createTags(tags)}
                  </ul>
                </div>

                <ul class="card-meta-likes">
                  <li class="text-black-50 fw-lighter">
                    <i class="bi bi-hand-thumbs-up"></i> <small>${likes}</small>
                  </li>
                  <li class="text-black-50 fw-lighter">
                    <i class="bi bi-hand-thumbs-down"></i> <small>${dislikes}</small>
                  </li>
                </ul>

                <p class="card-meta-views m-0 text-black-50 fw-lighter">
                  <i class="bi bi-eye"></i> <small>${views}</small>
                </p>
              </div>
              <hr />
              <p class="card-text">${body}</p>
            </div>
          </li>
      `;
      },
    )
    .join('');
  postsEl.innerHTML = markup;
}

function createTags(tags = []) {
  return tags
    .map(tag => {
      return `
        <li class="border border-dark rounded-1 text-center text-black-50 fw-lighter">
          <small>${tag}</small>
        </li>`;
    })
    .join('');
}

function handleSearchForm(event) {
  event.preventDefault();
  const form = event.target;
  const {
    elements: {
      searchQuery: { value },
    },
  } = form;

  if (value.trim() === '') {
    const toast = new bootstrap.Toast(toastEl);
    toast.show();
    form.reset();
    return;
  }

  const filterPost = posts.filter(({ body }) => {
    return body.toLowerCase().includes(value.toLowerCase());
  });
  renderPosts(filterPost);

  form.reset();
}
