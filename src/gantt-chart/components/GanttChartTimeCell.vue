<script setup lang="ts">
import type {TimeSequence} from "@/gantt-chart/types/time-sequence";
import GanttChartTaskView from "@/gantt-chart/components/GanttChartTaskView.vue";

const props = defineProps<{ data: TimeSequence }>();
</script>

<template>
  <div class="gantt-time-period-cell">
    <GanttChartTaskView
        v-if="props.data.task"
        :data="props.data.task"
    />
  </div>
</template>

<style lang="scss">
.gantt-time-period-cell {
  position: relative;
  outline: none;

  border-bottom: 0.5px solid #e9eaeb;

  &:first-child {
    border-left: 0.5px solid #e9eaeb;
  }

  &:last-child {
    border-right: 0.5px solid #e9eaeb;
  }

  &:nth-child(2n) {
    border-right: 0.5px solid #e9eaeb;
  }
}
</style>
