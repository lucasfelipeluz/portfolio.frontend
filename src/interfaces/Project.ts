import { Skill, ImageFile } from './';

export default interface Project {
  id: number;
  title: string;
  description: string;
  urlWebsite: string;
  urlGithub: string;
  viewPriority: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date | null;
  startedAt: Date | null;
  finishedAt: Date | null;
  skills?: Skill[];
  images?: ImageFile[];
}
