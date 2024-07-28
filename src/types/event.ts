export interface Event {
    id: number;
    title: string;
    description: string;
    price: number;
    coverImg: string;
    stats: {
        rating: number;
        reviewCount: number;
    };
    openSpots: number;
}
