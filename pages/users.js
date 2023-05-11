import User from '../components/user'

function UserList({ users }) {
  return (
    <>
      <h1 className='text-5xl text-center underline'>List of users</h1>
      {users.map(user => {
        return (
          <div className='border-4 border-black text-center m-4 p-6'>
          <div className=' text-3xl ' key={user.id}>
            <User user={user} />
          </div>
          </div>
        )
      })}
    </>
  )
}

export default UserList

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()
  //   console.log(data)

  return {
    props: {
      users: data
    }
  }
}