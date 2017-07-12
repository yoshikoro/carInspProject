function carManage() {
  var targetName = "全体３ヶ月点検";
  var sp = SpreadsheetApp.getActiveSpreadsheet();
  var ss = sp.getSheetByName("法定点検");
  var targetfileArray = folderSearch("点検");
  var targetfiles = [];
    targetfileArray.forEach(function(val){
       if (val.getName().indexOf(targetName) == -1){
         return;
       }
       if (val.getName().substring(0,6) == nextMonthyearday("yyyyMM",0) || val.getName().substring(0,6) == nextMonthyearday("yyyyMM",-1)){
        targetfiles.push(val);
       }
    })
    
    
    targetfiles
    Logger.log(targetfiles);
 // var targetsp = SpreadsheetApp.open(file)
  
  
}


function carManageCheck(spItelator,list_Name_check,incr) {
 var sheet = SpreadsheetApp.open(spItelator);
 var sheets = sheet.getSheets();
 var sheetnam = sheet.getNumSheets();
 var data = csvChange(fileinsp_retName(list_Name_check));
  for (var n = 1;n <= sheetnam - 3;n++){//シートの枚数分ループ
   var shopname = sheets[n].getName();//シート名称
   var shopsheetdata = sheets[n].getRange(7,1,sheets[n].getLastRow(),sheets[n].getLastColumn()).getValues();
    for (var i = 0;i <= data.length - 1;i++){//リストのデータ用
     var stringData = data[i][10].toString();
     if(stringData.substring(0,5) != "３ヶ月点検" && stringData.substring(0,5) != "６ヶ月点検"){//3
      continue;
     }else{
       var checkdata = data[i][26];
      }
       for (var j = 0;j <= shopsheetdata.length - 1;j++){//編集シートのデータ用
         var checksheetdata = shopsheetdata[j][1].toString();//管理番号
         if(checkdata == checksheetdata){
          shopsheetdata[j][7] = data[i][41];
          shopsheetdata[j][5] = data[i][16];
          break;
         }
       }
    }
   sheets[n].getRange(7,1,sheets[n].getLastRow(),sheets[n].getLastColumn()).setValues(shopsheetdata);
  }
}