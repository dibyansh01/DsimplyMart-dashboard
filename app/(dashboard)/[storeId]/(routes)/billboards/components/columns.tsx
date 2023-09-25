"use client"

import { ColumnDef } from "@tanstack/react-table"

import { CellAction } from "./cell-action"

export type BillboardColomn = {
  id: string
  label: string
  createdAT: string
}

export const columns: ColumnDef<BillboardColomn>[] = [
  {
    accessorKey: "label",
    header: "label",
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
