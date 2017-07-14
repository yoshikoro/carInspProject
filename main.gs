function carManage() {
  var targetName = "全体３ヶ月点検";
  var data = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("法定点検").getDataRange().getValues();
  var targetfileArray = folderSearch("点検");
  var targetfiles = [];
    targetfileArray.forEach(function(val){
       if (val.getName().indexOf(targetName) == -1){
         return;
       }
       if (val.getName().substring(0,6) == nextMonthyearday("yyyyMM",0) || val.getName().substring(0,6) == nextMonthyearday("yyyyMM",-1)){
        data = carManageCheck(val,data);
       }
    })
  SpreadsheetApp.getActiveSpreadsheet().getSheetByName("法定点検").getDataRange().setValues(data);
}


function carManageCheck(spItelator,data2Dim) {
 var sheet = SpreadsheetApp.open(spItelator);
 var sheets = sheet.getSheets();
 var sheetnam = sheet.getNumSheets();

  for (var n = 1;n <= sheetnam - 3;n++){//シートの枚数分ループ
   var shopname = sheets[n].getName();//シート名称
   var shopsheetdata = sheets[n].getRange(7,1,sheets[n].getLastRow(),sheets[n].getLastColumn()).getValues();
    for (var i = 0;i <= data2Dim.length - 1;i++){//リストのデータ用
      if(data2Dim[i][5] == "" || data2Dim[i][0] == "※"){
        continue;
      }
      var checkdata = data2Dim[i][1];
        for (var j = 0;j <= shopsheetdata.length - 1;j++){//編集シートのデータ用
          var checksheetdata = shopsheetdata[j][1].toString();//管理番号
          if(checkdata == checksheetdata){
            shopsheetdata[j][6] = "済" + Utilities.formatDate(data2Dim[i][5],'Asia/Tokyo','yyyyMM')
            data2Dim[i][0] = "※"
          break;
         }
       }
    }
   sheets[n].getRange(7,1,sheets[n].getLastRow(),sheets[n].getLastColumn()).setValues(shopsheetdata);
  }
  return data2Dim
}

