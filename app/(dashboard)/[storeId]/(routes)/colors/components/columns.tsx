"use client"

import { ColumnDef } from "@tanstack/react-table"

import { CellAction } from "./cell-action"

export type ColorColomn = {
  id: string
  name: string
  value: string
  createdAT: string
}

export const columns: ColumnDef<ColorColomn>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "value",
    header: "Value",
    cell: ({ row }) => (
      <div className="flex item-center gap-x-2">
        {row.original.value}
        <div 
            className="h-6 w-6 rounded-full border"
            style={{backgroundColor: row.original.value}} />
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
