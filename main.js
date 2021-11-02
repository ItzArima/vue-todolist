const app = new Vue({
    el: '#root',
    data: {
        tasks: [
            'alzarsi',
            'lavarsi',
            'fai la spesa'
        ],
        completed: [

        ],
        cestino: [

        ],
        reset: 0,
        identifier : 0,
    },
    methods:{
        newTodo(){
            var input = document.getElementById("todoInput");
            var task = input.value;
            console.log(task);
            this.tasks.push(task)
            input.value  =''
            if(app.reset == 1){
                document.getElementById("no-tasks").style.display = "none"
                app.reset = 0
            }
        },
        remove(index){
            console.log(index);
            this.completed.push(this.tasks[index])
            this.tasks.splice(index, 1)
            if(this.tasks.length == 0) {
                document.getElementById("no-tasks").style.display = "block"
                app.reset = 1;
                console.log("reset");
            } 
        },
        alert(index){
            alert("il task '"+ this.completed[index]+ "' è stata completato")
        },
        del(index){
            this.cestino.push(this.completed[index])
            this.completed.splice(index, 1)
            console.log("deleted");
        },
        edit(index){
            var edit = document.getElementById(index)
            edit.innerHTML = `
                <input type="text" id ="editing">
                <button onclick="confirmEdit()" >Edit</button>
            `
            document.getElementById("editing").value = this.tasks[index]
            this.identifier = index 
        },
        delAll(){
            var confirm = prompt("After this command you will not be able to get your data back, type 'Y' for yes and 'N' for not")
            console.log(confirm);
            if(confirm == "Y"){
                if(this.cestino.length>0){
                    this.cestino = [];
                    console.log("deleted all");
                }
                else{
                    alert("there's nothing to delete")
                }
            }    
            else{
                alert("Action cancelled")
            }
        },
        reRun(index){
            this.tasks.push(this.completed[index])
            this.completed.splice(index, 1)
            if(app.reset == 1){
                document.getElementById("no-tasks").style.display = "none"
                app.reset = 0
            }
        },
        reDo(index){
            this.tasks.push(this.cestino[index])
            this.cestino.splice(index , 1)
            if(app.reset == 1){
                document.getElementById("no-tasks").style.display = "none"
                app.reset = 0
            }
        }
    },
})

var input =document.getElementById("todoInput")
input.addEventListener('keyup', function(event){
    if (event.keyCode === 13) {
        event.preventDefault();
        app.newTodo();
    }
})

function confirmEdit(){
    var edited = document.getElementById("editing").value
    app.tasks[app.identifier] = edited
    console.log(edited);
    var identifier = app.identifier
    console.log(identifier);
    var selector = document.getElementById(identifier)
    selector.innerHTML = edited 
} 

