import type { PhotoProps } from '../../common/Types';

function SinglePhoto({photo}: PhotoProps) {
  return (
    <div className="col-md-3">
      <div className='card mb-3'>
          <div className='card-body'>
            <img src="https://placehold.co/600x400" alt={photo.title} className='img-fluid mb-2' />
            <h5>{photo.title.substring(0, 20)}</h5>
          </div>
      </div>
    </div>
  )
}

export default SinglePhoto