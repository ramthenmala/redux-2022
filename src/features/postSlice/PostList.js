import { useSelector } from 'react-redux';
import AddPost from './AddPost';
import { selectAllPosts } from './postsSlice';

import PostAuthor from './PostAuthor';

const PostList = () => {
  const posts = useSelector(selectAllPosts);

  const renderedPost = posts.map((post) => (
    <article key={post?.title}>
      <h2>{post?.title}</h2>
      <p>{post?.content}</p>
      <p className="postCredit">
        <PostAuthor userId={post.userId} />
      </p>
    </article>
  ));

  return (
    <>
      <AddPost />
      <div>PostList</div>
      {renderedPost}
    </>
  );
};

export default PostList;
