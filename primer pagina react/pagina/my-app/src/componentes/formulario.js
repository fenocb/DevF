import React, { useState,useRef,crateElement, createRef } from 'react';
import ReactDOM from 'react-dom';



const Formulario = () =>{

    const taskInput = useRef();
    const poptask = useRef();
    
    const [tasks, setTasks] = useState();

    const [taskList,setTaskList] = useState([]);
        
    

    const newTask = (e) => {
        e.preventDefault();
        setTasks(taskInput.current.value);  
        setTaskList([
            ...taskList,
            tasks
        ]); 
        console.log(tasks);
        console.log(taskList);
    }

    const popCard = (
        taskList.map((element)=>
        <ul>
                            <li>
                                <div className="taskInfo">
                                <form>
                                    <input type='checkbox'></input>
                                    <label>{element}</label>
                                </form>
                                </div>
                                <div className="taskOption">
                                    <button>Edit Task</button>
                                    <button>Delete Task</button>
                                </div>
                                
                            </li>
                        </ul>
        )
        )
        


    return (
        <div className='mainContainer'>
            <div className='tittleContainer'>
                <h3>What needs to be done?</h3>
            </div>
            <div className='formContainer'>
                <form>
                    <div>
                        <input type="text" placeholder="Nombre" ref={taskInput}
                        ></input>
                        <button onClick={newTask} className="btn btn-primary">Add Task</button>
                    </div>
                </form>
            </div>
            <div className='taskContainer'>
                <div className='taskCard'>
                <p> Task title </p>
                    <div className='task' ref={poptask}>
                        {popCard}
                    </div>        
                </div>
            </div>
            

        </div>
    );

    
}
export default Formulario