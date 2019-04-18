import React, { Component } from "react";
import { Link } from "react-router-dom";
import { List, Avatar } from "antd";
import TxtTag from "../txtTag";
import { connect } from "react-redux";
import { actionCreators } from "../../store/list";

class IndexList extends Component {
	constructor(props) {
		super(props);
		this.isStart = true;
	};
    render() {
		const { loading, data } = this.props;
		const pagination = {
			current: this.props.page,
			pageSize: 10,
			total: 1000,
			onChange: ((current)=> {
				const { page } = this.props;
				if (current !== page) {
					this.props.getListData(this.props.tab, current);
				}
			})
		}
      	return (
				<List 
					loading={loading}
					dataSource={data}
					pagination={this.isStart ? false: pagination}
     	 		renderItem={item=>(<List.Item 
        	actions={["回复" + item.reply_count, "访问" + item.visit_count]}
        		key={item.id}>
     	 		<List.Item.Meta
						avatar={<Avatar src={item.author.avatar_url} />}
						title={
							<div>
								<TxtTag data={item}/>
								<Link to={"/details/" + item.id}>{item.title}</Link>
							</div>
						}
						description={<p>
							<Link to={"/user/" + item.author.loginname}>
								{item.author.loginname}
							</Link>
							发表于: {item.create_at.split("T")[0]}
						</p>}
					/>
				</List.Item>)}>
			</List>
			)
	 }
	 componentDidMount() {
		this.props.getListData(this.props.tab, this.props.page);
	 }
	 shouldComponentUpdate(nextProps, nextState) {
		this.isStart = false;
		if (this.props.tab !== nextProps.tab) {
			this.props.getListData(nextProps.tab, 1);
			return false;
		}
		return true;
	 }
}

const mapStateToProps = (state) => ({
	loading: state.list.loading,
	data: state.list.data,
	page: state.list.page
});

const mapDispatchToProps = (dispatch) => ({
	getListData (tab, page) {
		dispatch(actionCreators.getListData(tab, page));
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(IndexList);