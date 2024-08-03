import { Project } from './Project';

export interface ProjectImage {
  id: number;
  path: string;
  viewPriority: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
  idProject: number;
  project: Project | null;
}
