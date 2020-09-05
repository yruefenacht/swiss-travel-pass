<template>
  <q-page class="q-pa-lg bg-grey-3">
    <h5 class="q-mt-none">Detailplan</h5>

    <q-list class="bg-white" separator>

      <q-item 
      v-for="interest in interests" 
      :key="interest.title"
      @click="interest.selected = !interest.selected"
      v-ripple
      clickable>
        <q-item-section avatar>
          <q-checkbox 
          v-model="interest.selected" 
          color="primary"
          class="no-pointer-events" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{interest.title}}</q-item-label>
        </q-item-section>
      </q-item>

    </q-list>

  </q-page>
</template>

<script>

</script>