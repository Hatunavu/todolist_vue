<template lang="">
    <div class="create-todo-container">
        <h2 class="create-todo-title">{{ $t('createNewTodo') }}</h2>
        <form class="create-todo-form">
        <div class="create-todo-form-group">
            <label for="todo_name" class="create-todo-label">{{ $t('todoName') }}</label>
            <input type="text" id="todo_name" v-model="todo_name" class="create-todo-input" required>
        </div>
        <div class="create-todo-form-group">
            <label for="note" class="create-todo-label">{{ $t('note') }}</label>
            <input type="text" id="note" v-model="note" class="create-todo-input" required>
        </div>
        <button type="submit" @click.prevent="addItem" class="create-todo-button">{{ $t('save') }}</button>
        </form>
    </div>
</template>
<script>
  import axios from 'axios';
  import { v4 as uuidv4 } from 'uuid';
    export default {
        data(){
            return {
                todo_name: '',
                note: ''
            }
        },
        methods: {
            addItem() {
                const item = { todo_name: this.todo_name, note: this.note , id: uuidv4()};

                axios.post('http://localhost:3000/todos', item).then(response=>{
                  console.log(response);
                  this.$router.go(-1);
                }).catch(error => {
                  console.log(error);
                })

            }
        }
    }
</script>
<style>
    .create-todo-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.create-todo-title {
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
}

.create-todo-form {
  display: flex;
  flex-direction: column;
}

.create-todo-form-group {
  margin-bottom: 10px;
}

.create-todo-label {
  font-weight: bold;
  margin-bottom: 5px;
}

.create-todo-input {
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
}

.create-todo-button {
  margin-top: 10px;
  padding: 5px;
  border: none;
  border-radius: 5px;
  background-color: #4caf50;
  color: white;
  cursor: pointer;
}

.create-todo-link {
  display: block;
  margin-top: 20px;
  text-align: center;
  color: #4caf50;
}
</style>