<template>
    <n-menu mode="horizontal" :options="menuOptions"/>
</template>
<script lang="ts">
import { NMenu } from 'naive-ui';
import { h } from 'vue';

export default {
    components: {
        NMenu
    },
    data() {
        return {
            menuOptions: [
                {
                    label: () => h('span', null, "Favourite"),
                    key: "Favourite"
                },
                {
                    label: () => h('span', null, "Read"),
                    key: "Read"
                },
                {
                    label: () => h('span', null, "SaveOffline"),
                    key: "SaveOffline"
                },
                {
                    label: () => h('span', null, "ReadMode"),
                    key: "ReadMode"
                }
            ]
        }
    }
}
</script>