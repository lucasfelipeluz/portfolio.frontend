import IProject from './Project';

export default interface ISkill {
  id: number;
  title: string;
  description: string;
  experience: string;
  color: string;
  icon: string;
  viewPriority: number;
  isActive?: boolean;
  createdAt?: string;
  updatedAt?: string;
  projects?: IProject[];
}
