import { IsNotEmpty, IsString } from "class-validator";
import { v4 as uuidv4, UUIDTypes } from 'uuid';

export class AuthLoginRequestDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}

export class AuthRegisterRequestDto {
  @IsString()
  @IsNotEmpty()
  fullName: string;

  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}

export interface AuthLoginResponse {
  token: string;
}

export interface AuthRegisterResponse {
  id: UUIDTypes;
  fullName: string;
  username: string;
}

export interface AuthUserInterface {
  id: UUIDTypes;
  fullName: string;
  username: string;
  password: string;
}

export const authUserData: AuthUserInterface[] = []