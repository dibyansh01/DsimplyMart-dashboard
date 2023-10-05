"use client"

import { ColumnDef } from "@tanstack/react-table"

import { CellAction } from "./cell-action"

export type SizeColomn = {
  id: string
  name: string
  value: string
  createdAT: string
}

export const columns: ColumnDef<SizeColomn>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "value",
    header: "Value",
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