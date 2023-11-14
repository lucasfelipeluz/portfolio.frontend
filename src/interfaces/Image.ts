import { Skill, Project } from './';

export default interface ImageFile {
  id: number;
  name: string;
  folder: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date | null;
  projects?: Project[];
  skills?: Skill[];
}
