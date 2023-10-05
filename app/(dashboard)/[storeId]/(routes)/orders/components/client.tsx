"use client"

import { DataTable } from "@/components/ui/data-table"
import { Heading } from "@/components/ui/heading"
import { Separator } from "@/components/ui/separator"

import { OrderColomn, columns } from "./columns"





interface OrderClientProps {
    data: OrderColomn[]
}

export const OrderClient: React.FC<OrderClientProps> = ({
    data
})=> {
    return (
        <>
            <Heading 
            title={`Orders (${data.length})`}
            description="Manage orders for your store" />
        <Separator />
        <DataTable searchKey="products" columns={columns} data={data} />
              
        </>
    )
}