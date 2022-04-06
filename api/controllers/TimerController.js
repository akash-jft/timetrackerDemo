
module.exports = {
    timer : async function(req,res){
        try {
            if(req.method==='GET'){
                let task =await Task.find();
                let author = await Author.find();
                let timer = await Timer.find();
                return res.view('Demo/timer',{task,author,timer,taskfetch:false,authorfetch:false,deleted:false});
            }
            else{
                
            }
        }catch (error) {
            console.log("Error   :",error);
            return res.status(409).json({message:'Something went wrong!'});

        }
    },
    createTimer : async function(req,res){
        try {
            if(!req.param('name')
            || !req.param('author')
            || !req.param('task')
            ){
                return res.json({message:'All fields are mandatory'});
            }
            let task =await Task.findOne({id:req.param('task')});
            let author = await Author.findOne({id:req.param('author')});
            if(task || author){
            let createObj={
                name:req.param('name'),
                task:task.name,
                author:author.name,
            }
            await Timer.create(createObj);
           }
            return res.json({success:true,msg:"Timer created succesffuly"});
            
        }catch (error) {
            console.log("Error   :",error);
            return res.status(409).json({message:'Something went wrong!'});

        }
    },
}