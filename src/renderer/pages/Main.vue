<script lang="ts">
import Hello from '../components/Hello.vue';
import {Splitpanes, Pane} from 'splitpanes';
import 'splitpanes/dist/splitpanes.css';

export default {
    components: {
        Splitpanes,
        Pane,
        Hello
    },
    mounted() {
        this.$store.dispatch('initDB').then(async () => {
            console.log('dispatched initDB');
        })
    }
};
</script>
<template>
    <splitpanes id="colums">
        <pane min-size="20">
            <column-category/>
        </pane>
        <pane>article-list</pane>
        <article-detail/>
    </splitpanes>
</template>

<style>
#colums {
    height: 100%;
}
.splitpanes__pane {
  box-shadow: 0 0 3px rgba(0, 0, 0, .2) inset;
  justify-content: center;
  align-items: center;
  display: flex;
}
</style>