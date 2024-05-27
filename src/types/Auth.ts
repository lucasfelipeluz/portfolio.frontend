import { LoginProps, LoginResponse } from '../core/types/Services';

export interface AuthContextProps {
  user: UserLogged | null;
  loading: boolean;
  init: () => void;
  login: (props: LoginProps) => Promise<LoginResponse>;
  logout: () => void;
  register: () => void;
}

export interface UserLogged {
  id: number;
  name: string;
  nickname: string;
  password: string;
  role: string;
  createdAt: string;
}
