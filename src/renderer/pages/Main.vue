<script lang="ts">
import Hello from '../components/Hello.vue';
import {Splitpanes, Pane} from 'splitpanes';
import 'splitpanes/dist/splitpanes.css'

export default {
    components: {
        Splitpanes,
        Pane,
        Hello
    }
};
</script>
<template>
    <splitpanes style="height: 400px">
        <pane min-size="20">1</pane>
        <pane>
            <splitpanes horizontal>
            <pane>2</pane>
            <pane>3</pane>
            <pane>4</pane>
            </splitpanes>
        </pane>
        <pane>5</pane>
    </splitpanes>
    
</template>

<style>
.splitpanes__pane {
  box-shadow: 0 0 3px rgba(0, 0, 0, .2) inset;
  justify-content: center;
  align-items: center;
  display: flex;
}
</style>