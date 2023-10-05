"use client"

import { ColumnDef } from "@tanstack/react-table"

import { CellAction } from "./cell-action"

export type ProductColomn = {
  id: string;
  name: string;
  price: string;
  size: String;
  category: string;
  color: string;
  isFeatured: boolean;
  isArchived: boolean;
  createdAt: string;
}

export const columns: ColumnDef<ProductColomn>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "isArchived",
    header: "Archived",

  },
  {
    accessorKey: "isFeatured",
    header: "Featured",

  },
  {
    accessorKey: "price",
    header: "Price",

  },
  {
    accessorKey: "category",
    header: "Category",

  },
  {
    accessorKey: "size",
    header: "Size",
  },
  {
    accessorKey: "color",
    header: "Color",
    cell: ({row}) => (
      <div className="flex flex-center gap-x-2">
        {row.original.color}
        <div className="h-6 w-6 rounded-full border"
              style={{backgroundColor: row.original.color}} />
      </div>
    )

  },
  
  {
    accessorKey: "createdAT",
    header: "Date",
  },
  {
    id: "actions",
    cell: ({row}) => <CellAction data = {row.original} />
  }
]