import React, { useEffect, useState } from 'react';
import { List, Skeleton } from 'antd';
import getAllUsers from '../api/users';
import { Link } from 'react-router-dom';


const UserList = () => {
    const [userList, setUserList] = useState([]);

    const addAndFetch = async () => {
        const data = await getAllUsers();
        setUserList(data);
    }

    useEffect(() => {
        addAndFetch();
    }, []);


    return (
        <>
        <div style={{ width: "600px", marginLeft: "300px" }}>
        <h3 >User List</h3>
            {userList && <List
                className="demo-loadmore-list"
                itemLayout="horizontal"
                dataSource={userList}
                style={{ width: "600px"}}
                renderItem={(item) => (
                    <List.Item>
                        <Skeleton avatar title={false} loading={item.loading} active>
                            <List.Item.Meta
                                title={item.name}
                            />
                            <div style={{marginRight:"50px"}}>{item.email}</div>
                            <Link to={`/user-todo-list/${item._id}`}>More</Link>
                        </Skeleton>
                    </List.Item>
                )}
            />}
            </div>
        </>
    );
};
export default UserList;