
import { axiosClientFile } from './configFile.service';

class UpfileService {
  // Jobs
  static upfile(obj) {
    const url = `/api/upload/users`;
    return axiosClientFile.post(url,obj);
  }
}
export default UpfileService;
