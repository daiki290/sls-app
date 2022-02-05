<template>
  <div class="home">
    HelloJapan
    <button @click="test">API実行</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import {task} from "@/models/task/type"
import {TaskRepository} from "@/models/task/taskRepository";
import {TaskService} from "@/models/task/taskService"
export default defineComponent({
  name: 'Home',
  setup(){
    const state = reactive<{message:task[]}>({
      message: []
    });
    const taskService = new TaskService(new TaskRepository());

    const test = async () =>{
      const res = await taskService.getTaskList();
      state.message = res;
    } 
    
    return {
      state,
      test
    }
  }
});
</script>
