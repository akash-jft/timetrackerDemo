
module.exports = {
    author : async function(req,res){
        try {
            if(req.method==='GET'){
                let task =await Task.find();
                let author = await Author.find();
                return res.view('Demo/demo',{task,author,taskfetch:false,authorfetch:false,deleted:false});
            }
            else{
                
            }
        }catch (error) {
            console.log("Error   :",error);
            return res.status(409).json({message:'Something went wrong!'});

        }
    },
    createAuthor : async function(req,res){
        try {
            if(!req.param('name')
            || !req.param('email')
            ){
                return res.json({message:'All fields are mandatory'});
            }
            let createObj={
                name:req.param('name'),
                email:req.param('email')
            }
             let author = await Author.create(createObj).fetch();
            return res.json({success:true,msg:"author created succesffuly",author});
        }catch (error) {
            console.log("Error   :",error);
            return res.status(409).json({message:'Something went wrong!'});

        }
    },
    editAuthor : async function(req,res){
        try {
            if(req.method==='GET'){
                let author =await Author.findOne({id:req.param('id')});
                return res.json({success:true,author});;
            }else{
                console.log("JJJJJJJNKNK",req.allParams())
                if(!req.param('name')
                || !req.param('email')
                ){
                    return res.json({message:'All fields are mandatory'});
                }
                let author =await Author.findOne({id:req.param('id')});
                if(author){
                    updateObj={
                        name :req.param('name'),
                        email:req.param('email')
                    }
                  author = await Author.updateOne({id:req.param('id')},updateObj );
                   return res.json({success:true,msg:"author edit succesffuly",author});
                }
            }
        }catch (error) {
            console.log("Error   :",error);
            return res.status(409).json({message:'Something went wrong!'});

        }
    },
    deleteAuthor : async function(req,res){
        try {
            let authorfetch =await Author.findOne({id:req.param('id')});
            let timerAssociation =  await Timer.find({author:req.param('id')});
            if(timerAssociation.length > 0){
                return res.json({success:false,msg:"Author is associate with timer table"});
            }
            if(authorfetch){
                 await Author.destroyOne({id: req.param('id')})
            }
                return res.json({success:true,msg:"Author Deleted successfully! "});
        }catch (error) {
            console.log("Error   :",error);
            return res.status(409).json({message:'Something went wrong!'});

        }
    },
    createTask : async function(req,res){
        try {
            if(!req.param('name')
            || !req.param('description')
            ){
                return res.json({message:'All fields are mandatory'});
            }
            let createObj={
                name:req.param('name'),
                description:req.param('description')
            }
            let task=await Task.create(createObj).fetch();
            return res.json({success:true,msg:"task created succesffuly",task});
        }catch (error) {
            console.log("Error   :",error);
            return res.status(409).json({message:'Something went wrong!'});

        }
    },
    editTask : async function(req,res){
        try {
            if(req.method==='GET'){
                let task = await Task.findOne({id:req.param('id')});
                return res.json({success:true,task});;
            }else{
                if(!req.param('name')
                || !req.param('description')
                ){
                    return res.json({message:'All fields are mandatory'});
                }
                let task =await Task.findOne({id:req.param('id')});
                if(task){
                    updateObj={
                        name :req.param('name'),
                        description:req.param('description')
                    }
                  task =  await Task.updateOne({id:req.param('id')},updateObj );
                return res.json({success:true,msg:"Task edit succesffuly",task});
                }
            }
        }catch (error) {
            console.log("Error   :",error);
            return res.status(409).json({message:'Something went wrong!'});

        }
    },
    deleteTask : async function(req,res){
        try {
            let taskfetch =await Task.findOne({id:req.param('id')});
            let timerAssociation =  await Timer.find({task:req.param('id')});
            if(timerAssociation.length > 0){
                return res.json({success:false,msg:"Task is associate with timer table"});
            }
            if(taskfetch){
                 await Task.destroyOne({id: req.param('id')})
            }
            return res.json({success:true,msg:"Task is deleted Successfully!"});
        }catch (error) {
            console.log("Error   :",error);
            return res.status(409).json({message:'Something went wrong!'});

        }
    },
}