const tasks = {
    tasks:[{
        text: 'Grocerry',
        completed: true
    }, {
        text: 'Clean',
        completed: false
    }, {
        text: 'Film',
        completed: false
    }],
    getTaskToDo(){
        return this.tasks.filter(task => task.completed !== true);
    }
}


console.log(tasks.getTaskToDo())