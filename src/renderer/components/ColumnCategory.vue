<template>
    <n-menu :options="menuOptions" />
</template>

<script lang="ts">
import {defineComponent, h} from 'vue';
import {NMenu} from 'naive-ui';
import type { MenuOption } from 'naive-ui';

const menuOptions: MenuOption[] = [
  {
    label: () => h('span', null, "Hello"),
    key: 'hello'
  },
  {
    label: () => h('span', null, "Menu"),
    key: 'menu'
  },
]
export default {
  components: {
    NMenu
  },
  setup() {
    return {
      menuOptions
    }
  }
};
</script>