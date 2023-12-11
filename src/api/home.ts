import http from "@/utils/request";

enum Api {
  option1 = '/home/index',
  option2 = '/home/index',
  option3 = '/home/index',
}

export const option1 = () => http.get(Api.option1)
