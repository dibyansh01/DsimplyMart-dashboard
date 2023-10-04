"use client"

import { ColumnDef } from "@tanstack/react-table"

import { CellAction } from "./cell-action"

export type CategoryColomn = {
  id: string
  name: string
  billboardLabel: string
  createdAT: string
}

export const columns: ColumnDef< CategoryColomn>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({row}) => row.original.name
  },
  {
    accessorKey: "billboard",
    header: "Billboard",
    cell: ({row}) => row.original.billboardLabel
  },
  {
    accessorKey: "createdAt",
    header: "Date",
    cell: ({row}) => row.original.createdAT
  },
  {
    id: "actions",
    cell: ({row}) => <CellAction data = {row.original} />
  }
]
