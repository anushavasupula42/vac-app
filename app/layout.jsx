import '@styles/global.css';
import Nav from '@components/Nav';
import Provider from '@components/Provider';
import LeaveManagement from '@components/LeaveManagement';
export const metadata={
    title: "SSP-DRAFTS",
    description: 'Discover & Share AI Promts'
}

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <div className='main'>
                <div className='gradient'/>
            </div>
            <main className='app'>
                <Nav/>
                {children}

            </main>


        </body>

    </html>
  )
}

export default RootLayout