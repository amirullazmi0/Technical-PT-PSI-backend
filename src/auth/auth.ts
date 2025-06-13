import { IsString, IsEmail, IsPhoneNumber, IsOptional } from 'class-validator';

export interface UserDtoInterface {
  id: string;
  nama: string;
  email: string | null;
  telp: string;
}

export class UserDto {
  @IsString()
  id: string;

  @IsString()
  nama: string;

  @IsEmail()
  @IsOptional() // Email bisa null, sehingga optional
  email: string | null;

  @IsPhoneNumber('ID')
  telp: string;
}

export class CompanyDto {
  @IsString()
  id: string;

  @IsString()
  user_id: string;

  @IsString()
  company_code: string;

  @IsString()
  company_name: string;
}



export const usersData: UserDto[] = [
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
];

export const companiesData: CompanyDto[] = [
  {
    id: 'trew098',
    user_id: '12qwer',
    company_code: 'SPI',
    company_name: 'Samudera',
  },
  {
    id: 'poiuyt1234',
    user_id: '321rewq',
    company_code: 'PIC',
    company_name: 'Samudera',
  },
];