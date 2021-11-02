const app = new Vue({
    el: '#root',
    data: {
        tasks: [
            'alzarsi',
            'lavarsi',
            'fai la spesa'
        ],
    },
    methods:{
        newTodo(){
            var input = document.getElementById("todoInput");
            var task = input.value;
            console.log(task);
            this.tasks.push(task)
            input.value  =''
        },
        remove(index){
            this.tasks.splice(index, 1)
        }
    },
})