import React from 'react'

import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuCheckboxItem,
} from '@/components/ui/dropdown-menu'
import { FishIcon, CaravanIcon, CrosshairIcon, ChevronDownIcon } from '@/components/icons/icons'
import { Button } from '@/components/ui/button'

/**
 * Component renders dropdown menu. Filters listings by activities.
 * Uses DropdownMenu component parts to make cohesive UI element.
 */
function FilterDropdown() {
    // TODO: Filter search results based on activities
    // **Did not work on this task**
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                    Filter <ChevronDownIcon className="w-4 h-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
                <DropdownMenuLabel>Activities</DropdownMenuLabel>
                <DropdownMenuCheckboxItem checked>
                    <CrosshairIcon className="w-4 h-4 mr-2" />
                    Hunting
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem checked>
                    <CaravanIcon className="w-4 h-4 mr-2" />
                    Camping
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem checked>
                    <FishIcon className="w-4 h-4 mr-2" /> Fishing
                </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default FilterDropdown;