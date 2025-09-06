import ArticleIcon from '@mui/icons-material/Article';
import PhotoIcon from '@mui/icons-material/Photo';

import SinglePost from '../components/Post/SinglePost';
import SinglePhoto from '../components/Photo/SinglePhoto';

import type { Posts, Photos } from '../common/Interfaces';

type HomePageProps = {
  posts: Posts[];
  photos: Photos[];
};


function HomePage({ posts, photos }: HomePageProps) {
  let homepagePosts = posts.slice(0, 4);
  let homepagePhotos = photos.slice(0, 4);

  return (
    <div className="container">
      <div className="mb-3">
        <h2 className='heading'>
          <ArticleIcon fontSize='large'/>
          Articles
        </h2>

        <div className="container">
          <div className="row">
              {
                  homepagePosts.map((post) => (
                      <SinglePost key={post.id} post={post} />
                  ))
              }
          </div>
        </div>
      </div>

      <div className="mb-3">
        <h2 className='heading'>
          <PhotoIcon fontSize='large'/>
          Photos
        </h2>

        <div className="container">
          <div className="row">
              {
                  homepagePhotos.map((photo) => (
                      <SinglePhoto key={photo.id} photo={photo} />
                  ))
              }
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage