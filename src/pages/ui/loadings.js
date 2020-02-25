import React from 'react';
import { Card, Button, Spin, Icon, Alert } from 'antd';
import './ui.less';

export default class Notice extends React.Component {

    render() {
        const icon = <Icon type="plus" style={{ fontSize: 24 }} />
        return (
            <div>
                <Card title="Spin用法" className="card-wrap">
                    <Spin size="small" />
                    <Spin style={{ margin: '0 10px' }} />
                    <Spin size="large" />
                    <Spin indicator={icon} style={{ marginLeft: 10 }} spinning={true} />
                </Card>
                <Card title="内容遮罩" className="card-wrap">
                    <Alert
                        message="React"
                        description="欢迎来到React"
                        type="info"
                    ></Alert>
                    <Spin>
                        <Alert
                            message="React"
                            description="欢迎来到React"
                            type="warning"
                            style={{ margin: '10px 0' }}
                        ></Alert>
                    </Spin>
                    <Spin tip="加载中">
                        <Alert
                            message="React"
                            description="欢迎来到React"
                            type="warning"
                            style={{ margin: '10px 0' }}
                        ></Alert>
                    </Spin>
                </Card>
            </div>
        );
    }
}