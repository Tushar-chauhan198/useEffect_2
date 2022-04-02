//import axios from {axios}

import { useEffect, useState } from 'react';

export const Todo=()=>{
    const [data1,setData]=useState([])
    const [title,setTitle]=useState('')
    const [task,setTask]=useState('')
    const [page1, setPage] = useState(1);
    
    //const [loading, setLoading] = useState(false);
    //const axios = require('axios');
    useEffect(()=>{
        getData()
    },[page1])
    const getData=()=>{
        fetch(`https://fake-api-project-for-masai.herokuapp.com/tasks?_page=${page1}&_limit=3`)
        .then((d)=>{ return d.json()})
        .then((res)=>{setData(res)})
    }
    return (
        <>
        
        <h1 className="title">Todo...</h1>
        <input type="text" className="inputTitle" onChange={(e)=>{setTitle(e.target.value)}} />
        {/* <input type="text" placeholder="Add Task..."/> */}
        <input type="text" className="inputBody" placeholder="Add Task..." onChange={(e)=>{setTask(e.target.value)}}/>
        <button className="addBtn" onClick={()=>{
            let data={title:title,task:task}
            console.log(data)
        fetch("https://fake-api-project-for-masai.herokuapp.com/tasks", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
              "content-type": "application/json",
            },
          }).then(getData)
        }} >Add</button>
        <div  className="container" >
            {data1.map((e)=>{
                return <h3 key={e.id} >{e.title} - {e.task}</h3>
            })}
        </div>
        {/* className="todoItem" */}
        <div className="btn">
            <button className="prev"disabled={page1===1?true:false}  onClick={()=>{
                setPage(page1-1)
            }} >Prev</button>
            <button onClick={()=>{
                setPage(page1+1)
            }} >Next</button>
        </div>
        </>

    )
}