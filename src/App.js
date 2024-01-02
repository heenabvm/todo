import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import SignUpPage from './components/SignUp-page';
import SignInPage from './components/SignInPage';
import UserList from './components/UserList';
import ToDoList from './components/ToDoList';
import UserToDoList from './components/singleUserData';
import Protected from './components/Protected';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<SignUpPage />} />
        <Route path="login" element={<SignInPage />} />        
        <Route path="todo" element={<ToDoList />} />
        <Route path="users" element={
          <Protected>
            <UserList />
          </Protected>
        } />
        <Route path="user-todo-list/:id" element={
          <Protected>
            <UserToDoList />
          </Protected>          
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
