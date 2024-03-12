import { Button, InputBase, InputLabel, TextField } from '@mui/material';
import React, { Component } from 'react'

export default class AddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          items: [],
          currentItem: {            
            name: ''           
          }
        };      
      }

    handleSubmit(e){
        e.preventDefault();
        const newItem = this.state.currentItem;
        console.log(newItem,"item");
        if (newItem.name !== '') {
            const items = [...this.state.items, newItem];
            this.setState({
                items: items,
                currentItem: {
                    text: '',
                }
            });
        }
    }  
  render() {
    return (
      <div style={{ display:"flex",flexDirection:"row",marginTop:"100px",justifyContent:"center",alignItems:"center"}}>
            <form onSubmit={this.handleSubmit} style={{width:"300px", height:"200px", display:"flex", flexDirection:"column",background:"#F7F7F7",padding:15, paddingTop:"50px", borderRadius:"20px"}}>
                <InputLabel >Name :</InputLabel>
                <InputBase name="name" value={this.state.currentItem.name} onChange={(e)=> this.setState({currentItem:{name: e.target.value}})} sx={{background:"lightgrey",borderRadius:"8px"}}/>
                <Button type='submit' >Submit</Button>
            </form>
      </div>
    )
  }
}


