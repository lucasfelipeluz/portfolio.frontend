import { LoginProps } from './ServicesProps';

export interface AuthContextProps {
  user: UserLogged | null;
  init: () => void;
  login: (props: LoginProps) => void;
  logout: () => void;
  register: () => void;
}

export interface UserLogged {
  id: number;
  name: string;
  email: string;
  role: string;
}
