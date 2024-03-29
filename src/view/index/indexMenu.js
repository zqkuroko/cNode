import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Menu } from "antd";
import tab from "../tab";

class IndexMenu extends Component {
	constructor (props) {
		super(props);
		let now = this.getNow(props.location);
		this.state = {
			now
		}
	}
	getNow(location) {
		let now = location.pathname.split('/')[2]
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
				{
					tab.map((item)=>{
						if (!item.isIndex) {return false}
						return (
							<Menu.Item key={item.tab}>
								<Link to={"/index/" +item.tab}>{item.txt}</Link>
							</Menu.Item>
						)
					})
				}
      </Menu>
	  );
	}
}

 export default withRouter(IndexMenu);