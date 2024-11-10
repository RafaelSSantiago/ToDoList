export interface InputCreateTodoDTOs {
  title: string;
  description: string;
}

export interface OutputCreateTodoDTOs {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
  completed: boolean;
}