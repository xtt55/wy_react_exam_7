import React from 'react'
import ReactDOM from 'react-dom'
import confirmFuncComp from './confirm/index.js'

@confirmFuncComp
class App extends React.Component {
  render () {
    return <div>comp</div>
  }

  async componentDidMount () {
    const res = await this.confirm('确认删除吗')
    if (res) {
      console.log('是')
    } else {
      console.log('否')
    }
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
