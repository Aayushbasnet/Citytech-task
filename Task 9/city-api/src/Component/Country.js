import React, { useEffect, useState } from 'react'
import { Select } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const { Option } = Select;
export default function Country() {
    const countryApi = 'https://jp-dev.cityremit.global/web-api/config/v1/admin/masters/country';
    const token = localStorage.getItem('cityremit-token');
    const [countryData, setCountryData] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        const getCountry = ()=>{
            axios.get(countryApi,{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            }).then(res=>{
                setCountryData(res.data.data);
                {countryData.map(country => console.log(country))};
                // console.log(typeof(countryData));
                // console.log(countryData);
            }).catch(error=>{
                navigate('/');
                // console.log(error);
            });
        };
        getCountry();
    },[]);
    const onChange = (value) => {
        // console.log(`selected ${value}`);
    };
      
    const onSearch = (value) => {
        // console.log('search:', value);
    };
//   console.log(window.location);


  return (
    <div style={{
        marginTop: '10%'
    }}>
        <Select
            showSearch
            placeholder="Select a person"
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
            filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
        >   
            {
                countryData.map((country) => <Option value={country.value}>{country.label}</Option>
            )}
            
        </Select>
    </div>
  )
}
