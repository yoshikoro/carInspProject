function myFormat(sheetObject,startRowNumber,startColumnNumber,setColorstring,borderBoolean) { 
 if (sheetObject == undefined){
  return
 }
 var maxrow = sheetObject.getLastRow();
 var maxcol = sheetObject.getLastColumn();
 var myRange = sheetObject.getRange(startRowNumber,startColumnNumber,maxrow,maxcol); 
 myRange.setBackground(setColorstring);
 if(borderBoolean){
  myRange.setBorder(true,true,true,true,true,true);
 }
 return sheetObject
}

