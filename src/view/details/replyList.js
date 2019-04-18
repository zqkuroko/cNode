import React, { Component } from "react";
import { Card, List, Avatar } from "antd";
import { Link } from "react-router-dom";

class ReplyList extends Component {
    render() {
        const { loading, replies, reply_count } = this.props;
        return (
            <Card
                loading={loading}
                title={reply_count+ "条回复"}
                type="inner">
                <List
                    className = "replyList"
                    dataSource={replies}
                    itemLayout="vertical"
                    renderItem={(item)=> (
                        <List.Item
                            key={item.id}
                            extra={item.ups.length >0 ? <span>有人{item.ups.length}绝对这个回复很赞</span> : "" }>
                            <List.Item.Meta
                                avatar={<Avatar src={item.author.avatar_url}/>}
                                description={<div>
                                    <Link to={"/user/"+ item.author.loginname}>{item.author.loginname}</Link>
                                    <span style={{marginLeft:"5px"}}>发表于:{item.create_at.split("T")[0]}</span>
                                </div>}
                             />
                             <div dangerouslySetInnerHTML={{__html: item.content}}></div>
                        </List.Item>
                    )}>
                </List>
            </Card>
        );
    }
}

export default ReplyList;