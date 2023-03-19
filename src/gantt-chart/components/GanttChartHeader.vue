<script setup lang="ts">
import type {TDisplayedTimePeriod} from "@/gantt-chart/types/time-period";
import {computed} from "vue";
import {generateHeaderTimeSequence} from "@/gantt-chart/utils/generate-time-sequence";

const props = defineProps<{ displayedTimePeriod: TDisplayedTimePeriod, title: string }>();
const timeline = computed<string[]>(() => {
  return generateHeaderTimeSequence(props.displayedTimePeriod)
})
</script>

<template>
  <div class="gantt-chart-header">
    <div class="gantt-chart-header__title">{{ props.title }}</div>
    <div class="gantt-chart-header__timeline">
      <div
          class="gantt-chart-header__period-cell"
          v-for="el in timeline"
      >
        {{el}}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../assets/gantt-chart-style";

.gantt-chart-header {
  border: $border;
  display: flex;

  &__title {
    text-align: center;
    width: $title-cell-width;
    max-width: $title-cell-width;
  }

  &__timeline {
    display: flex;
  }

  &__period-cell {
    width: $base-cell-width * 2;
    max-width: $base-cell-width * 2;
    text-align: center;
  }
}
</style>
