export class Task {
  constructor(
    public id: number,
    public name: string,
    public created_date: Date,
    public due_date: Date,
    public start_date: Date,
    public is_completed: boolean,
    public is_archived: boolean,
    public estimated_effort: number,
    public actual_effort: number,
    public physical_progress: number,
    public obj_status: string,
    public description: string,
    public project_id: number,
    public tags?: Array<string>,
    public is_high_priority?: boolean
  ) { }
}
