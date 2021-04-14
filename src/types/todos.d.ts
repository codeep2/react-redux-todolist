export interface ToDoItemType {
  id: number;
  text: string;
  completed: boolean;
}

export interface ToDoActionType {
  type: string;
  id: number;
  text: string;
}
