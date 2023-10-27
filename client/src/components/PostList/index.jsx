import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';

import { ADD_POST_LIKE, REMOVE_POST_LIKE } from '../../utils/mutations'

const PostList = ({
  posts,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  if (!posts.length) {
    return <h3>No Posts Yet</h3>;
  }

  const [ addPostLike, { error }] = useMutation(ADD_POST_LIKE,); // create const for removepostlike

  function handlePostLike(postId) {
    addPostLike({ variables: { postId } }); // create a handlepostunlike
  }

  return (
    <div>
      {showTitle && <h3>{title}</h3>}
      {posts &&
        posts.map((post) => (
          <div key={post._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {showUsername ? (
                <Link
                  className="text-light"
                  to={`/profiles/${post.postAuthor}`}
                >
                  {post.postAuthor} <br />
                  <span style={{ fontSize: '1rem' }}>
                    had this post on {post.createdAt}
                  </span>
                </Link>
              ) : (
                <>
                  <span style={{ fontSize: '1rem' }}>
                    You had this post on {post.createdAt}
                  </span>
                </>
              )}
            </h4>
            <div className="card-body bg-light p-2">
              <p>{post.postText}</p>
            </div>
            <button
              className="btn btn-primary btn-block btn-squared"
              onClick={() => handlePostLike(post._id)}
            >
              Like
            </button>
            <span> ❤️: {post.likesCount}</span>
          </div>
        ))}
    </div>
  );
};

export default PostList;
