import type {TimeCellType, TimeSequence} from "@/gantt-chart/types/time-sequence";
import type {TDisplayedTimePeriod} from "@/gantt-chart/types/time-period";
import * as dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import isBetween from 'dayjs/plugin/isBetween';
import {allCaseCheck} from "@/gantt-chart/utils/all-case-check";
import type {IGanttTaskView, Task} from "@/gantt-chart/types/gantt-task-view";
import type {Dayjs} from "dayjs";

dayjs.extend(duration)
dayjs.extend(isBetween)

export const timePeriodMultiplier = {
  timeSequence(timePeriodType: TimeCellType) {

    switch (timePeriodType) {
      case "day":
        return 1;
      case "hour":
        return 2;
      default:
        return allCaseCheck()
    }
  },

  timeSequenceHeader(timePeriodType: TimeCellType) {

    switch (timePeriodType) {
      case "day":
        return 1;
      case "hour":
        return 1;
      default:
        return allCaseCheck()
    }
  }
}

function addTaskOrNot(task: Task, currenTime: Dayjs): IGanttTaskView | undefined {
  const {start, end} = task

  if (start.isBetween(currenTime, currenTime.add(30, 'minutes'), 'minutes', '[)')) {
    return {
      ...task,
      duration: Math.abs(dayjs.duration(start.diff(end)).asHours()),
    }
  }
}

export function generateTimeSequence(timePeriod: TDisplayedTimePeriod, task?: Task, timePeriodType: TimeCellType = 'hour'): TimeSequence[] {
  const {from, to} = timePeriod;
  const periodDiff = dayjs.duration(to.diff(from));
  const multiplier = timePeriodMultiplier.timeSequence(timePeriodType);

  return Array(Math.abs(periodDiff.asHours()) * multiplier)
    .fill(null)
    .map((el, index) => ({
      type: 'hour',
      id: index,
      task: task ? addTaskOrNot(task, index == 0 ? from : from.add(index * 30, 'minutes')) : undefined
    }))
}

export function generateHeaderTimeSequence(timePeriod: TDisplayedTimePeriod, timePeriodType: TimeCellType = 'hour'): string[] {
  const {from, to} = timePeriod;

  const periodDiff = dayjs.duration(to.diff(from));
  const multiplier = timePeriodMultiplier.timeSequenceHeader(timePeriodType);


  return Array(Math.abs(periodDiff.asHours()) * multiplier)
    .fill(null)
    .map((el, index) => index == 0
      ? from.format('HH:mm').toString()
      : from.add(index, 'h').format('HH:mm').toString())
}
