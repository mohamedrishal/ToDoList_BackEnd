const todos = require('../Model/todosSchema')

// add todos
exports.addtodos = async (req,res)=>{

    console.log('inside add Project function');

    const userId = req.payload
    const {todoName,description} = req.body
    // console.log(`${title}, ${languages}, ${overview}, ${github}, ${website} , ${userId}, ${projectImage}`);
    try{
        const existingProject = await todos.findOne({todoName})
        if(existingProject){
             res.status(406).json("Project already exist!!! Upload another")
        }else{
            const newProject = new todos({
                todoName,description,userId
            })
            await newProject.save()
            res.status(200).json(newProject)
        }
    }catch(err){
        res.status(401).json(`Request failed, Error : ${err}`)
    }

}


// get userProjects - token require
exports.allUserTodos = async (req,res)=>{
    const userId = req.payload
    try{
        const userProjects = await todos.find({userId})
        res.status(200).json(userProjects)
    }catch(err){
        res.status(401).json(err)
    }
}

// Edit Project 
// PUT - complete update 
exports.editTodosController = async (req,res)=>{
    // get edit project details 
    const {id} = req.params
    const userId = req.payload
    const {todoName,description} = req.body
    // const uploadProjectImage = req.file?req.file.filename:projectImage

     try{
        const updateProject = await todos.findByIdAndUpdate({_id:id},{
            todoName,description,userId
        },{new:true})
        await updateProject.save()
        res.status(200).json(updateProject)

     }catch(err){
        res.status(401).json(err)
     }
}



// delete Project 
exports.deleteTodosController = async (req,res)=>{
    // get project details 
    const {id} = req.params
    try{
        const removeProject = await todos.findByIdAndDelete({_id:id})
        res.status(200).json(removeProject)
    }catch(err){
        res.status(401).json(err)
    }
}
