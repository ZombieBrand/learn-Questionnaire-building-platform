import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_authenticated/question/$questionId/edit',
)({
  component: RouteComponent,
})
function RouteComponent() {
  const { questionId } = Route.useParams()
  return <div>Post {questionId}</div>
}
