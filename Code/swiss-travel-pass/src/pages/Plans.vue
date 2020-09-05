<template>
  <q-page class="q-pa-lg">
    <h5 class="q-mt-none">My Plans</h5>

    <ul>

      <li 
      v-for="interest in selectedInterests" 
      :key="interest.title"
      clickable
      v-ripple>
        <q-img class="interest" :src="interest.image" />
          <div class="interest__title">{{ interest.title }}</div>
      </li>

    </ul>

  </q-page>

</template>

<script>
import Store from 'components/Store.vue'

export default {
  name: 'PageIndex',
  data() {
    return {
      interests: Store.data.interests
    }
  },
  computed: {
    selectedInterests: function() {
      return this.interests.filter(i => i.selected);
    }
  }
}
</script>

<style scoped lang="scss">
ul {
  padding: 0;
  margin: 0;
}
li {
  list-style-type: none;
  width: 100%;
  height: 200px;
  position: relative;
  display: block;
  margin: 1em 0;

  div {
    border-radius: 3px;
  }
}


.interest {
  position: absolute;
  width: 100%;
  height: 100%;
}
.interest__title {
  position: absolute;
  background: rgba(8, 8, 8, 0.5);
  color: white;
  font-size: 1.5em;
  text-transform: uppercase;
  letter-spacing: 0.25em;
  font-weight: bold;
  width: 100%;
  height: 100%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>