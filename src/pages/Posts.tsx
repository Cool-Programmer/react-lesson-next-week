import type { Posts } from '../common/Interfaces';

import SinglePost from '../components/Post/SinglePost';

function Posts({posts}: {posts: Posts[]}) {
    return (
        <div className="container">
            <div className="row">
                {
                    posts.map((post) => (
                        <SinglePost key={post.id} post={post} />
                    ))
                }
            </div>
        </div>
    )
}

export default Posts