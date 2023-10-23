import { useQuery } from '@apollo/client';

import  from ''; // add variable and path
import  from ''; // add variable and path

import { QUERY_POSTS } from '../utils/queries'; // change to POST

const Home = () => {
  const { loading, data } = useQuery(QUERY_POSTS);
  const posts = data?.posts || [];

// change ThoughtForm and Thoughtlist to POST
  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          <PostForm />
        </div>
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <PostList
              posts={posts}
              title="Your host with the post(s)..."
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
