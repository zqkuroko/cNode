import React, { Component } from "react";
import { Avatar, Row, Col } from "antd";
import UserList from "./userList";
import { connect } from "react-redux";
import { actionCreators } from "../../store/user";

class User extends Component {
	render() {
		let { loading, data } = this.props;
		let { avatar_url, loginname, score, create_at, recent_topics, recent_replies } = data;
		return (<div className="wrap">
			<Avatar src={avatar_url} className = "userAvatar"/>
			<Row className="userInfo">
				<Col md={8}>
					用户名:<a>{loginname}</a>
				</Col>
				<Col md={8}>
					积分:<a>{score}</a>
				</Col>
				<Col md={8}>
					注册时间:<a>{create_at.split("T")[0]}</a>
				</Col>
			</Row>
			<UserList loading={loading} title="最近创建的话题" data={recent_topics}/>
			<UserList loading={loading} title="最近回复的话题" data={recent_replies}/>
		</div>)
	}
	componentDidMount() {
		let id = this.props.match.params.id;
		this.props.getUserData(id);
	}
	shouldComponentUpdate (nextProps) {
		let id = this.props.match.params.id;
		let nextId = nextProps.match.params.id;
		if (id !== nextId) {
			this.props.getUserData(nextId);
			return false;
		}
		return true;
	}
}

const mapState = (state) => ({
	loading: state.user.loading,
	data: state.user.data
})

const mapDispatch = (dispatch) => ({
	getUserData(id) {
		dispatch(actionCreators.getUserData(id));
	}
})

export default connect(mapState, mapDispatch)(User);