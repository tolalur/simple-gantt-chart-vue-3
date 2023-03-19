import type {IGanttTaskView} from "@/gantt-chart/types/gantt-task-view";

export type TimeCellType = 'day' | 'hour';

export type TimeSequence = {
  type: TimeCellType;
  id: number,
  task?: IGanttTaskView
}
