<template>
  <div class="todo-app">
    <header class="header">
      <h1 class="subtitle is-2">Todo app</h1>
      <input class="input is-info is-hovered"
      autofocus autocomplete="off"
      placeholder="add your tasks"
      v-model="newTodo"
      @keyup.enter="addTodo">
     <section class="section">
       <div class="todoli" v-for="(todo, index) in todos" :key="todo.key">
         <div class="col">
           {{ todo.title }}
         </div>
         <div class="removetodo" @click="removeTodo(index)">
           X
         </div>
       </div>
     </section>
    </header>
  </div>
</template>

<script>
export default {
  data () {
    return {
      idforTodo: 1,
      newTodo: '',
      todos: [
        {
          id: '1',
          title: 'Hello I am a task',
          completed: false
        }
      ]
    }
  },
  methods: {
    addTodo () {
      if (this.newTodo.trim().length === 0) {
        return
      }
      this.todos.push({
        id: this.idforTodo,
        title: this.newTodo,
        completed: false
      })
      this.newTodo = ''
      this.idforTodo++
    },
    removeTodo (index) {
      this.todos.splice(index, 1)
      return this.todos
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .input {
    width: 22rem
  }
  .todo-item {
    margin-bottom: 12px;
    display: inline-block;
    align-items: center;
    justify-content: space-between;
    text-align: center;
  }
  .remove-item {
    cursor: pointer;
    margin-left: 14px;
  }
  .remove-item:hover {
    color: blue;
  }
  .header {
    font-family: 'Courier New', Courier, monospace;
  }
  .container {
    width: 100px;
    height: 100px;
    float: left;
  }
  .todoli {
    display: -webkit-box;
    text-align: center;
    border: 1px solid rgba(28, 187, 113, 0.603);
    border-radius: 20px;
    border-width: 8px;
    width: 22rem;
    height: 50px;
    margin-left: 420px;
  }
</style>
