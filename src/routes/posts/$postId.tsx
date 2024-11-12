import { createFileRoute } from '@tanstack/react-router'
import { postQueryOptions } from '../../api/queries/posts-query'
import { useSuspenseQuery } from '@tanstack/react-query'

export const Route = createFileRoute('/posts/$postId')({
  loader: ({ context: { queryClient }, params: { postId } }) => {
    return queryClient.ensureQueryData(postQueryOptions(postId))
  },
  component: PostComponent,
})

function PostComponent() {
  const postId = Route.useParams().postId
  const { data: post } = useSuspenseQuery(postQueryOptions(postId))

  if (!post) return <div>Loading...</div>

  return (
    <div className="space-y-2">
      <h4 className="text-xl font-bold underline">{post.title}</h4>
      <div className="text-sm">{post.body}</div>
    </div>
  )
}
