const { response } = require("express");

module.exports = (app , dataBaseService)=>{
    
    //coneccion status
    app.get('/' , (req , res) => {
        res.json({'Mensaje' : 'Todo bien'});
    });

    //ingresar nueva tarea
    app.post('/task' , (req , res) => {
        const newtask = req.body;
        console.log(newtask);
        dataBaseService.newTask(newtask)
        //no se hacerlo con async
        .then(()=>{
            res.json({'Mensaje' : 'Nueva tarea guardada'});
        }).catch(e=>{
            res.status(500).json(e);
        })
    })

    //imprimir tareas
    app.get('/task', (req , res) =>{
        dataBaseService.getTasks()
        .then(task =>{
            res.json({task});

        }).catch(e=>res.status(500).json(e)); 
    });

    //modificar tarea
    app.put('/task/:id', (req, res) =>{
        const newtask = req.body;
        console.log(req.params.id,'',newtask);
        dataBaseService.updateTask(req.params.id,newtask)
        //no se hacerlo con async
        .then(task =>{
            res.json({task});

        }).catch(e=>res.status(500).json(e)); 
    });
    app.delete('/task/:id',(req , res) =>{
        
        dataBaseService.deleteTask(req.params.id)
        //no se hacerlo con async
        .then(task =>{
            res.json({task});

        }).catch(e=>res.status(500).json(e)); 
    });
} 