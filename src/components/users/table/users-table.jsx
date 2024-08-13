import { Table } from 'antd'

import { columns } from './columns'

export const UsersTable = ({ users }) => {
    const dataSource = users.map((user) => ({
        key: user.id,
        avatar: user.avatar,
        name: user.name,
        email: user.email,
        role: user.role
    }))

    return (
        <Table
            bordered
            className='mt-10'
            dataSource={dataSource}
            columns={columns}
            pagination={false}
        />
    )
}
