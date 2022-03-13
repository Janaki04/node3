const get=(req,res)=>{
   
    const user=[
        {id:1,name:"Apple"},
        {id:2,name:"Orange"},
        {id:3,name:"Banana"},
        {id:4,name:"Mango"}


    ]
    if(req.params.name){
        const newuser=user.filter(value=>value.name==req.params.name)
        res.send(newuser)
    }
    
    else{
        res.send(user)
    }
}
module.exports.employeeGet=get