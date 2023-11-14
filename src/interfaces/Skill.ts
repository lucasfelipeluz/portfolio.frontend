import { Project, ImageFile } from './';

export default interface Skill {
  id: number;
  title: string;
  description: string;
  experience: number;
  color: string;
  icon: string;
  viewPriority: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date | null;
  projects?: Project[];
  images?: ImageFile[];
}
