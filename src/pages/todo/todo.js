import 'bulma/css/bulma.css'
import React from 'react'
import ReactDOM from 'react-dom'
import Todo from './containers/Todo'

const mountNode = document.getElementById('todo-main-container')
ReactDOM.render(<Todo />, mountNode)
