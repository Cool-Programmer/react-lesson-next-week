type GlobalProps = {
  logoCDNUrl: string;
  menuItems: object;
};

type CTAProps = {
  buttonText: string;
  buttonDestination: string;
}

type HeaderProps = {
  logoCDNUrl: string;
  menuItems: object;
};

// Ask if ok
type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
    thumbnailUrl: string;
}

type PostProps = {
    post: Post;
};


// Ask if ok
type Photo = {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

type PhotoProps = {
    photo: Photo;
}

export type { GlobalProps, CTAProps, HeaderProps, PostProps, Post, PhotoProps, Photo };