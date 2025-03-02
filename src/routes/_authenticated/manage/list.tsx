import { createFileRoute } from '@tanstack/react-router'
import ManageList from '@/features/manage/list'

export const Route = createFileRoute('/_authenticated/manage/list')({
  component: ManageList,
})
