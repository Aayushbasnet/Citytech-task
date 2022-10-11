import React from 'react';
import { Card } from 'antd';


export default function SummaryCard({title,icon,data}) {
  return (
    <div>
      <div>
            <Card
                title={title}
                bordered={true}
                style={{
                    width: 300,
                    margin:10
                }}
            >
                {icon}
                <p>{data}</p>
            </Card>
        </div>
    </div>
  )
}
