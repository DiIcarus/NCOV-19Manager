export const ParseTime = (date:string,time:string ="")=>{
  let [yyyy,mm,dd] = date.split("-");
  let [h,m] = time.split(":");
  // console.log("Date:",date);
  // console.log("Time00:",new Date(Number(yyyy),Number(mm)-1,Number(dd)+1 -1).getTime())
  // return new Date(Number(yyyy),(Number(mm)-1),Number(dd)).getTime();
  // return new Date(Number(yyyy),(Number(mm)),Number(dd)+1,Number(h),Number(m)).getTime();
  // console.log(time);
  if(time!==""){
    return new Date(Number(yyyy),Number(mm)-1,Number(dd)+1 -1,Number(h),Number(m)).getTime();
  }
  return new Date(Number(yyyy),Number(mm),Number(dd)+1 ).getTime();
}

export const Timestamp2Time = (unixTimestamp:string) => {
  var a = new Date(Number(unixTimestamp));
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min +'\'';
  // console.log("TIME:",time,unixTimestamp)
  return time; 
}