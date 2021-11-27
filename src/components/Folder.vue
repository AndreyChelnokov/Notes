<template>
  <div class="folder">
    <router-link :name="'/' + name" :to="'/' + name">{{ name }}</router-link>
  </div>
</template>

<script>
export default {
  name: 'Folder',
  props: {
    name: String
  }
}
</script>
