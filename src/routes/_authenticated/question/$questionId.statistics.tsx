import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_authenticated/question/$questionId/statistics',
)({
  component: RouteComponent,
})

function RouteComponent() {
  const { questionId } = Route.useParams()
  return <div>Hello "/_layout/question/statistics"!,{questionId}</div>
}
