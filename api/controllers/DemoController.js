
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
             await Author.create(createObj);
            return res.json({success:true,msg:"author created succesffuly"});
        }catch (error) {
            console.log("Error   :",error);
            return res.status(409).json({message:'Something went wrong!'});

        }
    },
    editAuthor : async function(req,res){
        try {
            if(req.method==='GET'){
                let task =await Task.find();
                let author = await Author.find();
                let authorfetch =await Author.findOne({id:req.param('id')});
                return res.view('Demo/demo',{task,author,taskfetch:false,authorfetch,deleted:false});
            }else{
                console.log("JJJJJJJNKNK",req.allParams())
                if(!req.param('name')
                || !req.param('email')
                ){
                    return res.json({message:'All fields are mandatory'});
                }
                let authorfetch =await Author.findOne({id:req.param('id')});
                if(authorfetch){
                    updateObj={
                        name :req.param('name'),
                        email:req.param('email')
                    }
                   await Author.update({id:req.param('id')},updateObj );
                   return res.json({success:true,msg:"author edit succesffuly"});
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
            if(authorfetch){
                 await Author.destroyOne({id: req.param('id')})
            }
                let task =await Task.find();
                let author = await Author.find();
                return res.view('Demo/demo',{task,author,taskfetch:false,authorfetch:false,deleted:true});
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
            let HH=await Task.create(createObj).fetch();
            console.log("JJJJJJ",HH)
            return res.json({success:true,msg:"task created succesffuly"});
        }catch (error) {
            console.log("Error   :",error);
            return res.status(409).json({message:'Something went wrong!'});

        }
    },
    editTask : async function(req,res){
        try {
            if(req.method==='GET'){
                let task =await Task.find();
                let author = await Author.find();
                let taskfetch =await Task.findOne({id:req.param('id')});
                return res.view('Demo/demo',{task,author,taskfetch,authorfetch:false,deleted:false});
            }else{
                if(!req.param('name')
                || !req.param('description')
                ){
                    return res.json({message:'All fields are mandatory'});
                }
                let taskfetch =await Task.findOne({id:req.param('id')});
                if(taskfetch){
                    updateObj={
                        name :req.param('name'),
                        description:req.param('description')
                    }
                   await Task.update({id:req.param('id')},updateObj );
                   return res.json({success:true,msg:"Task edit succesffuly"});
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
            if(taskfetch){
                 await Task.destroyOne({id: req.param('id')})
            }
                let task =await Task.find();
                let author = await Author.find();
                return res.view('Demo/demo',{task,author,taskfetch:false,authorfetch:false,deleted:true});
        }catch (error) {
            console.log("Error   :",error);
            return res.status(409).json({message:'Something went wrong!'});

        }
    },
}