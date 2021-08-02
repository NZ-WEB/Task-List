<template>
  <header class="navbar" >
    <h3>Cписок заметок @nzweb</h3>
    <h4>{{ $store.state.counter }}</h4>
    <ul class="navbar-menu">
      <li>
        <router-link to="/">
          Все заявки
        </router-link>
      </li>
      <li>
        <router-link to="/new">
          Создать заявку
        </router-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {

}
</script>
