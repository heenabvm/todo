import React, { useEffect, useState } from 'react';
import { Button, List, Skeleton, Modal, Form, Input } from 'antd';
import getTodoList from '../api/getToDoList';
import addToDo from '../api/addToDo';
import updateToDo from '../api/updateToDo';
import deleteToDo from '../api/deleteToDo';



const ToDoList = () => {
    const [list, setList] = useState([]);
    const [task, setTask] = useState("");
    const [status, setStatus] = useState("");
    const [editObj, setEditObj] = useState({});
    const [deleteId, setDeleteId] = useState("");
    const [updatedTask, setUpdatedTask] = useState("");
    const [updatedStatus, setUpdatedStatus] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
      };
      const handleOk =async() => {
        await addToDo({task: task, status: status});
        addAndFetch();
        setIsModalOpen(false);
      };
      const handleCancel = () => {
        setIsModalOpen(false);
      };

      const showEditModal = () => {
        setIsEditModalOpen(true);
      };
      const handleUpdate =async() => {
        await updateToDo({task: updatedTask, status: updatedStatus}, editObj._id);
        addAndFetch();        
        setIsEditModalOpen(false);
        setEditObj({});
      };

      const handleEditCancel = () => {
        setIsEditModalOpen(false);
        setEditObj({});
      };
      const handleEditClick = (data) => {
          setEditObj(data)
          showEditModal();           
      };

      const showDeleteModal = () => {
        setIsDeleteModalOpen(true);
      };

      const handleDeleteClick = (id) => {
        showDeleteModal();
        setDeleteId(id);
      };

      const handleDelete =async() => {  
        await deleteToDo(deleteId);
        addAndFetch();
        setIsDeleteModalOpen(false);
      };

      const handleDeleteCancel = () => {
        setIsDeleteModalOpen(false);
      };
  
    const addAndFetch = async () => {
        const data = await getTodoList();
        setList(data);
    }

    useEffect(() => {
        addAndFetch();
    }, []);

    return (
        <>
            <div style={{ width: "600px", marginLeft: "300px" }}>
                <h3 >ToDo List</h3>
                <Button onClick={showModal}>Add To Do</Button>

                <Modal title="Add To Do Task" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <div className={"modal-body center"}>
                    <Form layout="vertical">
                        <Form.Item
                        label="Task"
                        name="task"
                        rules={[{ required: true }]}
                        >
                        {<Input type="text" label="task" placeholder="to do task" onChange={(e)=>setTask(e.target.value)}/>}
                        </Form.Item>
                        <Form.Item label="Status" name="status">
                        {<Input type="text" placeholder="pending" onChange={(e)=>setStatus(e.target.value)}/>}
                        </Form.Item>
                    </Form>
                    </div>
                </Modal>
            </div>

            <List
                className="demo-loadmore-list"
                itemLayout="horizontal"
                dataSource={list}
                style={{ width: "600px", marginLeft: "300px" }}
                renderItem={(item) => (
                    <List.Item
                        actions={[<Button key="list-loadmore-edit" onClick={()=>handleEditClick(item)}>edit</Button>,
                        <Button key="list-loadmore-edit" onClick={()=>handleDeleteClick(item._id)}>delete</Button>]}
                    >                   
                        <Modal title="Delete To Do Task" open={isDeleteModalOpen} onOk={()=>handleDelete()} onCancel={handleDeleteCancel}>
                            <p>Are you sure to delete this task from to do list ?</p>
                        </Modal>

                        <Skeleton avatar title={false} loading={item.loading} active>
                            <List.Item.Meta
                                title={item.task}
                            />
                        </Skeleton>
                    </List.Item>
                )}
            />

                <Modal title="Edit To Do Task" open={isEditModalOpen} onOk={()=>handleUpdate()} onCancel={handleEditCancel}>
                    <div className={"modal-body center"}>
                    <input type="text" style={{width:"250px", height:"28px"}} label="task" name='task' defaultValue={editObj?.task} onChange={(e)=>setUpdatedTask(e.target.value)}/>
                    <input type="text" style={{width:"250px", height:"28px"}} name='status' defaultValue={editObj?.status} onChange={(e)=>setUpdatedStatus(e.target.value)}/>
                        {/* <Form layout="vertical" initialValues={editObj}> 
                        {console.log("editObj",editObj)}
                           <Form.Item
                            label="Task"
                            name="task"  
                            value="test"               
                            >
                            <Input type="text" label="task" name='task' onChange={(e)=>setUpdatedTask(e.target.value)}/>
                            </Form.Item>
                            <Form.Item label="Status" name="status" >
                            <Input type="text"  onChange={(e)=>setUpdatedStatus(e.target.value)}/>
                            </Form.Item> 
                        </Form> */}
                    </div>
                </Modal>

               
    


        </>

    );
};
export default ToDoList;