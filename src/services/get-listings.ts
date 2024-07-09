import { useState, useEffect } from 'react';
import { Listing } from '@/types';
import { SearchParams } from '@/types/listing-types';

// Handles API Call (Below are default listings)
export function GetListings({
    page = 1,
    limit = 10,
    search,
    sortBy = 'price',
    sortOrder = 'asc',
    activity,
}: SearchParams) {

    // States to hold fetched listings, indicate loading status, and hold any error messages
    const [listings, setListings] = useState<Listing[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchListings() {

            // Construct the query parameters based on the provided arguments
            const params = new URLSearchParams({

                // Add values if they are provided
                page: page.toString(),
                limit: limit.toString(),
                ...(search && { search }),
                ...(sortBy && { sortBy }),
                ...(sortOrder && { sortOrder }),
                ...(activity && { activity }),
            });

            try {
                // Fetch listings from API with given parameters
                const url = `/api/proxy?${params.toString()}`;

                const response = await fetch(url, {
                    method: 'GET',
                });

                // Throw error if response is not ok
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                // Convert response to JSON
                const data = await response.json();

                // Update listings state with fetched data
                setListings(data.results);
            }
            // Handle error
            catch (error) {
                console.error('Error fetching listings:', error);
                setError('Error fetching listings');
            }
            // Set loading state to false after fetch completes
            finally {
                setLoading(false);
            }
        }

        // Call fetch function
        fetchListings();

    }, // Re-run the effect if any dependency changes
        [page, limit, search, sortBy, sortOrder, activity]);

    return { listings, loading, error };
}