import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { Heading } from 'theme-ui'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <Heading sx={{ color: 'red' }}>HomePage</Heading>
      <p>
        Find me in <code>./web/src/pages/HomePage/HomePage.tsx</code>
      </p>
      <p>
        My default route is named <code>home</code>, link to me with `
        <Link to={routes.home()}>Home</Link>`
      </p>
    </>
  )
}

export default HomePage
