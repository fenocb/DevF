import React, { useEffect, useState } from "react";

const GetAPI = () => {
  const APIUrl = "http://localhost:2500/task";

  const [task, setTask] = useState([]);

  useEffect(() => {
    getAPIData();
  }, []);

  const getAPIData = async () => {
    const data = await fetch(APIUrl);
    const tasksJson = await data.json();
    const tasks = await tasksJson.task;
    setTask(tasks);
  };

  return <TaskContainer tasks={task} />;
};

const TaskContainer = ({ tasks = [] }) => {
  return (
    <div className="container mt-5">
      <div className="row">
        {tasks.map((item, id) => (
          <div key={id} className="col-4 mb-4">
            <div
              className="card"
              style={{ minHeight: "40vh", maxHeight: "45vh", minWidth: "50wh" }}
            >
              {/* imagen aqui */}
              <img
                src="https://miro.medium.com/max/2560/1*ZYJ_9Q-0fF8tlvcKdoGgnQ.jpeg"
                class="img-fluid"
                alt="Responsive image rounded mx-auto d-block"
              ></img>
              <div className="card-body">
                <h5 className="card-title">{item.tittle}</h5>
                <label>Fecha:</label> <p>{item.day}</p>
                <label>Descripcion: </label> <p>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetAPI;
