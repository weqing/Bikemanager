import React from 'react';
import { Card, Table, Modal, Button, message, Badge } from 'antd';
import axios from './../../axios/index';

export default class HighTable extends React.Component {

    state = {

    }

    params = {
        page: 1
    }

    componentDidMount() {
        this.request();
    }

    //动态获取mock数据
    request = () => {
        axios.ajax({
            url: '/table/high/list',
            data: {
                params: {
                    page: this.params.page
                },
                isShowLoading: false
            }
        }).then((res) => {
            if (res.code === 0) {
                res.result.list.map((item, index) => {
                    item.key = index;
                })
                this.setState({
                    dataSource: res.result.list,
                })
            }
        })
    }

    handleChange = (pagination, filters, sorter) => {
        this.setState({
            sortOrder: sorter.order
        })
    }

    //删除操作
    handleDelete = (item) => {
        let id = item.id;
        Modal.confirm({
            title: '确认',
            content: '您确认要删除此条数据吗？',
            onOk: () => {
                message.success('删除成功');
                this.request();
            }
        })
    }

    render() {
        const columns = [
            {
                title: 'id',
                dataIndex: 'id',
                width: 80,
                dataIndex: 'id',
            },
            {
                title: '用户名',
                width: 80,
                dataIndex: 'userName'
            },
            {
                title: '性别',
                dataIndex: 'sex',
                width: 80,
                render(sex) {
                    return sex === 1 ? '男' : '女'
                }
            },
            {
                title: '状态',
                width: 80,
                dataIndex: 'state',
                render(state) {
                    let config = {
                        '1': '咸鱼一条',
                        '2': '风流倜傥',
                        '3': '垃圾学渣',
                        '4': '学术垃圾',
                        '5': '浪里小白龙',
                        '6': '创业者'
                    }
                    return config[state];
                }
            },
            {
                title: '爱好',
                width: 80,
                dataIndex: 'interest',
                render(state) {
                    let config = {
                        '1': '游泳',
                        '2': '打篮球',
                        '3': '踢足球',
                        '4': '爬山',
                        '5': '摄影',
                        '6': '唱k',
                        '7': '健身',
                        '8': '旅行',
                        '9': '烹饪',
                    }
                    return config[state];
                }
            },
            {
                title: '生日',
                width: 120,
                dataIndex: 'birthday'
            },
            {
                title: '地址',
                width: 120,
                dataIndex: 'address'
            },
            {
                title: '早起时间',
                width: 80,
                dataIndex: 'time'
            }
        ]

        const columns2 = [
            {
                title: 'id',
                dataIndex: 'id',
                width: 80,
                fixed: 'left',
                dataIndex: 'id',
            },
            {
                title: '用户名',
                width: 80,
                fixed: 'left',
                dataIndex: 'userName'
            },
            {
                title: '性别',
                dataIndex: 'sex',
                width: 80,
                render(sex) {
                    return sex === 1 ? '男' : '女'
                }
            },
            {
                title: '状态',
                width: 80,
                dataIndex: 'state',
                render(state) {
                    let config = {
                        '1': '咸鱼一条',
                        '2': '风流倜傥',
                        '3': '垃圾学渣',
                        '4': '学术垃圾',
                        '5': '浪里小白龙',
                        '6': '创业者'
                    }
                    return config[state];
                }
            },
            {
                title: '爱好',
                width: 80,
                dataIndex: 'interest',
                render(state) {
                    let config = {
                        '1': '游泳',
                        '2': '打篮球',
                        '3': '踢足球',
                        '4': '爬山',
                        '5': '摄影',
                        '6': '唱k',
                        '7': '健身',
                        '8': '旅行',
                        '9': '烹饪',
                    }
                    return config[state];
                }
            },
            {
                title: '生日',
                width: 120,
                dataIndex: 'birthday'
            },
            {
                title: '生日',
                width: 120,
                dataIndex: 'birthday'
            }, {
                title: '生日',
                width: 120,
                dataIndex: 'birthday'
            }, {
                title: '生日',
                width: 120,
                dataIndex: 'birthday'
            }, {
                title: '生日',
                width: 120,
                dataIndex: 'birthday'
            }, {
                title: '生日',
                width: 120,
                dataIndex: 'birthday'
            }, {
                title: '生日',
                width: 120,
                dataIndex: 'birthday'
            }, {
                title: '生日',
                width: 120,
                dataIndex: 'birthday'
            }, {
                title: '生日',
                width: 120,
                dataIndex: 'birthday'
            }, {
                title: '生日',
                width: 120,
                dataIndex: 'birthday'
            }, {
                title: '生日',
                width: 120,
                dataIndex: 'birthday'
            },
            {
                title: '地址',
                width: 120,
                dataIndex: 'address'
            },
            {
                title: '早起时间',
                width: 80,
                dataIndex: 'time'
            }
        ]

        const columns3 = [
            {
                title: 'id',
                dataIndex: 'id',
                dataIndex: 'id',
            },
            {
                title: '用户名',
                dataIndex: 'userName'
            },
            {
                title: '性别',
                dataIndex: 'sex',
                render(sex) {
                    return sex === 1 ? '男' : '女'
                }
            },
            {
                title: '年龄',
                dataIndex: 'age',
                width: 80,
                sorter: (a, b) => {
                    return a.age - b.age;
                },
                sortOrder: this.state.sortOrder
            },
            {
                title: '状态',
                width: 80,
                dataIndex: 'state',
                render(state) {
                    let config = {
                        '1': '咸鱼一条',
                        '2': '风流倜傥',
                        '3': '垃圾学渣',
                        '4': '学术垃圾',
                        '5': '浪里小白龙',
                        '6': '创业者'
                    }
                    return config[state];
                }
            },
            {
                title: '爱好',
                width: 80,
                dataIndex: 'interest',
                render(state) {
                    let config = {
                        '1': '游泳',
                        '2': '打篮球',
                        '3': '踢足球',
                        '4': '爬山',
                        '5': '摄影',
                        '6': '唱k',
                        '7': '健身',
                        '8': '旅行',
                        '9': '烹饪',
                    }
                    return config[state];
                }
            },
            {
                title: '生日',
                dataIndex: 'birthday'
            },
            {
                title: '地址',
                dataIndex: 'address'
            },
            {
                title: '早起时间',
                dataIndex: 'time'
            }
        ]

        const columns4 = [
            {
                title: 'id',
                dataIndex: 'id',
                dataIndex: 'id',
            },
            {
                title: '用户名',
                dataIndex: 'userName'
            },
            {
                title: '性别',
                dataIndex: 'sex',
                render(sex) {
                    return sex === 1 ? '男' : '女'
                }
            },
            {
                title: '年龄',
                dataIndex: 'age',
                width: 80,
            },
            {
                title: '状态',
                width: 80,
                dataIndex: 'state',
                render(state) {
                    let config = {
                        '1': '咸鱼一条',
                        '2': '风流倜傥',
                        '3': '垃圾学渣',
                        '4': '学术垃圾',
                        '5': '浪里小白龙',
                        '6': '创业者'
                    }
                    return config[state];
                }
            },
            {
                title: '爱好',
                width: 80,
                dataIndex: 'interest',
                render(state) {
                    let config = {
                        '1': <Badge status="success" text="游泳" />,
                        '2': <Badge status="error" text="打篮球" />,
                        '3': <Badge status="default" text="踢足球" />,
                        '4': <Badge status="processing" text="爬山" />,
                        '5': <Badge status="processing" text="摄影" />,
                        '6': <Badge status="warning" text="打篮球" />,
                    }
                    return config[state];
                }
            },
            {
                title: '生日',
                dataIndex: 'birthday'
            },
            {
                title: '地址',
                dataIndex: 'address'
            },
            {
                title: '操作',
                render: (text, item) => {
                    return <Button size="small" onClick={(item) => { this.handleDelete(item) }}>删除</Button>
                }
            }
        ]

        return (
            <div>
                <Card title="头部固定">
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource}
                        pagination={false}
                        scroll={{ y: 240 }}
                    />
                </Card>
                <Card title="左侧固定" style={{ margin: '10px 0' }}>
                    <Table
                        bordered
                        columns={columns2}
                        dataSource={this.state.dataSource}
                        pagination={false}
                        scroll={{ x: 1780 }}
                    />
                </Card>
                <Card title="表格排序" style={{ margin: '10px 0' }}>
                    <Table
                        bordered
                        columns={columns3}
                        dataSource={this.state.dataSource}
                        pagination={false}
                        onChange={this.handleChange}
                    />
                </Card>
                <Card title="操作按钮" style={{ margin: '10px 0' }}>
                    <Table
                        bordered
                        columns={columns4}
                        dataSource={this.state.dataSource}
                        pagination={false}
                    />
                </Card>
            </div>
        )
    }
}

