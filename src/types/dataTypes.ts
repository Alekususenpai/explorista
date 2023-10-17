export type dataTypes = {
          id: number;
          title: string;
          description: string;
          price: number;
          coverImg: string;
          stats: {
                    rating: number;
                    reviewCount: number;
          };
          location: string;
          openSpots: number;
          styling: string;
}