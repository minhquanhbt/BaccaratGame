import { axiosClient } from './config.service';

class RecruitmentService {
  // Jobs
  static listJob() {
    // return fetchData(query);
    let url = `/api/posts/recruitment`;
    return axiosClient.get(url);
  }

  static upPost(obj){
    let url = `/api/posts`;
    return axiosClient.post(url,{...obj})
  }

  static deleteJob(id){
    let url =`/api/posts/${id}`;
    return axiosClient.delete(url);
  }

  static editJob(obj){
    let url =`/api/posts/${obj.id}`;
    return axiosClient.put(url,{...obj});
  }
  static approveJob(data){
    let url =`/api/recruitment/feedback/${data}?status=3`;
    return axiosClient.post(url);
  }
  static rejectJob(data){
    let url =`/api/recruitment/feedback/${data}?status=2`;
    return axiosClient.post(url);
  }
  
  static applieToJob(obj){
    let url =`/api/candidate/feedback/add/${obj.id}`;
    return axiosClient.post(url,{...obj.content});
  }
  static getListRecruitment(){
    let url =`/api/recruitment`;
    return axiosClient.get(url);
  }
// add coins 
  static addCoins({id,coins}){
    let url =`/api/recruitment/coins/add/${coins}?userId=${id}`;
    return axiosClient.post(url);
  }

  static removeCoins({num,id}){
    let url =`/api/recruitment/coins/remove/${num}?userId=${id}`;
    return axiosClient.post(url);
  }
  static upgradeVipRec({id}){
    let url=`/api/user/${id}/upgrade/vip`;
    return axiosClient.post(url);
  }



}
export default RecruitmentService;