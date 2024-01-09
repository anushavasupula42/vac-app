import Feed from '@components/Feed';



const Home = () => {
  return (
    
    <div>
        <div className='flex items-center'>
            <div className='w-3/4'>
                <p className='text-green-700 text-3xl'> Hi Uday!</p>
                <p className=' text-5xl'> Welcome to self service portal!</p>

            </div>

            <div className='w-1/4'>
                <img src="https://www.inogic.com/wp-content/uploads/2023/02/customer-servifdes.png"  className='w-full h-auto'/>

            </div>

        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <p className=' text-3xl'>Our Services</p>
        <br/>
        <div className='flex items-center'>
            <div className='w-1/3'>
                <button type='button' className='outline_btn'>Leave Request</button>

            </div>
            <div className='w-1/3'>
                <button type='button' className='outline_btn'>Attendance</button>

            </div>
            <div className='w-1/3'>
                <button type='button' className='outline_btn'>Application Status</button>

            </div>

        </div>

    </div>

    

    

    )
}

export default Home