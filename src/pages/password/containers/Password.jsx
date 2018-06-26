import React from 'react'
import Layout from '../../../shared/components/Layout.jsx'
import Chance from 'chance'

const Main = class extends React.Component {
  state = {
    password: ''
  }

  generatePassword = () => {
    const chance = new Chance()
    const password = chance.string({length: 8})

    this.setState({password})
  }

  render () {
    return (
      <Layout isActive='Password'>
        <div className='container'>
          <p>{this.state.password}</p>
          <button className='button' onClick={this.generatePassword}>Generate</button>
        </div>
      </Layout>
    )
  }
}

export default Main
