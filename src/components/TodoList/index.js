import { Col, Row, Input, Button, Select, Tag } from "antd";
import Todo from "../Todo";
import { useState } from "react";
import { useDispatch } from "react-redux";
import todoListSlice from "./todoSlice";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import { todoRemainingSelector } from "../../redux/selector.js";

export default function TodoList() {
  const [textChange, setTextChange] = useState("");
  const [selectPriority, setSelectPriority] = useState("Low");

  //   get data from store common
  //   When using "useSelector", you receive all state from Redux store
  //   [state.todoList or state.filter]
  //   const todoList = useSelector(state => state.[store.reducer])
  const todoList = useSelector(todoRemainingSelector);
  console.log(todoList);
  //   dispatch send event action
  const dispatch = useDispatch();

  const handleInputTextChange = (e) => {
    setTextChange(e.target.value);
  };

  const handleSelectPriorityChange = (value) => {
    setSelectPriority(value);
  };

  //   handle add event
  const handleAddTodo = () => {
    dispatch(
      todoListSlice.actions.addTodo({
        id: uuidv4(),
        name: textChange,
        completed: false,
        priority: selectPriority,
      })
    );
  };

  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todoList.map((todo) => (
          <Todo
            id={todo.id}
            name={todo.name}
            prioriry={todo.priority}
            key={todo.id}
            completed={todo.completed}
          />
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input value={textChange} onChange={handleInputTextChange} />
          <Select value={selectPriority} onChange={handleSelectPriorityChange}>
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
          <Button type="primary" onClick={handleAddTodo}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
