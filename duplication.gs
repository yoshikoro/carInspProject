function numsurc(apendarr){ //apendarr = ”クレームＮＯの配列” 一致＝フラグ×　不一致＝フラグＯＫ
//var arr2dim = twoDimensionalArray 
var flag = true;
for (var i=arr2dim.length;i--;){
var cnom = arr2dim[i][0];
if (cnom == apendarr[0]) {
    flag = false;
    break;
    
}
}

return flag ;
}

function shopss(listdata,col){ //{pram listdata = 2DimArrayData,col = targetColumn}
 var shopname = [];
  for (var i = 1 ;i<=listdata.length-1;i++){
   var shop = listdata[i][col];
   var flag = true;
   if (i == 1){
    shopname.push(shop);
    continue;
   }
   for (var j = 0 ;j<=shopname.length;j++){
    if (shop == shopname[j]) {
     flag = false;
     break;  
    }
   }
   if (flag==true){
   shopname.push(shop);
   }
  }
 return shopname;
}