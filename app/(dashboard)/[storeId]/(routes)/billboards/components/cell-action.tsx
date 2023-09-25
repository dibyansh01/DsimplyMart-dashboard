"use client"

import { BillboardColomn } from "./columns"

interface CellActionProps {
    data: BillboardColomn;
}


export const CellAction: React.FC<CellActionProps> = (
    {
        data
    }
)=>{
    return (
        <div>
            Action
        </div>
    )
}