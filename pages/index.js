import Link from 'next/link'

function Home() {
  return (
    <>
      <h1 className='text-center text-5xl'> Welcome to New Next  app </h1>
      <div className='flex  mt-24 justify-evenly'>
       
      <Link className='text-3xl' href='/users'>
        Users
      </Link>
    
      <Link className='text-3xl' href='/posts'>
       Posts
      </Link>
     
      </div>
    </>
  )
}

export default Home