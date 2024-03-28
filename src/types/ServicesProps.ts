export interface ProjectProps {
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
  skills?: SkillProps[];
}

export interface SkillProps {
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
  projects?: ProjectProps[];
}

export interface AboutMeProps {
  id: number;
  name: string;
  text: string;
  jobTitle: string;
  telegramLink: string;
  instagramLink: string;
  linkedinLink: string;
  githubLink: string;
  isAvailable: boolean;
}

export interface ActivityProps {
  id: number;
  title: string;
  description: string;
  icon: string;
  createdAt: string;
}

export interface HomeProps {
  projects: ProjectProps[];
  skills: SkillProps[];
  aboutMe: AboutMeProps;
  activities: ActivityProps[];
}

export interface ResponseServices<T> {
  status: boolean;
  data?: T[];
  info?: {
    msgError?: any;
    msg?: string;
  };
}

export interface LoginProps {
  email: string;
  password: string;
}

export interface Services {
  getAll<T>(): Promise<T[]>;
  getById<T>(id: number | string): Promise<T[]>;
  post<T>(data: T): Promise<ResponseServices<T>>;
  put<T>(id: number | string, data: T): Promise<ResponseServices<T>>;
  delete<T>(id: number | string): Promise<ResponseServices<T>>;
}

export interface BaseUrl {
  apiUrl?: string;
  apiHost?: number;
}
