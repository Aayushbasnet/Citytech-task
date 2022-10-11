import React from 'react'
import { Space, Table, Tag } from 'antd';
export default function Tables({dataSource,columns}) {
  return (
    <div style={{margin:20}}>
      <Table className='table' pagination={true} dataSource={dataSource} columns={columns}/>
    </div>
  )
}
