<script setup lang="ts">
import type {TimeSequence} from "@/gantt-chart/types/time-sequence";
import {computed} from "vue";
import type {TGantRow} from "@/gantt-chart/types/gantt-row";
import type {TDisplayedTimePeriod} from "@/gantt-chart/types/time-period";
import {generateTimeSequence} from "@/gantt-chart/utils/generate-time-sequence";
import GanttChartTimeCell from "@/gantt-chart/components/GanttChartTimeCell.vue";

const props = defineProps<{ row: TGantRow, displayedTimePeriod: TDisplayedTimePeriod }>();

const timelineList = computed<TimeSequence[][]>(() => {
  if (props.row.tasks && props.row.tasks.length > 0) {
    return props.row.tasks.map(task => generateTimeSequence(props.displayedTimePeriod, task))
  }

  return Array(props.row.tasks?.length ?? 1).fill([]).map(() => generateTimeSequence(props.displayedTimePeriod))
});

</script>

<template>
  <div class="gantt-chart-row">
    <div class="gantt-chart-row__title">{{ props.row.executor }}</div>
    <div class="gantt-chart-row-timeline">
      <div
          class="gantt-time-period"
          v-for="timeLine in timelineList">
        <GanttChartTimeCell
            v-for="cell in timeLine"
            :key="cell"
            :data="cell"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../assets/gantt-chart-style";

.gantt-chart-row {
  border-right: $border;
  border-left: $border;
  display: flex;

  &__title {
    width: $title-cell-width;
    max-width: $title-cell-width;
    border-bottom: $border;
  }

  &__timeline {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }
}

.gantt-time-period {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax($base-cell-width, 1fr);
  text-align: center;
  height: 40px
}
</style>
