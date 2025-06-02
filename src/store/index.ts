import { AboutMe } from 'src/types/AboutMe';
import Skill from 'src/types/Skill';
import aboutMeJSON from './about_me.json';
import projectsAndSkillsJSON from './projects_skills.json';

export function getAboutMe(): AboutMe {
  return aboutMeJSON;
}

export function getProjects() {
  return projectsAndSkillsJSON.projects;
}

export function getSkills(): Skill[] {
  return projectsAndSkillsJSON.skills;
}
