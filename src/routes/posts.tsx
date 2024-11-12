import { createFileRoute, Link, Outlet } from '@tanstack/react-router'
import { postsQueryOptions } from '../api/queries/posts-query'
import { useSuspenseQuery } from '@tanstack/react-query'

export const Route = createFileRoute('/posts')({
  loader: ({ context: { queryClient } }) =>
    queryClient.ensureQueryData(postsQueryOptions),
  component: PostsComponent,
})

function PostsComponent() {
  const postsQuery = useSuspenseQuery(postsQueryOptions)
  const posts = postsQuery.data

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '50%' }}>
        <ol>
          {posts?.map((post) => (
            <div key={post.id}>
              <Link
                to="/posts/$postId"
                params={{
                  postId: post.id,
                }}
                className="block py-1 text-blue-600 hover:opacity-75"
                activeProps={{ className: 'font-bold underline' }}
              >
                <p>{post.title}</p>
              </Link>
            </div>
          ))}
        </ol>
      </div>
      <div style={{ width: '50%', paddingLeft: '20px' }}>
        <Outlet />
      </div>
    </div>
  )
}
