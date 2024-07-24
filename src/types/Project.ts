import Skill from './Skill';

export interface Project {
  id: number;
  title: string;
  description: string;
  urlWebsite: string;
  urlGithub: string;
  viewPriority: number;
  startedAt: string;
  finishedAt: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
  skills: Skill[];
  images: unknown[];
}
