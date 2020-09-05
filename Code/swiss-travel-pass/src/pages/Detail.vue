<template>
  <q-page class="q-pa-lg bg-grey-3">
    <h5 class="q-mt-none">Reiseplan</h5>

    <q-list class="qlist">
      <q-item class="qitem">
        <div class="line"></div>
        <div class="time"><q-icon name="train"/>&emsp;13:00 - 13:15</div>
      </q-item>
      <q-item class="qitem">
        <div class="line"></div>
        <div class="time"><q-icon name="directions_walk"/>&emsp;13:15 - 14:00</div>
      </q-item>
    </q-list>

    <button class="book" @click.stop="bookTravel()">Buchen</button>

  </q-page>
</template>

<script>

export default {
  name: 'PageIndex',
  data() {
    return {
      test: "test"
    }
  },
  methods: {
    bookTravel() {

      //Show dialog
      this.$q.dialog({
        title: 'Bestätigen',
        message: 'Wollen Sie diese Reise buchen?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        
      }).onOk(() => {

      }).onCancel(() => {
        
      }).onDismiss(() => {
        
      })
    }
  }
}
</script>

<style scoped>

.qlist {
  margin: 0;
  padding: 0;
}
.qitem {
  margin: 1em 0;
  padding: 0;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #555;
}
.line {
  width: 3px;
  height: 100%;
  background: #ccc;
  position: absolute;
  left: 3%;
}
.time {
  font-size: 2em;
}
.book {
  margin: 1em auto;
  width: 100%;
  padding: 1em 0;
  background: #333;
  color: white;
  border: none;
  font-size: 1.5em;
  text-transform: uppercase;
  letter-spacing: 0.25em;
  font-weight: bold;
}
</style>