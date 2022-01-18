

const taskCard = () => {
    return(
        <div className='taskContainer'>
                <div className='taskCard'>
                <p> Task title </p>
                    <div className='task'>
                        <ul>
                            <li>
                                <div className="taskInfo">
                                <form>
                                    <input type='checkbox'></input>
                                    <label>task name</label>
                                </form>
                                </div>
                                <div className="taskOption">
                                    <button>Edit Task</button>
                                    <button>Delete Task</button>
                                </div>
                            </li>
                        </ul>
                    </div>        
                </div>
            </div>
    );
}
export default taskCard;