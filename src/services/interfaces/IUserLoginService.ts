export interface IUserLoginService {
  sendLogin: (data: UserLoginDTO) => Promise<void>;
  validateForm: (data: UserLoginDTO) => Promise<boolean>;
  formState:{
    email:string,
    password:string,
    errors:string
  }
}

export type UserLoginDTO = {
  email: string;
  password: string;
};
