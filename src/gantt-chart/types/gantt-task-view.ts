import type {Dayjs} from "dayjs";

export type Task = {
  id?: number,
  start: Dayjs,
  end: Dayjs,
  color: string,
}

export interface IGanttTaskView extends Task {
  duration: number;
}
