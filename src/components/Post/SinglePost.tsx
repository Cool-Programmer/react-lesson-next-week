import type { PostProps } from '../../common/Types';

function SinglePost({post}: PostProps) {
  return (
    <div className="col-md-3">
      <div className='card mb-3'>
          <div className='card-body'>
            <img src={post.thumbnailUrl} alt={post.title} className='img-fluid mb-2' />
            <h5>{post.title.substring(0, 20)}</h5>
            <p className='mb-0'>
                {post.body.substring(0, 100)}...
            </p>
          </div>
      </div>
    </div>
  )
}

export default SinglePost