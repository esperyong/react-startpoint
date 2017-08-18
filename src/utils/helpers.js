//import moment from 'moment';
export function encodeQueryData(data) {
   let ret = [];
   for (let d in data){
     if(data[d]){
       ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
     }
   }
   return ret.join('&');
}

export function isNormalInteger(str) {
  return /^\+?(0|[1-9]\d*)$/.test(str);
}

//export function formatDate(m,formatStr='YYYY-MM-DD') {
//  return moment(m*1000).format(formatStr);//m is a ruby timestamp,use seconds,but javascript use miliseconds
//}

//export function formatDateTime(m,formatStr='YYYY-MM-DD HH:mm:ss') {
//  return moment(m*1000).format(formatStr);
//}
