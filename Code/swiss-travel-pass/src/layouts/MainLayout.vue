<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
        
      </q-toolbar>

      <div class="q-px-lg q-pt-xl q-mb-md">
        <div class="text-h3">{{ title }}</div>
        <div class="text-subtitle1">Made in Bern</div>
      </div>

      <q-img
        src="~assets/header-bg.jpg"
        class="header-image absolute-top" />

    </q-header>

    <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        :width="250"
        :breakpoint="600">

        <q-scroll-area style="height: calc(100% - 192px); margin-top: 192px; border-right: 1px solid #ddd">
          <q-list padding>

            <q-item clickable v-ripple to="/">
              <q-item-section avatar>
                <q-icon name="list" />
              </q-item-section>

              <q-item-section>
                Plans
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple to="/interests">
              <q-item-section avatar>
                <q-icon name="star" />
              </q-item-section>

              <q-item-section>
                Interests
              </q-item-section>
            </q-item>

          </q-list>
        </q-scroll-area>

        <q-img class="absolute-top" src="~assets/header-bg-dark.jpg" style="height: 192px;">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="~assets/drawer-avatar.jpg">
            </q-avatar>
            <div class="text-weight-bold">Yannick Rüfenacht</div>
            <div>@yruefenacht</div>
          </div>
        </q-img>
      </q-drawer>

    <q-page-container>
      <keep-alive>
        <router-view />
      </keep-alive>
    </q-page-container>
  </q-layout>
</template>

<script>
import Store from 'components/Store.vue'

export default {
  name: 'MainLayout',
  data () {
    return {
      leftDrawerOpen: false,
      interests: Store.data.interests,
      title: "Swiss Travel Pass"
    }
  },
  watch: {
    '$route' (to, from) {
      this.title = to.meta.title || 'Swiss Travel Pass'
    }
  },
}
</script>

<style scoped>
.header-image {
  height: 100%;
  z-index: -1;
  opacity: 0.3;
}
</style>