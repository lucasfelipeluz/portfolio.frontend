export interface ServiceResponse<M> {
  message: string;
  error: boolean;
  data: M;
}
