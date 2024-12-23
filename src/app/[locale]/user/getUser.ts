type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const getPosts = async () => {
  const res: PostType[] = await fetch(
    'https://jsonplaceholder.typicode.com/posts',
  ).then((res) => res.json());

  return res;
};
