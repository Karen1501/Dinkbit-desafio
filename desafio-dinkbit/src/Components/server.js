const URL_BASE = " https://dinkbit-blog.firebaseio.com/";

const getPosts = async () => {
  const response = await fetch(`${URL_BASE}posts/.json`);
  return await response.json();
};

const getPost = async (key) => {
  const response = await fetch(`${URL_BASE}posts/${key}/.json`);
  return await response.json();
};

export { getPosts, getPost };
