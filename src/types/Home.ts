import { AboutMe } from './AboutMe';
import { Project } from './Project';
import Skill from './Skill';

interface Home {
  projects: Project[];
  skills: Skill[];
  aboutMe: AboutMe;
}

export default Home;
