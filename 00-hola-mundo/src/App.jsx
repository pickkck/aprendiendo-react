import { TwitterFollowCard } from './TwitterFollowCard'
import './App.css'

export function App() {
  const formatUsername = (userName) => `@${userName}`

  const users = [
    {
      userName: 'pickkck',
      name: 'Aaron Ramirez Velazquez',
      isFollowing: true
    },
    {
      userName: 'midudev',
      name: 'Miguel Angel Duran',
      isFollowing: false  
    }
  ]

  return (
    <section className='App'>
      {
        users.map(({userName, name, isFollowing}) => (
            <TwitterFollowCard
              key={userName}
              formatUsername={formatUsername}
              userName={userName}
              initialIsFollowing={isFollowing}
            >
              {name}
            </TwitterFollowCard>
          )
        )
      }
    </section>
  )
}