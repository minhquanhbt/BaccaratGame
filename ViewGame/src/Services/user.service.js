import { axiosClient } from './config.service';

class UserService {
  // Jobs
  static login(obj) {
    const url = `/api/login`;
    return axiosClient.post(url, { ...obj });
  }
  
  static signup(obj) {
    const url = `/api/register`;
    return axiosClient.post(url, { ...obj });
  }

  static getProfile(){
    const url = `/api/user/profile`;
    return axiosClient.get(url);
  }

  static getListUser(){
    const url = `/api/users`;
    return axiosClient.get(url);
  }
  
  static editUserCV(obj){
    const url = `/api/user`;
    return axiosClient.put(url,{...obj});
  }

  static getListRecruitment(){
    const url = `/api/recruitment`;
    return axiosClient.get(url);
  }

}
export default UserService;
