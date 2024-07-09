'use client'

// Import Libraries
import { useState } from 'react';

// Import Components
import { GetListings } from '@/services/get-listings';
import ListingCard from '@/components/ui/listing-card';
import { SearchInput } from '@/components/ui/search-input'
import { NoListings } from '@/components/ui/no-listings';
import { Footer } from '@/components/ui/footer';

// Import Logo and Types
import { Logo } from '@/components/icons/logo';
import { Clippy } from '@/components/icons/clippy';
import { SearchParams } from '@/types/listing-types';


// === MAIN PAGE ===
export default function Home() {

  // Basic Parameters for GetListings hook
  const [searchParams, setSearchParams] = useState<SearchParams>({
    page: 1,
    limit: 10,
    search: '',
    sortBy: 'price',
    sortOrder: 'asc',
    activity: 'Camping'
  });

  // Unpack listings, loading, and error from GetListings hook
  const { listings, loading, error } = GetListings(searchParams);

  // Render Main Content
  return (
    <div className="flex flex-col min-h-screen px-4">
      <main className="flex flex-col items-center pt-12 flex-grow">
        <Clippy />
        <Logo />
        <SearchInput setSearchParams={setSearchParams} />
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : listings.length > 0 ? (
          listings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))
        ) : (
          <NoListings />
        )}
      </main>
      <Footer />
    </div>
  );
}