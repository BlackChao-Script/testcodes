import {request} from './request'

export function getClassify(){
  return request({
    url:'/category'
  })
}
export function gitSubClassify(maitKey){
  return request({
    url:'/subcategory',
    params:{
      maitKey
    }
  })
}