<script setup lang="ts">
import { Task } from '@/shared/Task'
import { onMounted, ref } from 'vue'
import { remult } from 'remult'

const tasks = ref<Task[]>()

const taskRepo = remult.repo(Task)
onMounted(async () => {
  tasks.value = await taskRepo.find({
    limit: 3,
    page: 1,
    orderBy: {
      id: 'desc'
    }
  })
})
</script>

<template>
  <div>
    <h1>Tasks</h1>

    <div v-for="task of tasks" :key="task.id">
      <input type="checkbox" v-model="task.completed" />
      {{ task.title }}
    </div>
  </div>
</template>

<style scoped></style>
