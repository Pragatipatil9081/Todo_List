import { useState } from "react";
import "./App.css"
function Todo()
{
	const [todolist, setTodolist] = useState([]);
	const [newtask, setNewtask] = useState("");
	const inputhandle = (e) => {
		setNewtask(e.target.value);
	  };
	const task={
		// id:1,
		id:todolist.length===0? 1:todolist[todolist.length-1].id+1,
		name:newtask,
		complete:false,
	}
	
		const add = () => {
		if(newtask=="")
		{
			alert("enter value")
		}
		else{
		setTodolist([...todolist, task]);
		}
		setNewtask("")	
		}
	  
	const dlt = (name) => {
	alert("Confirm Delete")
	  const dltdata = todolist.filter((tas) => tas != name);
	  setTodolist(dltdata);
	};
	const cmplt=(i)=>{
		// console.log(i);
		setTodolist(todolist.map((task)=>{
			if(task.id==i){
				return{...task,complete:true}
			}
			else return task 	
		}))
	}
	return(
		<div className="container">
			<h2>Todo List</h2>
			<input className="addi" type="text" value={newtask} onChange={inputhandle}></input>
			<button className="addbtn" onClick={add}><h3>Add Task</h3></button>	
			<div className="list">{todolist.map((item)=>{
				return(
				<div key={item.id}>
					<h4 className="head" style={{backgroundColor:item.complete?"yellow":"white"}}>{item.id} - 
					{item.name}</h4>
					<button className="dltbtn"onClick={()=>{dlt(item)}}>Delete</button>
					<button className="cmpltbtn"onClick={()=>{cmplt(item.id)}} >Complete</button>
				</div>
				)
				})}
			</div>
		</div>
	)
}
export default Todo;