import Vue from "vue";
import ('bulma/css/bulma.css').then(bulma=>bulma)
Vue.config.devtools = true
var vm = new Vue({
  el: "#app",
  data: {
    message: "Hello World from my own vue configuration",
    todos: [],
  },
  methods: {
    async fetchTodos() {
      return this.todos = await (
        await fetch("https://jsonplaceholder.typicode.com/todos")
      ).json();
    },
     deleteItem : function(id){
      let element = this.todos.filter(element =>{
        if(element.id ===id){
          delete element
        } 
      })
      // let index = this.todos.indexOf(element[0])
      // return this.todos.splice(index,1)
      //  console.log(this.todos.splice(index,1))
    }
  },
  mounted() {
    this.fetchTodos();
    // setTimeout(()=>{

    //   this.delete(0)
    // },3000)
  },
  
  
  //   render: (h) => h(el),
});
if(module.hot){
  module.hot.accept()
}