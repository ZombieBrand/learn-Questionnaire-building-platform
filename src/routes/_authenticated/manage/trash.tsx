import { createFileRoute } from '@tanstack/react-router'
import Tasks from '@/features/manage/trash'

export const Route = createFileRoute('/_authenticated/manage/trash')({
  component: Tasks,
})
