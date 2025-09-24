import { useContext } from 'react';

import type { Photos } from '../common/Interfaces';

import SinglePhoto from '../components/Photo/SinglePhoto';

import { ContentContext } from '../App';

function Posts() {

    const contextVal : any = useContext(ContentContext);

    const photos: Photos[] = contextVal.photos;

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