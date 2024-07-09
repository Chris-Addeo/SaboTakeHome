// Type definitions for listing and location structures
export interface Listing {
    id: string;
    title: string;
    location: Location;
    price: number;
    rating: number;
    activity: Activity;
    imageUrl: string;
}

export interface Location {
    state: string;
    city: string;
}

export type Activity = 'Hunting' | 'Camping' | 'Fishing';


export interface SearchParams {
    page: number;
    limit: number;
    search: string;
    sortBy: 'price' | 'rating';
    sortOrder: 'asc' | 'desc';
    activity: 'Camping' | 'Fishing' | 'Hunting';
}