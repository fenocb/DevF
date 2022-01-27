import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import React, { useEffect, useState } from "react";

const url = "http://localhost:2500/task/";

const Body = () => {
  const [allTasks, setAllTasks] = useState([]);
  const [modalInsertar, setModalInsertar] = useState({
    visible: false,
    tipoModal: "",
    visibleEliminar: false
  });
  const [form, setForm] = useState({
    id: "",
    tittle: "",
    day: "",
    description: "",
  });

  const peticionGet = () => {
    axios
      .get(url)
      .then((res) => {
        setAllTasks(res.data.task);
      })
      .catch((e) => {
        console.log(e.mensage);
      });
  };

  const peticionPost = async () => {
    delete form.id;
    await axios
      .post(url, form)
      .then((res) => {
        nuevoToggle();
        peticionGet();
      })
      .catch((e) => {
        console.log(e.mensage);
      });
  };

  const peticionPut = async () => {
    await axios.put(url + form.id, form).then((res) => {
      modalToggle();
      peticionGet();
    })
    .catch((e) => {
        console.log(e.mensage);
      });
  };

  const peticionDelete = async() =>{
      await axios.delete(url+form.id).then((res=>{
          setModalInsertar({visibleEliminar:false})
          peticionGet();
          
      }))
      .catch((e) => {
        console.log(e.mensage);
      });
  }

  const seleccionTask = (task) => {
    setForm({
      id: task.id,
      tittle: task.tittle,
      day: task.day,
      description: task.description,
    });
    setModalInsertar({
      ...modalInsertar,
      tipoModal: "Actualizar",
    });
  };

  useEffect(() => {
    peticionGet();
  }, []);

  const nuevoToggle = () => {
    setModalInsertar({
      visible: !modalInsertar.tipoModal,
      tipoModal: "insertar",
    });
  };

  const actualizarToggle = () => {
    setModalInsertar({
      visible: !modalInsertar.tipoModal,
      tipoModal: "actualizar",
    });
  };

  const modalToggle = () => {
    setModalInsertar({ visible: !modalInsertar.tipoModal });
  };

  const handleChange = async (e) => {
    e.persist();
    await setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    console.log(form);
  };



  return (
    <div className="container">
      <div className="container">
        <button
          className="btn btn-success"
          onClick={() => {
            setForm(null);
            nuevoToggle();
          }}
        >
          {" "}
          Agregar tarea
        </button>
      </div>
      <div className="row">
        {allTasks.map((task, index) => (
          <div className="col-4" key={index}>
            <div className="card">
              <img className="card-img-top" src="https://www.enter.co/wp-content/uploads/2021/02/4401280-768x432.jpg" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">{task.tittle}</h5>
                <p className="card-text">{task.description}</p>
                <p className="card-text">{task.day}</p>
              </div>
              <div className="card-footer">
                <button
                  className="btn  btn-primary"
                  onClick={() => {
                    seleccionTask(task);
                    actualizarToggle();
                  }}
                >
                  editar
                </button>
                <button className="btn btn-danger" onClick={()=>{seleccionTask(task); setModalInsertar({visibleEliminar:true})}} >eliminar</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Modal id="modal" isOpen={modalInsertar.visible}>
        <ModalHeader style={{ display: "block" }}>
          <span style={{ float: "right" }}>x</span>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
            <div className="row">
              <div className="col-12">
                <label htmlFor="id">ID</label>
                <input
                  className="form-control"
                  type="text"
                  name="id"
                  onChange={handleChange}
                  value={form ? form.id : allTasks.length + 1}
                  readOnly
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <label htmlFor="tittle">tittle</label>
                <input
                  className="form-control"
                  type="text"
                  name="tittle"
                  onChange={handleChange}
                  value={form ? form.tittle : ""}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <label htmlFor="description">Descripcion</label>
                <input
                  className="form-control"
                  type="text"
                  name="description"
                  onChange={handleChange}
                  value={form ? form.description : ""}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <label htmlFor="day">Dia</label>
                <input
                  className="form-control"
                  type="date"
                  name="day"
                  onChange={handleChange}
                  value={form ? form.day : ""}
                />
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          {modalInsertar.tipoModal == "insertar" ? (
            <button className="btn btn-success" onClick={() => peticionPost()}>
              Guardar
            </button>
          ) : (
            <button className="btn btn-success" onClick={() => peticionPut()}>
              Actualizar
            </button>
          )}

          <button className="btn btn-danger" onClick={() => modalToggle()}>
            Cancelar
          </button>
        </ModalFooter>
      </Modal>
      <Modal isOpen={modalInsertar.visibleEliminar}>
          <ModalHeader>
              <h4>Eliminar</h4>
          </ModalHeader>
          <ModalBody>
              <p>¿Esta seguro que desea eliminar esta tarea?</p>
          </ModalBody>
          <ModalFooter>
              <button className="btn btn-danger" onClick={()=>{peticionDelete()}}>Eliminar</button>
              <button className="btn btn-secundary" onClick={()=>{setModalInsertar({visibleEliminar:false})}}>Atras</button>
          </ModalFooter>
      </Modal>
    </div>
  );
};
export default Body;
