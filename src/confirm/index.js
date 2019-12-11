import React from 'react'

const confirmFuncComp = (Comp) => {
  class ConfirmComp extends Comp {
    constructor (props) {
      super(props)
      this.state = {
        isMount: false
      }
    }

    render() {
			return (
				<div>
					{super.render()}
					<div>验证是否挂载</div>
				</div>
			);
		}

    componentDidMount () {
      this.setState({
        isMount: true
      })
      setTimeout(() => {
        super.componentDidMount()
      })
    }

    confirm () {
      if (this.state.isMount) {
        return Promise.resolve('成功挂载')
      }
    }
  }

  return ConfirmComp
}

export default confirmFuncComp
