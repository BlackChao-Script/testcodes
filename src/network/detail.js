import { request } from "./request";

export function getDetail(iid) {
  return request({
    url: "/detail",
    params: {
      iid,
    },
  });
}
export function getRecomment(){
  return request({
    url:'/recommend'
  })
}