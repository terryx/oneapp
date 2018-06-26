import React from 'react'

const links = [
  {
    name: 'Todo',
    url: '/todo.html'
  },
  {
    name: 'Password',
    url: '/password.html'
  }
]

class Layout extends React.Component {
  static defaultProps = {
    isActive: ''
  }

  render () {
    return (
      <div id='wrapper' className='container is-fullhd'>
        <div className='columns'>
          <div className='column is-one-quarter'>
            <aside className='menu'>
              <p className='menu-label'>General</p>
              <ul className='menu-list'>
                {links.map(link => {
                  const isActive = this.props.isActive === link.name ? 'is-active' : ''
                  return (<li key={link.name}><a href={link.url} className={isActive}>{link.name}</a></li>)
                })}
              </ul>
            </aside>
          </div>
          <div className='column'>{this.props.children}</div>
        </div>
      </div>
    )
  }
}

export default Layout
