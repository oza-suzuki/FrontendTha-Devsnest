import React, { Component } from 'react'

class LifecycleB extends Component {
	constructor(props) {
        console.log(props);
		super(props)
		this.state = {
			name: 'Devsnest'
		}
        console.log(this.state);
		console.log('LifecycleB constructor')
	}

	static getDerivedStateFromProps(props, state) {
		console.log('LifecycleB getDerivedStateFromProps')
		return null
	}

	componentDidMount() {
		console.log('LifecycleB componentDidMount')
	}

	shouldComponentUpdate() {
		console.log('LifecycleB shouldComponentUpdate')
		return true
	}

	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log('LifecycleB getSnapshotBeforeUpdate')
    return null
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('LifecycleB componentDidUpdate')
	}

	changeState = () => {
		this.setState({
			name: 'The Devsnest'
		})
        
	}

	render() {
		console.log('LifecycleB render')
		return (
			<div>
				LifecycleB
			</div>
		)
	}
}

export default LifecycleB;