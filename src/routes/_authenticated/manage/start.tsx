import { createFileRoute } from '@tanstack/react-router'
import Star from '@/features/manage/start'

export const Route = createFileRoute('/_authenticated/manage/start')({
  component: Star,
})
