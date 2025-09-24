import { useContext } from 'react';
import type { Posts } from '../common/Interfaces';

import SinglePost from '../components/Post/SinglePost';
import { ContentContext } from '../App';

function Posts() {
    const contextVal : any = useContext(ContentContext);
    const posts: Posts[] = contextVal.posts;

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