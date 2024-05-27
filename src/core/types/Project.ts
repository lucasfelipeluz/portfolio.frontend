import ISkill from './Skill';

export default interface IProject {
  id: number;
  title: string;
  description: string;
  urlWebsite: string;
  urlGithub: string;
  viewPriority: number;
  isActive?: boolean;
  createdAt?: string;
  updatedAt?: string;
  startedAt: string;
  finishedAt: string;
  skills?: ISkill[];
}
