import { NextResponse } from 'next/server';

export async function GET(request: Request) {

    // Get query parameters from request URL, then individual ones
    const { searchParams } = new URL(request.url);
    const page = searchParams.get('page') || '1';
    const limit = searchParams.get('limit') || '10';
    const search = searchParams.get('search');
    const sortBy = searchParams.get('sortBy') || 'price';
    const sortOrder = searchParams.get('sortOrder') || 'asc';
    const activity = searchParams.get('activity');

    // Build query params object to append to API request URL
    const params = new URLSearchParams({
        page,
        limit,
        ...(search && { search }),
        ...(sortBy && { sortBy }),
        ...(sortOrder && { sortOrder }),
        ...(activity && { activity }),
    });

    // Construct full API URL with query parameters
    const apiUrl = `https://takehome-api.vercel.app/listings?${params.toString()}`;

    try {
        // Fetch listings from external API
        const response = await fetch(apiUrl);

        // Throw error if not OK
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Parse data into JSON then return
        const data = await response.json();
        return NextResponse.json(data);
    }
    // Log any errors from fetch operation
    catch (error) {
        console.error('Error fetching listings:', error);
        return NextResponse.json({ error: 'Error fetching listings' }, { status: 500 });
    }
}