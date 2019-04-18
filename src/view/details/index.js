import React, { Component } from "react";
import TxtDetails from "./txtDetails";
import ReplyList from "./replyList";
import { connect } from "react-redux";
import { actionCreators } from "../../store/details";

class Details extends Component {
	render() {
		const { loading, data } = this.props;
		return <div className="wrap">
			<TxtDetails
				loading={loading}
				data={data}
			/>
			<ReplyList
				loading={false}
				replies={data.replies}
				reply_count={data.reply_count}
			/>
		</div>
	}
	componentDidMount() {
		const id = this.props.match.params.id;
		this.props.getDetailsData(id);
	}
}
const mapState = (state) => ({
	loading: state.details.loading,
	data: state.details.data
});

const mapDispatch = (dispatch) => ({
	getDetailsData(id) {
		dispatch(actionCreators.getDetailsData(id));
	}
})

export default connect(mapState, mapDispatch)(Details);