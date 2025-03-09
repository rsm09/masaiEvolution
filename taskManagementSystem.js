let task=[]
function addTask(title){
        let objet= {
            title: title,
            status: "pending"
        }
        task.push(objet)
  
}

function markComplete(work){
    let marked = task.map(ele=>{
   if(ele.title == work){
        ele.status="completed"
   }
   return ele })
    console.log("Marked:-")
    console.log(marked)
}

function completedTask(task){
    console.log("Completed Task:-")
    let completedTask = task.filter(ele=>ele.status=="completed")
    completedTask.forEach(element => {

        console.log(element.title)
    })
}

function pendingTask(task){
    console.log("Pending Task:-")
    let completedTask = task.filter(ele=>ele.status=="pending")
    completedTask.forEach(element => {
        console.log(element.title)
    })
}

function allTask(task){
    console.log("All task:-")
    task.sort((a,b)=>{
        if(a.title.toLowerCase() > b.title.toLowerCase()){
            return 1
        } else {
            return -1
        }
    })
    task.forEach(element => {
        console.log(element.title +":- "+element.status)
    })
}

function countTask(task){
    console.log("Count:-")
    let count=task.reduce((acc,curr)=>{
        acc[curr.status]?acc[curr.status]++ : acc[curr.status]=1
        return acc
    },{})
    console.log(count)
}

addTask("coding")
addTask("sleeping")
addTask("Eat")
markComplete("Eat")
addTask("Exercise")
markComplete("coding")
completedTask(task)
pendingTask(task)
allTask(task)
countTask(task)

