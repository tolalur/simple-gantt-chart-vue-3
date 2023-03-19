<script setup lang="ts">
import dayjs from "dayjs";
import {GanttChart} from "@/gantt-chart";

const executorAndTaskList = [
  {
    id: 1, executor: "Трус",
    tasks: [
      {
        start: dayjs('2023-03-16 08:00'),
        end: dayjs('2023-03-16 11:30'),
        color: 'blue'
      },
      {
        start: dayjs('2023-03-16 10:00'),
        end: dayjs('2023-03-16 12:30'),
        color: 'red'
      },
      {
        start: dayjs('2023-03-16 14:30'),
        end: dayjs('2023-03-16 17:00'),
        color: 'orange'
      },
    ]
  },
  {
    id: 2, executor: "Балбес",
    tasks: [
      {
        start: dayjs('2023-03-16 10:00'),
        end: dayjs('2023-03-16 15:00'),
        color: 'blue'
      },
    ]
  },
  {
    id: 3, executor: "Бывалый",
    tasks: [
      {
        start: dayjs('2023-03-16 10:00'),
        end: dayjs('2023-03-16 15:00'),
        color: 'blue'
      },
    ]
  },
  {id: 4, executor: "Супер Директор"},
  {id: 5, executor: "Усталый Товаровед"},
]

const displayedTimePeriod = {
  from: dayjs('2023-03-16 07:00'),
  to: dayjs('2023-03-16 23:00'),
}
</script>

<template>
  <main style="padding-bottom: 2rem">
    <GanttChart
        :tasks="executorAndTaskList"
        :displayed-time-period="displayedTimePeriod"
    />
  </main>
</template>

