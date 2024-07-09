import React from 'react';
import { Button } from '@/components/ui/button'
import { FishIcon, CaravanIcon, CrosshairIcon } from '@/components/icons/icons'

/**
 * Functional component renders label for activity.
 * Displays activity type and enables onClick action.
 */
function ActivityLabel({
    type,
    onClick,
}: {
    type: Activity
    onClick?: () => void
}) {
    // Selects appropriate icon based on activity type
    return (
        <Button
            onClick={onClick}
            className="bg-muted rounded-full text-xs text-muted-foreground hover:bg-gray-300 flex items-center gap-1"
        >
            {type === 'Fishing' ? (
                <FishIcon className="w-4 h-4" />
            ) : type === 'Camping' ? (
                <CaravanIcon className="w-4 h-4" />
            ) : (
                <CrosshairIcon className="w-4 h-4" />
            )}
            {type}
        </Button>
    )
}

export default ActivityLabel;