import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { Heading } from 'theme-ui'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <Heading sx={{ color: 'red' }}>Redwood Blog</Heading>

      <nav>
        <ul>
          <li>
            <Link to={routes.about()}>About</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default HomePage
