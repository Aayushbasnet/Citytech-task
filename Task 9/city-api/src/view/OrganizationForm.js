import React, { useState } from "react";
import {
  PlusCircleOutlined,
  RollbackOutlined,
  MinusCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { Button, Input, Form, Alert, Space, Tag } from "antd";
import Tables from "../Component/Tables.js";

export default function OrganizationForm() {
  const [isForm, setIsForm] = useState(false);
  const [error, setError] = useState("");
  const [organizationData, setOrganizationData] = useState();
  const [data, setData] = useState([]);
  const organizationDataColumn = [
    {
      title: "Name",
      dataIndex: "organizationName",
      key: "organizationName",
    },
    {
      title: "Address",
      dataIndex: "organizationAddress",
      key: "organizationAddress",
    },
    {
      title: "Employee",
      dataIndex: "organizationEmployees",
      render: (_, { employees }) => (
        <>
          {employees.map((employee) => {
              console.log("tag", employee.fullName);
              return(
                  <Tag color="blue" key={employee}>
                  {employee.fullName}
                  </Tag>
              )
          })}
        </>
      ),
      key: "organizationAddress",
    },
    {
      title: "Website",
      dataIndex: "organizationWebsite",
      key: "organizationWebsite",
    }
  ];
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    setOrganizationData(values);
    setData((prevData) => [...prevData, values]);
    setError("Organization data has been successfully created.");
  };
  // console.log("Data: ", data);

  // form status toggle
  const formStatusToggle = () => {
    isForm ? setIsForm(false) : setIsForm(true);
  };

  return (
    <div>
      {/* add/back button */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          flexDirection: "row",
          margin: "15px",
        }}
      >
        {isForm ? (
          <Button
            type="primary"
            icon={<RollbackOutlined />}
            onClick={formStatusToggle}
          >
            Back
          </Button>
        ) : (
          <Button
            type="primary"
            icon={<PlusCircleOutlined />}
            onClick={formStatusToggle}
          >
            Add
          </Button>
        )}
      </div>

      {/* table and form */}
      <div
        style={{
          marginBottom: "10px",
          alignSelf: "center",
        }}
      >
        {error ? (
          <Alert
            message="Successfull"
            description={error}
            type="success"
            closable
            showIcon
          />
        ) : null}
      </div>
      {isForm ? (
        // organization form
        <Form
          onFinish={onFinish}
          className="login-form"
          initialValues={{
            remember: true,
          }}
          name="wrap"
          labelCol={{
            flex: "110px",
          }}
          labelAlign="left"
          labelWrap
          wrapperCol={{
            flex: 1,
          }}
          colon={false}
        >
          <div
            style={{
              boxShadow: "",
              borderRadius: "2px",
              margin: "15px",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              background: "white",
            }}
          >
            {/* title */}
            <div
              style={{
                marginBottom: "10px",
                width: "70%",
                alignSelf: "center",
              }}
            >
              <h2>Organization Form</h2>
            </div>
            {/* organization name */}
            <div
              style={{
                width: "70%",
                alignSelf: "center",
              }}
            >
              <Form.Item
                label="Name"
                name="organizationName"
                rules={[
                  {
                    required: true,
                    message: "Please enter orgainzation name!",
                  },
                ]}
              >
                <Input
                  size="default size"
                  placeholder="Enter organization name"
                  id="organizationName"
                  type="text"
                  name="organizationName"
                  // onChange={(e)=>setOrganizationData({...organizationData, organizationName:e.target.value})}
                  style={{
                    borderRadius: "4px",
                  }}
                  value="name"
                />
              </Form.Item>
            </div>
            {/* organization address */}
            <div
              style={{
                width: "70%",
                alignSelf: "center",
              }}
            >
              <Form.Item
                label="Address"
                name="organizationAddress"
                rules={[
                  {
                    required: true,
                    message: "Please enter orgainzation address!",
                  },
                ]}
              >
                <Input
                  size="default size"
                  placeholder="Enter organization address"
                  id="organizationAddress"
                  type="text"
                  name="organizationAddress"
                  // onChange={(e)=>setOrganizationData({...organizationData, organizationAddress:e.target.value})}
                  style={{
                    borderRadius: "4px",
                  }}
                />
              </Form.Item>
            </div>
            {/* organization website */}
            <div
              style={{
                width: "70%",
                alignSelf: "center",
              }}
            >
              <Form.Item
                label="Website"
                name="organizationWebsite"
                rules={[
                  {
                    required: true,
                    message: "Please enter orgainzation website!",
                  },
                ]}
              >
                <Input
                  size="default size"
                  placeholder="Enter organization website"
                  id="organizationWebsite"
                  type="url"
                  name="organizationWebsite"
                  // onChange={(e)=>setOrganizationData({...organizationData, organizationWebsite:e.target.value})}
                  style={{
                    borderRadius: "4px",
                  }}
                />
              </Form.Item>
            </div>
            {/* employee details */}
            <h3>Employee Details</h3> <br />
            <br />
            <div
              style={{
                width: "70%",
                alignSelf: "center",
              }}
            >
              <Form.List name={"employees"}>
                {(fields, { add, remove }) => (
                  <>
                    {fields.map((key, name, _, ...restField) => {
                      // console.log("NAme: ",name);
                      return (
                        <Space
                          key={key.key}
                          style={{
                            display: "flex",
                            marginBottom: 8,
                          }}
                          align="baseline"
                        >
                          <Form.Item
                            {...restField}
                            name={[name, "employeeId"]}
                            rules={[
                              {
                                required: true,
                                message: "Missing employee id",
                              },
                            ]}
                          >
                            <Input
                              placeholder="Enter Employee id"
                              id="employeeId"
                              type="number"
                              name="employeeId"
                              style={{
                                borderRadius: "4px",
                              }}
                            />
                          </Form.Item>
                          <Form.Item
                            {...restField}
                            name={[name, "fullName"]}
                            rules={[
                              {
                                required: true,
                                message: "Missing full name",
                              },
                            ]}
                          >
                            <Input placeholder="Full Name" />
                          </Form.Item>
                          <Form.Item
                            {...restField}
                            name={[name, "phoneNumber"]}
                            rules={[
                              {
                                required: true,
                                message: "Missing phone number",
                              },
                            ]}
                          >
                            <Input placeholder="Phone number" />
                          </Form.Item>
                          <MinusCircleOutlined onClick={() => remove(name)} />
                        </Space>
                      );
                    })}
                    <Form.Item>
                      <Button
                        type="dashed"
                        onClick={() => add()}
                        block
                        icon={<PlusOutlined />}
                      >
                        Add employee
                      </Button>
                    </Form.Item>
                  </>
                )}
              </Form.List>
            </div>
            {/* submit button */}
            <div
              style={{
                marginBottom: "10px",
                alignSelf: "center",
                width: "70%",
              }}
            >
              <Button
                type="primary"
                style={{ width: "100%" }}
                htmlType="submit"
              >
                Create Organization
              </Button>
              {/* <button type="button" onClick={submit}>Submit</button> */}
            </div>
          </div>
        </Form>
      ) : (
        // table
        <div>
          {/* organization table */}
          <h3>Organization List</h3>
          <Tables dataSource={data} columns={organizationDataColumn} />
        </div>
      )}
    </div>
  );
}
