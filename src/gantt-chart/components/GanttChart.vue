<script setup lang="ts">
import GanttChartHeader from "@/gantt-chart/components/GanttChartHeader.vue";
import GanttChartRow from "@/gantt-chart/components/GanttChartRow.vue";
import type {TGantRow} from "@/gantt-chart/types/gantt-row";
import type {TDisplayedTimePeriod} from "@/gantt-chart/types/time-period";

defineProps<{ tasks: TGantRow[], displayedTimePeriod: TDisplayedTimePeriod }>();
</script>

<template>
  <div role="gantt-chart"  class="gantt-chart">
    <GanttChartHeader
        :title="'Сотрудник'"
        :displayed-time-period="displayedTimePeriod"
    />
    <GanttChartRow
        v-for="row in tasks"
        :key="row.id"
        :row="row"
        :displayed-time-period="displayedTimePeriod"
    />
  </div>
</template>
