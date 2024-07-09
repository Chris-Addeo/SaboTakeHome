import { Listing } from '@/types';
/**
 * Validates each listing to ensure no fields are undefined or null.
 * Returns only listings that have all fields properly defined.
 */
export const validateListings = (listings: Listing[]): Listing[] => {
    return listings.filter(listing => {
        // Check every key in the listing object to ensure it's neither null nor undefined
        return Object.keys(listing).every(key =>
            listing[key as keyof Listing] !== undefined && listing[key as keyof Listing] !== null
        );
    });

};