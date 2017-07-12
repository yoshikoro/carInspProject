/**
*
* 当月にプラスした月を返します short = yyyyMMdd long = yyyy/MM/dd "" = yyyyMM yyyy = yyyy 
* var yyyyMM = nextMonthyearday(ans,plusMonth);
* @param {string} ans short or long or yyyyMM or yyyy
* @param {int} plusMonth 
* @return {string} yms short yyyyMMdd long "+ / +"    
*/ 
function nextMonthyearday(ans,plusMonth) { 
 var now = new Date();
 now.setMonth(now.getMonth() + plusMonth);
 var year = now.getFullYear(); 
 var month = now.getMonth() + 1;
 var day =now.getDate();
 var strday=String(day);
 var stryear =String(year);
 var strmonth =String(month);
 if (month < 10){
  strmonth= 0+strmonth
 }
 else if(month > 9) {
  strmonth = strmonth
 }
 if (day < 10){
  strday = 0+strday
 }
 else if(day > 9) {
  strday = strday
 }
 if (ans == "short"){
  var yms = stryear + strmonth + strday ;
 }
 else if (ans == "long"){
  var yms = stryear + "/" + strmonth + "/" + strday;
 }
 else if (ans == "yyyyMM"){
  var yms = stryear + strmonth;
 }
 else if (ans == "yyyy"){
  var yms = stryear;
 }
 return yms ;
}

function dateCompr(targetDate,plusDate){//日付比較
 var target = new Date(targetDate);
 var toD = new Date(); 
 var myD = new Date();
 var day = myD.getDate()+plusDate;
 var dayM = toD.getDate()-1;
 myD.setDate(day);
 toD.setDate(dayM);
 var flgstr = "";
 if (myD>=target && target>=toD){
  flgstr = "just";
 } else if(toD > target){
  flgstr = "small";
 } else {
  flgstr = "elseDay";
 }
return flgstr
}
