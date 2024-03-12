import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import SignUpPage from './components/SignUpPage';
import SignInPage from './components/SignInPage';
import UserList from './components/UserList';
import ToDoList from './components/ToDoList';
import UserToDoList from './components/singleUserData';
import Protected from './components/Protected';
import Page_2 from "./components/Page_2";
import PaymentPage from "./components/PaymentPage";
import CostTable from "./components/CostTable";
import Home2 from "./components/Home2";
import EditForm from "./components/gql_component/EditForm";
import Payment from "./components/Payment";
import MockApi from "./components/gql_component/MockApi";
import Bingo from "./components/Bingo";
import Memory from "./components/Memory";
import Gql_data from "./components/gql_component/Gql_data";

const fun = ()=>{
  console.log("edit page");
}

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
        <Route path="home" element={<Home2 />} />
        <Route path="page-2" element={<Page_2 />} />
        <Route path="payment" element={<PaymentPage />} />
        <Route path="cost-table" element={<CostTable />} />
        <Route path="gql" element={<Gql_data />} />

        <Route path="pay" element={<Payment />} />        
        <Route path="edit" element={<EditForm name="Boss" fun={fun}/>} />
        <Route path="mock" element={<MockApi/>} />
        <Route path="bingo" element={<Bingo />} />
        <Route path="game" element={<Memory />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
