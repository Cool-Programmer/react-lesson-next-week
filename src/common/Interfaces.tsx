interface Posts {
    userId: number;
    id: number;
    title: string;
    body: string;
    thumbnailUrl: string;
}

interface Photos {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

export type { Posts, Photos };