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
            var edited = prompt("inserire il valore modificato")
            this.tasks[index] = edited
            document.getElementById(index).innerHTML = edited
            console.log("edited");
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
