<template>
    <pane min-size="45" class="article-detail">
        <div>
            <h2>Article Detail</h2>
            <article-toolbar/>
        </div>
    </pane>

</template>

<script lang="ts">
import {Pane} from 'splitpanes';
export default {
    components: {
        Pane
    },
    data() {
        return {}
    }
}
</script>

<style>
.article-detail {
    position: relative;
    flex-grow: 1;
    height: 100%;
}
</style>