/**
 * var addressString = contact_addressFromGroup("groupNameString")
 * @param {String} groupName グループ名
 * @return {String} emailString カンマ区切りメールアドレス   
 */
function contact_addressFromGroup(groupName){//contacts test 
 var groups = ContactsApp.getContactGroup(groupName).getContacts();
 var emails = [];
  groups.forEach(function(val){
  val.getEmails().forEach(function(value){
   emails.push(value.getAddress().toString());
  })
 })
 var emailString = emails.join(",")
 return emailString
}

/**
 * 
 * @param {String} workGroup 会社名支店 
 * @param {String} fullName 名前
 * @param {String} Email Eメールアドレス 
 * @param {String} addGroupName 追加したいコンタクトグループ
 * @return {String} msg 追加メッセージ  
 */
function contactAdd(workGroup,fullName,Email,addGroupName){
 //var addGroupName = "scriptSendTo","scriptSendCc";
  var group = ContactsApp.getContactGroup(addGroupName);
  if(group == null){
    group = ContactsApp.createContactGroup(addGroupName);
  }
  var emailField = ContactsApp.Field.WORK_EMAIL
  var contact = ContactsApp.createContact(fullName,workGroup,"");
  contact.addEmail(emailField, Email)
   group.addContact(contact);
   var msg = "OK"
   return msg
}

