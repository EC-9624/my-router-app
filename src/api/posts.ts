import axios from "axios";

export type PostType = {
  id: string;
  title: string;
  body: string;
};

export const fetchPosts = async () => {
  try {
    const result = axios
      .get<Array<PostType>>("https://jsonplaceholder.typicode.com/posts")
      .then((r) => r.data.slice(0, 10));
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const fetchPost = async (postId: string) => {
  const post = await axios
    .get<PostType>(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then((r) => r.data)
    .catch((err) => {
      console.log(err);
    });

  return post;
};
