import React, { useEffect, useState } from 'react';
import { List, Skeleton } from 'antd';
import { useParams } from 'react-router-dom';
import getUserTodoList from '../api/getUserToDoList';


const UserToDoList = () => {
    const [list, setList] = useState([]);
    const {id} = useParams();

    
    const addAndFetch = async () => {
        if(id){
            const data = await getUserTodoList(id);
            setList(data);
        }        
    }

    useEffect(() => {
        addAndFetch();
    }, []);

    return (
        <div>

            <div style={{ width: "600px", marginLeft: "300px" }}>
                <h3>User To Do List</h3>
            </div>

            <List
                className="demo-loadmore-list"
                itemLayout="horizontal"
                dataSource={list}
                style={{ width: "600px", marginLeft: "300px" }}
                renderItem={(item) => (
                    <List.Item>                   
                        
                        <Skeleton avatar title={false} loading={item.loading} active>
                            <List.Item.Meta
                                title={item.task}
                            />
                            <div>{item.status}</div>
                        </Skeleton>
                    </List.Item>
                )}
            />    
        </div>

    );
};
export default UserToDoList;