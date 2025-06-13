import { IsNumberString, IsOptional } from "class-validator";

export class RandomUserDto {
  @IsOptional()
  @IsNumberString()
  results: string

  @IsOptional()
  @IsNumberString()
  page: string
}


export interface UserDtoInterface {
  id?: string;
  nama?: string;
  email?: string;
  telp?: string;
}

export interface CompanyDtoInterface {
  id?: string;
  user_id?: string;
  company_code?: string;
  company_name?: string;
}

export interface UserCompanyDtoInterface {
  user_id: string;
  company_id: string;
  name: string;
  email: string;
  telp: string;
  company_code: string;
  company_name: string;
}

export const usersData: UserDtoInterface[] = [
  {
    id: '12qwer',
    nama: 'Imron',
    email: null,
    telp: '081234567890',
  },
  {
    id: '321rewq',
    nama: 'Juli',
    email: 'Sammy@mail.com',
    telp: '0987654321',
  },
  {
    id: null,
    nama: 'Gajah Mada',
    email: null,
    telp: null,
  },
];

export const companiesData: CompanyDtoInterface[] = [
  {
    id: 'trew098',
    user_id: '12qwer',
    company_code: 'SPI',
    company_name: null,
  },
  {
    id: null,
    user_id: null,
    company_code: null,
    company_name: 'Samudera',
  },
  {
    id: 'poiuyt1234',
    user_id: '321rewq',
    company_code: 'PIC',
    company_name: 'Samudera',
  },
];