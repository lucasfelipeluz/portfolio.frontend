import { UserLogged } from '../../types/Auth';
import LoginType from '../enum/LoginType';
import IAboutMe from './AboutMe';
import IActivity from './Activity';
import IProject from './Project';
import ISkill from './Skill';

export interface HomeProps {
  projects: IProject[];
  skills: ISkill[];
  aboutMe: IAboutMe;
  activities: IActivity[];
}

export interface LoginProps {
  type: LoginType;
  nickname: string;
  email: string;
  password: string;
}

export interface RegisterProps {
  type: LoginType;
  name: string;
  password: string;
  nickName: string;
}

export interface LoginResponse {
  message: string;
  success: boolean;
  data: {
    user: UserLogged;
    token: string;
  };
}
