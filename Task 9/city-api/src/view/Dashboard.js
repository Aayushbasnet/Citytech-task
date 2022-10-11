import React, { useState, useEffect } from 'react'
import axios from 'axios';
import SummaryCard from '../Component/SummaryCard.js';
import './Dashboard.css';
import Tables from '../Component/Tables.js';

export default function Dashboard() {
    const summaryApi='https://jp-dev.cityremit.global/web-api/transaction-manager/v1/admin/dashboard/summary';
    const recentTranscationApi = 'https://jp-dev.cityremit.global/web-api/transaction-manager/v1/admin/dashboard/search';
    const ticketApi = 'https://jp-dev.cityremit.global/web-api/config/v1/tickets/search';
    const token = localStorage.getItem('cityremit-token');
    const [summaryData, setSummaryData] = useState([]);
    const [recentTranscationData, setRecentTranscationData]= useState([]);
    const [ticketData, setTicketData]= useState([]);
    const [recentTranscationStatus, setRecentTranscationStatus]= useState(false);
    const [ticketStatus, setTicketStatus]= useState(false);
    useEffect(()=>{
        const getSummary = async()=>{
            await axios
                .get(summaryApi,{
                    headers:{
                        Authorization: `Bearer ${token}`
                    }
            }).then(res=>{
                setSummaryData(res.data.data[0]);
                console.log(summaryData);
            }).catch(err=>{
                console.log(err);
            });
        };
        const getRecentTranscation = async()=>{
            await axios
                .post(recentTranscationApi,null,{
                    headers:{
                        Authorization: `Bearer ${token}`
                    }
                }).then(res=>{
                    setRecentTranscationData(res.data.data);
                    setRecentTranscationStatus(true);
                    console.log(recentTranscationData);
                    // console.log(recentTranscationData);
                }).catch(err=>{
                    console.log(err);
                })
        };
        const getTicket = async()=>{
            await axios
                .post(ticketApi,null,{
                    headers:{
                        Authorization: `Bearer ${token}`
                    }
                }).then(res=>{
                    setTicketData(res.data.data.data);
                    setTicketStatus(true);
                    console.log(recentTranscationData);
                    // console.log(recentTranscationData);
                }).catch(err=>{
                    console.log(err);
                })
        };
        getSummary();
        getRecentTranscation();
        getTicket();
    },[]);

    const recentTranscationColumns =[
        {
            title: 'Sender Full Name',
            dataIndex: 'Sender Full Name',
            key: 'Sender Full Name'
        },
        {
            title: 'Receiver Full Name',
            dataIndex: 'Receiver Full Name',
            key: 'Receiver Full Name'
        },
        {
            title: 'Current Status',
            dataIndex: 'Current Status',
            key: 'Current Status'
        },
        {
            title: 'Send Amount',
            dataIndex: 'Send Amount',
            key: 'Send Amount'
        },
        {
            title: 'Receive Amount',
            dataIndex: 'Receive Amount',
            key: 'Receive Amount'
        }
    ];

    const ticketTranscationColumns =[
        {
            title: 'ticket_id',
            dataIndex: 'ticket_id',
            key: 'ticket_id'
        },
        {
            title: 'ticket_category',
            dataIndex: 'ticket_category',
            key: 'ticket_category'
        },
        {
            title: 'ticket_status',
            dataIndex: 'ticket_status',
            key: 'ticket_status'
        },
        {
            title: 'ticket_priority',
            dataIndex: 'ticket_priority',
            key: 'ticket_priority'
        },
        {
            title: 'assign_to',
            dataIndex: 'assign_to',
            key: 'assign_to',
        }
    ];

  return (
    <div>
        <h1>hell</h1>
        {/* summary data */}
        <div className="site-card-border-wrapper">
        <div style={{display: 'flex'}}>
            <SummaryCard title="TXN VOLUME" icon="icon" data={summaryData.transaction_volume}/>
            <SummaryCard title="NEW CUSTOMERS" icon="icon" data={summaryData.new_customers}/>
            <SummaryCard title="TOTAL RECEIVABLE" icon="icon" data={summaryData.total_receivable}/>
            <SummaryCard title="FX GAIN" icon="icon" data={summaryData.fx_gain}/>
        </div> 
        </div>
        {/* Recent Transcation Table */}
        <h1>Recent Transcation</h1>
        {recentTranscationStatus && <Tables dataSource={recentTranscationData} columns={recentTranscationColumns}/>}
        
        {/* Tickets table */}
        <h1>Tickets</h1>
        {ticketStatus && <Tables dataSource={ticketData} columns={ticketTranscationColumns}/>}

           
    </div>
    
  )
}
