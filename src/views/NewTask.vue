<template>
  <form class="card" @submit.prevent="submit">
    <h1>Создать новую задачу</h1>
    <div class="form-control">
      <label for="title">Название</label>
      <input type="text" id="title" v-model="name">
    </div>

    <div class="form-control">
      <label for="date">Дата дэдлайна</label>
      <input type="date" id="date" v-model="date">
    </div>

    <div class="form-control">
      <label for="description">Описание</label>
      <textarea id="description" v-model="desc"></textarea>
    </div>
    <button class="btn primary" :disabled="!isValid">Создать</button>
  </form>
</template>


<script>
import {
  ref,
  computed,
} from 'vue'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'

export default {
  setup() {
    const store = useStore()
    const router = useRouter()
    const name = ref('')
    const date = ref(null)
    const desc = ref('')

    const submit = () => {
      const newTask = {
        id: Date.now().toString(),
        title: name.value,
        date: new Date(date.value).setHours(23,59,59,999),
        desc: desc.value,
        status: 'active'
      }

      store.dispatch('createTask', newTask)
      router.push('/')
    }

    const isValid = computed(() => {
      return name.value !== '' &&
          date.value && desc.value !== ''
    })

    return {
      submit,
      name,
      date,
      desc,
      isValid,
    }
  }
}
</script>
