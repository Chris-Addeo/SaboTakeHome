'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { SearchIcon } from '@/components/icons/icons'
import FilterDropdown from '@/components/ui/filter-dropdown';

// Define props for SearchInput component
interface SearchInputProps {
    setSearchParams: React.Dispatch<React.SetStateAction<{
        page: number;
        limit: number;
        search: string;
        sortBy: 'price' | 'rating';
        sortOrder: 'asc' | 'desc';
        activity: 'Camping' | 'Fishing' | 'Hunting';
    }>>;
}

// Define SearchInput component
export function SearchInput({ setSearchParams }: SearchInputProps) {

    // State to hold the search query
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <div className="relative w-full max-w-lg mx-auto mb-3">
            <div className="flex items-center">
                <div className="relative flex-grow">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <SearchIcon className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <Input
                        type="search"
                        placeholder="Search"
                        className="w-full rounded-l-md border border-muted px-4 py-6 pl-10 shadow-sm text-md transition-colors focus:border-primary focus:ring-primary"

                        // Connect input value to searchQuery state
                        value={searchQuery}

                        // Update searchQuery state on input change
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center gap-2 pr-2">

                        {/* Dropdown for additional filters */}
                        <FilterDropdown />
                        <Button

                            // Update search parameters on search click
                            onClick={() => {
                                setSearchParams((prevParams) => ({
                                    ...prevParams,
                                    search: searchQuery,
                                }));
                            }}
                        >
                            Search
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}