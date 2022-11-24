const isIntersecting = (entry) => {
  return entry.isIntersecting;
};

const loadPicture = (entry) => {
  const node = entry.target;
  console.log(node);

  node.src = node.dataset.src;

  observer.unobserve(node);
};

const observer = new IntersectionObserver((entries) => {
  entries
    .filter(isIntersecting)
    .forEach(loadPicture)
});

export const registerPicture = (imagen) => {
  observer.observe(imagen);
};