import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { StarIcon } from '@/components/icons/icons';
import { Listing } from '@/types';
import ActivityLabel from '@/services/activity-label';

export function ListingCard({ listing }: { listing: Listing }) {
    return (
        <Card className="w-full max-w-[500px] rounded-xl overflow-hidden transition-all hover:shadow-sm relative">
            <Link href="#" className="block" prefetch={false}>
                <Image
                    src={listing.imageUrl}
                    alt={listing.title}
                    width={400}
                    height={240}
                    className="w-full h-60 object-cover"
                    priority
                />
            </Link>
            <CardContent className="p-4 sm:p-6">
                <div className="flex justify-between items-start mb-2">
                    <div>
                        <h3 className="text-lg font-semibold">{listing.title}</h3>
                        <p className="text-sm text-muted-foreground">
                            {listing.location.city}, {listing.location.state}
                        </p>
                        <div className="flex items-center gap-2 mt-2 py-3">
                            <ActivityLabel type={listing.activity} />
                        </div>
                    </div>
                    <div className="flex items-center gap-1 text-primary">
                        <StarIcon className="w-4 h-4" />
                        <span className="font-medium">{listing.rating}</span>
                    </div>
                </div>
                <div className="flex justify-between items-end">
                    <p className="text-lg font-semibold">
                        ${listing.price}{' '}
                        <span className="text-sm font-normal text-muted-foreground">
                            /night
                        </span>
                    </p>
                </div>
            </CardContent>
        </Card>
    );
}

export default ListingCard;