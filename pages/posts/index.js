import Link from 'next/link'

function PostList({ posts }) {
  return (
    <>
      <h1 className='text-5xl text-center underline'>List of Posts</h1>
      {posts.map(post => {
        return (
          <div className='m-4 p-4 text-3xl ' key={post.id}>
            <Link href={`posts/${post.id}`}>
              <h2>
                {post.id} {post.title}
              </h2>
            </Link>
            <hr />
          </div>
        )
      })}
    </>
  )
}

export default PostList

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await response.json()

  return {
    props: {
      posts: data.slice(0, 5)
    }
  }
}