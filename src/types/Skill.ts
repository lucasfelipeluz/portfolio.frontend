import { Project } from './Project';

interface Skill {
  id: number;
  title: string;
  description: string;
  startedAt: string;
  icon: string;
  color: string;
  viewPriority: number;
  createdAt: string;
  projects: Project[];
}

export default Skill;
