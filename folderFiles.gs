function folderSearch(folderName){
  if (!DriveApp.getFoldersByName(folderName).hasNext()){return}
  var subFolders = DriveApp.getFoldersByName(folderName).next().getFolders();
  var file = [];  
    while (subFolders.hasNext()){
      var files = subFolders.next().getFiles();
      if (!files.hasNext()){return}
       while (files.hasNext()){
        file.push(files.next());
       }
    }
 return file;
}

function mvFile(mvFileArry,mvFolderName,gotoFolderName){
 if (!DriveApp.getFoldersByName(mvFolderName).hasNext()){return}
 if (!DriveApp.getFoldersByName(gotoFolderName).hasNext()){return}
  for (var i = 0;i<=mvFileArry.length-1;i++){
  DriveApp.getFoldersByName(gotoFolderName).next().addFile(mvFileArry[i]);
  DriveApp.getFoldersByName(mvFolderName).next().removeFile(mvFileArry[i]);
  }
}
