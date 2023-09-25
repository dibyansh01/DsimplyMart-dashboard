"use client"
import { Plus } from "lucide-react"


import { Button } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"
import { Separator } from "@/components/ui/separator"
import { useParams, useRouter } from "next/navigation"

import { BillboardColomn, columns } from "./columns"
import { DataTable } from "@/components/ui/data-table"



interface BillboardClientProps {
    data: BillboardColomn[]
}

export const BillboardClient: React.FC<BillboardClientProps> = ({
    data
})=> {

    const router = useRouter();
    const params = useParams();

    return (
        <>
        <div className="flex items-center justify-between">
            <Heading 
            title={`Billboards (${data.length})`}
            description="Managed Billboard for your store" />
            <Button onClick={()=>router.push(`/${params.storeId}/billboards/new`)}>
                <Plus className="mr-2 h-4 w-4"/>
                Add New
            </Button>
        </div>
        <Separator />
        <DataTable searchKey="label" columns={columns} data={data} />
        
        </>
    )
}