import { Col, Row, Input, Typography, Radio, Select, Tag } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import filterSlice from "./filterSlice.js";

const { Search } = Input;

export default function Filters() {
  const dispatch = useDispatch();
  const [searchFilter, setSearchFilter] = useState("");
  const [searchStatus, setSearchStatus] = useState("All");
  const [searchPriority, setSearchPrority] = useState([]);

  const handleSearchTextChange = (e) => {
    setSearchFilter(e.target.value);
    dispatch(filterSlice.actions.searchFilterChange(e.target.value));
  };

  const handleStatusChange = (e) => {
    setSearchStatus(e.target.value);
    dispatch(filterSlice.actions.statusFilterChange(e.target.value));
  };

  const handlePriorityChange = (value) => {
    setSearchPrority(value);
    dispatch(filterSlice.actions.priorityFilterChange(value));
  };

  return (
    <Row justify="center">
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search
          placeholder="input search text"
          value={searchFilter}
          onChange={handleSearchTextChange}
        />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group value={searchStatus} onChange={handleStatusChange}>
          <Radio value="All">All</Radio>
          <Radio value="Completed">Completed</Radio>
          <Radio value="Todo">To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode="multiple"
          allowClear
          placeholder="Please select"
          style={{ width: "100%" }}
          onChange={handlePriorityChange}
          value={searchPriority}
        >
          <Select.Option value="High" label="High">
            <Tag color="red">High</Tag>
          </Select.Option>
          <Select.Option value="Medium" label="Medium">
            <Tag color="blue">Medium</Tag>
          </Select.Option>
          <Select.Option value="Low" label="Low">
            <Tag color="gray">Low</Tag>
          </Select.Option>
        </Select>
      </Col>
    </Row>
  );
}
