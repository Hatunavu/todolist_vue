<template lang="">
    <div>
      <div class="todoName">
        <strong>{{ $t('todoName') }}:</strong>
        <div v-if="edit">
          <input type="text" v-model="data.todo_name" />
        </div>
        <div v-else> {{ data.todo_name }}</div>
      </div>
      <div class="note">
        <strong>{{ $t('note') }}:</strong>
        <div v-if="edit">
          <input type="text" v-model="data.note" />
        </div>
        <div v-else> {{ data.note }} </div>
        </div>
    <button @click="updated">{{ `${edit ?  $t('note')  :  $t('note') }`}}</button>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  data() {
    return {
      data: {
        todo_name: '',
        note: '',
        id: null,
      },
      edit: false,
    }
  },
  props: {
    item: {
      type: Object,
    }
  },
  watch: {
    item: {
      handler(newValue) {
        if (newValue) {
          this.data = { ...newValue };
        }
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    updated() {

      if (this.edit) {
        const item = { todo_name: this.data.todo_name, note: this.data.note, id: this.data.id };
        axios.post('http://localhost:3000/todos', item).then(response => {
          console.log(response);
        }).catch(error => {
          console.log(error);
        })
      } else {
        //
      }
      this.edit = !this.edit;
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