<template lang="">
    <div>
        <router-link to="/create">{{ $t('createNew') }}</router-link>
        <div class="container">
            <h1 class="title">{{ $t('todoList') }}</h1>
            <ul class="list">
            <li v-for="(item, index) in todos" :key="index" class="item">
                <ItemTodo :item="item"></ItemTodo>
            </li>
            </ul>
        </div>
    </div>
</template>
<script>
import ItemTodo from "./ItemTodo.vue";
import axios from 'axios';
export default {
    data() {
        return {
            todos: []
        }
    },
    components: {
      ItemTodo
    },
    mounted() {
      axios.get('http://localhost:3000/todos').then(response => {
        this.todos = response.data;
      }).catch(error => {
        console.log(error);
      });
    }
}
</script>
<style>


.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.title {
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
}

.list {
  list-style: none;
  padding: 0;
}

.item {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
}

.todoName {
  font-weight: bold;
  margin-bottom: 5px;
}

.note {
  margin-top: 5px;
}
</style>