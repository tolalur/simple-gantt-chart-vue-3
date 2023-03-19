import type {Task} from "@/gantt-chart/types/gantt-task-view";

export type TGantRow = {
  id: number,
  executor: string,
  tasks?: Task[]
}
