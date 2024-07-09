import React from 'react';

/**
 * Component displayed when no listings are available.
 * Provides simple message and suggests actions to user.
 */
export function NoListings() {
    return (
        <div className="text-center">
            <h3 className="text-xl">No listings available</h3>
            <p className="opacity-50">Try removing filters and searching again</p>
        </div>
    )
};