import { Injectable } from '@nestjs/common';
import { WebResponse } from 'src/dto/Response';
import { companiesData, RandomUserDto, UserCompanyDtoInterface, usersData } from './user';
import axios from 'axios';
import { FormatedRandomUserDtoInterface, RandomUserDtoInterface } from './random-user.dto';

@Injectable()
export class UserService {
  private readonly RANDOM_USER_API = process.env.RANDOM_USER_API
  async getUser(): Promise<WebResponse<UserCompanyDtoInterface[]>> {

    const userCompanyData: UserCompanyDtoInterface[] = usersData.filter(user => user.id != null).map(user => {
      const company = companiesData.find(company => company.id != null && company.user_id === user.id);
      if (company) {
        return {
          user_id: user.id,
          company_id: company.id,
          name: user.nama,
          email: user.email,
          telp: user.telp,
          company_code: company.company_code,
          company_name: company.company_name
        };
      }
    })

    return {
      success: true,
      message: 'get user success',
      data: userCompanyData
    }
  }

  async getRandomUser(req: RandomUserDto): Promise<WebResponse<any>> {
    const randomUserApi = process.env.RANDOM_USER_API
    const result = req.results ? req.results : 1
    const page = req.page ? req.page : 1
    const response = await axios.get(`${randomUserApi}?results=${result}&page=${page}`);
    const data = response.data.results
    const formatedData: FormatedRandomUserDtoInterface[] = data.map((item: RandomUserDtoInterface) => ({
      name: `${item.name.title}, ${item.name.first} ${item.name.last}`,
      location: `${item.location.street.number}, ${item.location.street.name}, ${item.location.city}, ${item.location.state}, ${item.location.country}`,
      email: item.email,
      age: item.dob.age,
      phone: item.phone,
      cell: item.cell,
      picture: [item.picture.large, item.picture.medium, item.picture.thumbnail],
    }));


    return {
      success: true,
      message: 'get random user success',
      data: formatedData
    }
  }

  async generateData() {
    const warna = ["merah", "kuning", "hijau", "pink", "ungu", "maroon"];
    const pakaian = ["baju", "celana", "topi", "jaket", "sepatu"];
    const status = ["diskon", "sale", "diskon", "sale", "sale"];

    let hasil = [];


    for (let i = 0; i < warna.length; i++) {
      const ww = warna[i];
      const pp = pakaian[i % pakaian.length];
      const ss = status[i % status.length];

      console.log('index', `${i} ${i % pakaian.length} ${i % status.length}`);
      hasil.push(`${pp} ${ww} ${ss}`);
    }

    return hasil;
  }


}
