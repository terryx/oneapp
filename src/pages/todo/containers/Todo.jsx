import React from 'react'
import Layout from '../../../shared/components/Layout.jsx'

class Main extends React.Component {
  render () {
    return (
      <Layout isActive='Todo'>
        <div className='container'>
          <button className='button'>Todo</button>
        </div>
      </Layout>
    )
  }
}

export default Main
