const dataBaseService = () =>{
    const  knex =  require('knex')({
        client : 'mysql',
        connection: { 
            host: process.env.DB_Host,
            port: 3306,
            user: process.env.DB_User,
            password: process.env.DB_Password,
            database: process.env.DB
        }
    })

    const table = 'tasks';

    const getTasks = () => {
        return knex(table).select();
    }

    const newTask = ({tittle, day, description}) =>{
        return knex(table).insert({
            tittle: tittle,
            day: day,
            description: description
        });
    };

    const updateTask = (id,{tittle, day, description})=>{
        return knex(table).where('id',id).update(
            {
            tittle: tittle,
            day: day,
            description: description
            }
        )
    }

    const deleteTask = (id) =>{
        return knex(table).where('id',id).del();
    }

    return {
        newTask,
        getTasks,
        updateTask,
        deleteTask
    }
}

module.exports = {
    dataBaseService
};