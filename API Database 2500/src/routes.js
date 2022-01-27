const { response } = require("express");



module.exports = (app , dataBaseService)=>{
    
    
    //Lista blanca para que puedan usaar la API
    //No funciona como deberia
    // No me deja revisar datos desde el 2500
    /*
    const whitelist = 
    [
        'http://localhost:2500',
        process.env.URL_TodoList_Web
        
    ];

    var corsOption = {
        origin: function (origin, callback){
            if (whitelist.indexOf(origin)!=-1){
                callback(null, true);
            }else {
                callback (new Error('Not Allowed by Cors'));
            }
        }
    }
    */
    
    //coneccion status
    app.get('/', /*cors(corsOption),*/ (req,res)=>{
    //app.get('/' , (req , res) => {
        res.json({'Mensaje' : 'Todo bien'});
    });

    //imprimir tareas
    app.get('/task',  /*cors(corsOption) ,*/ (req , res) =>{
        dataBaseService.getTasks()
        .then(task =>{
            res.json({task});

        }).catch(e=>res.status(500).json(e)); 
    });

    //ingresar nueva tarea
    app.post('/task' ,  /*cors(corsOption) ,*/ (req , res) => {
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

    

    //modificar tarea
    app.put('/task/:id',  /*cors(corsOption),*/ (req, res) =>{
        const newtask = req.body;
        console.log(req.params.id,'',newtask);
        dataBaseService.updateTask(req.params.id,newtask)
        //no se hacerlo con async
        .then(task =>{
            res.json({task});

        }).catch(e=>res.status(500).json(e)); 
    });
    app.delete('/task/:id', /* cors(corsOption),*/ (req , res) =>{
        
        dataBaseService.deleteTask(req.params.id)
        //no se hacerlo con async
        .then(task =>{
            res.json({task});

        }).catch(e=>res.status(500).json(e)); 
    });
} 