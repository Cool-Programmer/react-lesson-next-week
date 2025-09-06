import type { Photos } from '../common/Interfaces';

import SinglePhoto from '../components/Photo/SinglePhoto';

function Posts({photos}: {photos: Photos[]}) {
    return (
        <div className="container">
            <div className="row">
                {
                    photos.map((photo) => (
                        <SinglePhoto key={photo.id} photo={photo} />
                    ))
                }
            </div>
        </div>
    )
}

export default Posts