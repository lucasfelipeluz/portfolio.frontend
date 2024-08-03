export interface HeaderProps {
  titleHeader: string;
  data: NavItensProps[];
}

export interface NavItensProps {
  id?: number;
  name: string;
  classNames: string;
}
