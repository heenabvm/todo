import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react'

export default function EditForm(props) {
    const [user, setUser] = useState("");
    const [data, setData] = useState("");
    const [flag, setFlag] = useState(true);


  return (
    <div>
     
        <h1>My Component</h1>
        <h2>{props.name}</h2>
        
        <input type='text' value={user} onChange={(e)=> setUser(e.target.value)}/>
        {flag?<Button onClick={()=>setData("Hello")}>Submit</Button>:
        <Button >Cancel</Button>}

        <Button onClick={props.fun}>Save</Button>
        {/* <Button >Save</Button> */}
        <Button onClick={()=>setData("edit")} >Edit</Button>

        <h3>{data}</h3>
        <select>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
<label htmlFor='username'>Name</label>
        <input className='div' id='username' onChange={(e)=>setData(e.target.value)}/>
        
    </div>
  )

}
