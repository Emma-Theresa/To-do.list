import express from "express";
import bodyParser from "body-parser";


const app=express();
const port=3000;
var tasks=[];
var workTasks=[];



app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"))


app.get("/", (req,res)=>{
    res.render("index.ejs");
});
app.get("/week",(req,res)=>{
    res.render("week.ejs");
  });


app.post("/", (req,res)=>
 {
   const task=req.body["newItem"];
   tasks.push(task);
   const len=tasks.length;
   res.render("index.ejs",{
    newTask:tasks,
    taskLen:len
   });
   
 });

 app.post("/week", (req,res)=>
 {
   const workTask=req.body["newItem"];
   workTasks.push(workTask);
   const leng=workTasks.length;
   res.render("week.ejs",{
    newTasks:workTasks,
    taskLeng:leng
   });
   
 });


app.listen(port,()=>{
    console.log(`Server running on port ${port}.`);
});