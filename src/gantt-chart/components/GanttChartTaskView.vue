<script setup lang="ts">
import type {IGanttTaskView} from "@/gantt-chart/types/gantt-task-view";
import {computed} from "vue";

const props = defineProps<{ data: IGanttTaskView }>();

const taskStyle = computed(() => {
  const width = props.data.duration * 30 * 2 + 'px';
  const backgroundColor = props.data.color;

  return {
    width,
    backgroundColor
  }
})
</script>

<template>
  <div class="gantt-time-period-cell-task" :style="taskStyle">
    {{ props.data.id }}
  </div>
</template>

<style lang="scss">
.gantt-time-period-cell-task {
  position: absolute;
  top: 4px;
  height: 32px;
  border-radius: 4px;
  z-index: 1;
}
</style>
