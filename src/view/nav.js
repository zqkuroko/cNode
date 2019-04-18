import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Link, withRouter } from "react-router-dom";

class Nav extends Component {
	constructor(props) {
		super(props);
		let now = this.getNow(props.location);
		this.state ={
			now
		}
	}
	getNow (location) {
		let now = location.pathname.split("/")[1];
		return now;
	}
	shouldComponentUpdate(nextProps) {
		let now = this.getNow(nextProps.location);
		if (now !== this.state.now) {
			this.setState({
				now
			});
			return false;
		}
		return true;
	}
	render() {
	    const { id, mode } = this.props;
	    return (
			<Menu id={id} mode={mode} selectedKeys={[this.state.now]}>
				<Menu.Item key="index">
					<Link to="/index/all"><Icon type="home" />首页</Link>
				</Menu.Item>
				<Menu.Item key="book">
					<Link to="/book"><Icon type="book" />教程</Link>
				</Menu.Item>
				<Menu.Item key="about">
					<Link to="/about"><Icon type="info-circle-o"/>关于</Link>
				</Menu.Item>
			</Menu>
	    )
	}
}

export default withRouter(Nav);