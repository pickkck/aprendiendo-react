import { useState } from 'react';
import PropTypes from 'prop-types';


export function TwitterFollowCard({ children, userName="unknown", formatUsername, initialIsFollowing=false }) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
  
  const imgSrc = `https://unavatar.io/${userName}`
  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img className='tw-followCard-avatar' src={imgSrc} alt="Foto de perfil del usuario" />
        <div className='tw-followCard-info'>
          <strong>{children}</strong>
          <span className='tw-followCard-username'>{formatUsername(userName)}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className='tw-followCard-text'>{text}</span>
          <span className='tw-followCard-stopFollow'>Dejar de Seguir</span>
        </button>
      </aside>
    </article>
  )
} 

TwitterFollowCard.propTypes = {
  userName: PropTypes.string,
  initialIsFollowing: PropTypes.bool,
  formatUsername: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};