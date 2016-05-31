//Initialise QB application
var users = {};
var dialogs = {};


//QB Sellfie App settings
var chat_token = 'a63d9a7d084d1eab921c45e810c0e85f4dee7061';
var app_id = 35064;

//User details
var currentUser = 12744572;
var currentUsername = 9995346716;
var otherUser = 12753529;
var pass = 'longtestpassword';
var occupantsIds = [];
var userId;
var Message;
var isTypingTimerId;
var chat_message_limit=10;

//Temp
var CREDENTIALS = {
  appId: app_id,
  authKey: 'uvPyUP7T65krMrc',
  authSecret: '3VJ3bZwBFnjTb8-'
};
 
QB.init(CREDENTIALS.appId, CREDENTIALS.authKey, CREDENTIALS.authSecret);

$(document).ready(function() {

//Initialise listeners

userStatusListener();
messageReadListener();
messageDeliveredListener();
chatMesssageInputListener();
onMessageListenerFn();
otherUsertypingListener();

//Intialise Handlers
setupMsgScrollHandler();


//Click event on chat button 
chatClick();

//Dialog click event
// dialogClick();

  
});



function chatClick(){

    //Check if user logged

    //If not logged in show mobile_number/email/otp screen

    //After logging in connectToChat() chat window div with progress bar

    connectToChat('initiate_chat');
}

function dialogClick(){

    //Check if user logged

    //If not logged in show mobile_number/email/otp screen

    //After logging in connectToChat() chat window div with progress bar

    connectToChat('get_dialogs');
}

function connectToChat(type) {

  console.log('Show progress bar');
  console.log('connecting to chat...');
  // Create session and connect to chat

QB.createSession({login: currentUsername, password: pass}, function(err, res) {

    if (res) {

		      QB.chat.connect({userId: currentUser, password: pass}, function(err, roster) {
			      if (err) {
			        console.log(err);
			      } else {

			      	console.log('Roster');

			      	if(type == 'initiate_chat'){
			      		//Add user to roster if not added 
			      		addOtherUserToRoster(roster);

			      		//Create dialogue and chat
			      		createDialogAndGetChat();
			      	} else if(type == 'get_dialogs'){
			      		retrieveChatDialogs();
			      	}         
	      		  }
	    	}); 
		}	
  	});
}


//---------------------------------------------------------DIALOG FUNCTIONS------------------------------------------------//


function createDialogAndGetChat(){

		var params = {
					    type: 3,
					    occupants_ids: otherUser,
					    name: 'StoreName'
					 };

	    console.log('Creating dialog...');

	 	QB.chat.dialog.create(params, function(err, createdDialog) {
		    if (err) {
		      console.log(err);
		    } else {

			  console.log('Dialog created ! ');
		      console.log(createdDialog);



	        	createdDialog.occupants_ids.map(function(userId) {
		          occupantsIds.push(userId);
		        });

		        // save dialog to local storage
		      var dialogId = createdDialog._id;
		      dialogs[dialogId] = createdDialog;



		      // load dialogs' users
		      //
		      updateDialogsUsersStorage(jQuery.unique(occupantsIds), function(){

		        //  and trigger the 1st dialog
		        //
		        // triggerDialog(createdDialog);

	         	triggerDialog(createdDialog._id);

		        // setup attachments button handler
		        //
		        // $("#load-img").change(function(){
		        //   var inputFile = $("input[type=file]")[0].files[0];
		        //   if (inputFile) {
		        //     $("#progress").show(0);
		        //   }

		        //   clickSendAttachments(inputFile);
		        // });
		      });

		    }
		});

}

function retrieveChatDialogs() {
  // get the chat dialogs list
  //
  QB.chat.dialog.list(null, function(err, resDialogs) {
    if (err) {
      console.log(err);
    } else {

      // repackage dialogs data and collect all occupants ids
      //
      var occupantsIds = [];

      if(resDialogs.items.length === 0){

        console.log('No dialogs for the currentUser');

        return;
      }

      resDialogs.items.forEach(function(item, i, arr) {
        var dialogId = item._id;
        dialogs[dialogId] = item;


        item.occupants_ids.map(function(userId) {
          occupantsIds.push(userId);
        });
      });



	      // load dialogs' users
	      //
	      updateDialogsUsersStorage(jQuery.unique(occupantsIds), function(){
        // show dialogs
        //

        resDialogs.items.forEach(function(item, i, arr) {
          showOrUpdateDialogInUI(item, false);
        });

        //  and trigger the 1st dialog
        //
        triggerDialog(resDialogs.items[0]._id);

        // hide login form
        // $("#loginForm").modal("hide");

        // setup attachments button handler
        //
        $("#load-img").change(function(){
          var inputFile = $("input[type=file]")[0].files[0];
          if (inputFile) {
            $("#progress").show(0);
          }

          clickSendAttachments(inputFile);
        });
      });
    }
  });
}

function showOrUpdateDialogInUI(itemRes, updateHtml) {
  var dialogId = itemRes._id;
  var dialogName = itemRes.name;
  var dialogType = itemRes.type;
  var dialogLastMessage = itemRes.last_message;
  var dialogUnreadMessagesCount = itemRes.unread_messages_count;
  var dialogIcon = getDialogIcon(itemRes.type);

  if (dialogType == 3) {
    opponentId    = QB.chat.helpers.getRecipientId(itemRes.occupants_ids, currentUser.id);

    opponentLogin = getUserLoginById(opponentId); //Oppoents name. But here need to show store name
    dialogName    = opponentLogin;
  }

  if (updateHtml === true) {
  	var updatedDialogHtml = buildDialogHtml(dialogId, dialogUnreadMessagesCount, dialogIcon, dialogName, dialogLastMessage);
  	$('#dialogs-list').prepend(updatedDialogHtml);
  	$('.list-group-item.active .badge').text(0).hide(0);
	} else {
    var dialogHtml = buildDialogHtml(dialogId, dialogUnreadMessagesCount, dialogIcon, dialogName, dialogLastMessage);
    $('#dialogs-list').append(dialogHtml);
	}
}

// add photo to dialogs
function getDialogIcon (dialogType) {
  var groupPhoto = '<img src="images/ava-group.svg" width="30" height="30" class="round">';
  var privatPhoto  = '<img src="http://wecanbeaoriginal.com/blog/wp-content/uploads/2011/05/Owl.jpg" width="30" height="30" class="round">';
  var defaultPhoto = '<span class="glyphicon glyphicon-eye-close"></span>';

  var dialogIcon;
  switch (dialogType) {
    case 1:
      dialogIcon = groupPhoto;
      break;
    case 2:
      dialogIcon = groupPhoto;
      break;
    case 3:
    	dialogIcon = privatPhoto;
      break;
    default:
      dialogIcon = defaultPhoto;
      break;
  }
  return dialogIcon;
}

// Choose dialog
function triggerDialog(dialogId){

  console.log("Opening a dialog with id: " + dialogId + ", name: " + dialogs[dialogId].name);


  // deselect
  var kids = $('#dialogs-list').children();
  kids.removeClass('active').addClass('inactive');

  // select
  $('#'+dialogId).removeClass('inactive').addClass('active');

  $('.list-group-item.active .badge').text(0).delay(250).fadeOut(500);

  $('#messages-list').html('');

  // load chat history
  //
  retrieveChatMessages(dialogs[dialogId], null);

  $('#messages-list').scrollTop($('#messages-list').prop('scrollHeight'));
}

//---------------------------------------------------------MESSAGE FUNCTIONS------------------------------------------------//

function retrieveChatMessages(dialog, beforeDateSent){
  // Load messages history
  //

  $(".load-msg").show(0);

  var params = {chat_dialog_id: dialog._id,
                     sort_desc: 'date_sent',
                         limit: chat_message_limit};

  // if we would like to load the previous history
  if(beforeDateSent !== null){
    params.date_sent = {lt: beforeDateSent};
  }else{
    currentDialog = dialog;
    dialogsMessages = [];
  }

  QB.chat.message.list(params, function(err, messages) {
    if (messages) {

      console.log('Chat history');

      console.log(messages);


      if(messages.items.length === 0) {
        $("#no-messages-label").removeClass('hide');
      } else {
        $("#no-messages-label").addClass('hide');

        messages.items.forEach(function(item, i, arr) {

          dialogsMessages.splice(0, 0, item);

          var messageId = item._id;
          var messageText = item.message;
          var messageSenderId = item.sender_id;
          var messageDateSent = new Date(item.date_sent*1000);
          var messageSenderLogin = getUserLoginById(messageSenderId);

          // send read status
          if (item.read_ids.indexOf(currentUser) === -1) {
            sendReadStatus(messageSenderId, messageId, currentDialog._id);
          }

          var messageAttachmentFileId = null;
          if (item.hasOwnProperty("attachments")) {
            if(item.attachments.length > 0) {
              messageAttachmentFileId = item.attachments[0].id;
            }
          }

          var messageHtml = buildMessageHTML(messageText, messageSenderLogin, messageSenderId ,messageDateSent, messageAttachmentFileId, messageId);

          $('#messages-list').prepend(messageHtml);



          // Show delivered statuses
          if (item.read_ids.length > 1 && messageSenderId === currentUser) {
            $('#delivered_'+messageId).fadeOut(100);
            $('#read_'+messageId).fadeIn(200);
          } else if (item.delivered_ids.length > 1 && messageSenderId === currentUser) {
            $('#delivered_'+messageId).fadeIn(100);
            $('#read_'+messageId).fadeOut(200);
          }

          if (i > 5) {$('#messages-list').scrollTop($('#messages-list').prop('scrollHeight'));}

        });
      }
    }else{
      console.log(err);
    }
  });

  $(".load-msg").delay(100).fadeOut(500);
}

// filter for current dialog
function isMessageForCurrentDialog(userId, dialogId) {
  var result = false;
	if (dialogId == currentDialog._id || (dialogId === null && currentDialog.type == 3 && opponentId == userId)) {
		result = true;
	}
	return result;
}

// show messages in UI
function showMessage(userId, msg, attachmentFileId) {
  // add a message to list
  var userLogin = getUserLoginById(userId);
  var messageHtml = buildMessageHTML(msg.body, userLogin, userId, new Date(), attachmentFileId, msg.id);

  $('#messages-list').append(messageHtml);

  // scroll to bottom
  var mydiv = $('#messages-list');
  mydiv.scrollTop(mydiv.prop('scrollHeight'));
}


function setupMsgScrollHandler() {
  var msgWindow = $('.chat_window');
  var msgList = $('#messages-list');

  msgList.scroll(function() {
  	// console.log('scrolling');


  	// console.log(msgWindow.height()  );

  	// console.log(msgList.height()  );



    if (msgList.scrollTop() == 0 ){

      var dateSent = null;
      if(dialogsMessages.length > 0){
        dateSent = dialogsMessages[0].date_sent;
      }
      retrieveChatMessages(currentDialog, dateSent);

   //    $('#messages-list').animate({
		 //    scrollTop: $("#"+).offset().top
	  // }, 1000);

    }
  });
}

function sendReadStatus(userId, messageId, dialogId) {
  var params = {
    messageId: messageId,
    userId: userId,
    dialogId: dialogId
  };
  QB.chat.sendReadStatus(params);
}

// sending messages after confirmation

  function clickSendAttachments(inputFile) {
  // upload image
  QB.content.createAndUpload({name: inputFile.name, file: inputFile, type:
        inputFile.type, size: inputFile.size, 'public': false}, function(err, response){
    if (err) {
      console.log(err);
    } else {
      $("#progress").fadeOut(400);
      var uploadedFile = response;

      sendMessageQB("[attachment]", uploadedFile.id);

      $("input[type=file]").val('');
    }
  });
}

// send text or attachment
function sendMessageQB(text, attachmentFileId) {
  var msg = {
    type: currentDialog.type === 3 ? 'chat' : 'groupchat',
    body: text,
    extension: {
      save_to_history: 1,
    },
    senderId: currentUser,
    markable: 1
  };

  if(attachmentFileId !== null){
    msg["extension"]["attachments"] = [{id: attachmentFileId, type: 'photo'}];
  }

  if (currentDialog.type === 3) {
    
    QB.chat.send(otherUser, msg);

    $('.list-group-item.active .list-group-item-text').text(msg.body);

    if(attachmentFileId === null){
      showMessage(currentUser, msg);
    } else {
      showMessage(currentUser, msg, attachmentFileId);
    }
  } else {
    QB.chat.send(currentDialog.xmpp_room_jid, msg);
  }

  // claer timer and send 'stop typing' status
  clearTimeout(isTypingTimerId);
  isTypingTimeoutCallback();
  console.log(dialogsMessages);

  dialogsMessages.push(msg);
}


// delete timer and send 'stop typing' status
function isTypingTimeoutCallback() {
  isTypingTimerId = undefined;
  sendStopTypinStatus();
}

// send 'is typing' status
function sendTypingStatus() {
  
  if (currentDialog.type == 3) {
    QB.chat.sendIsTypingStatus(otherUser);
  } else {
    QB.chat.sendIsTypingStatus(currentDialog.xmpp_room_jid);
  }
}

// send 'stop typing' status
function sendStopTypinStatus() {
  if (currentDialog.type == 3) {
  	console.log('Stopped!');
    QB.chat.sendIsStopTypingStatus(otherUser);
  } else {
    QB.chat.sendIsStopTypingStatus(currentDialog.xmpp_room_jid);
  }
}

//User related functions

function updateDialogsUsersStorage(usersIds, callback){
  var params = {filter: {field: 'id', param: 'in', value: usersIds}, per_page: 100};

  QB.users.listUsers(params, function(err, result){
    if (result) {
      mergeUsers(result.items);
    }

    callback();
  });
}

function mergeUsers(usersItems){
  var newUsers = {};
  usersItems.forEach(function(item, i, arr) {
    newUsers[item.user.id] = item.user;
  });
  users = $.extend(users, newUsers);
}

function getUserLoginById(byId) {
	var userLogin;

	if (users[byId]) {
		userLogin = users[byId].email;
		return userLogin;
	}
}

//ROSTERS

function addOtherUserToRoster(roster){


    if(jQuery.isEmptyObject(roster)){

         console.log('Roster is empty');
         //If roaster is empty do nothing. Nothing to attach to contact list

      } else {

        //Roster available

        //Attach rosters to contact list

        console.log('Roster available This is the list of Rosters. Attach to contact list');



        //Check if the otherUser is in roster
        if(otherUser in roster){

          console.log('otherUser is in Roster');
          console.log(otherUser);
          console.log(roster[otherUser]);
          console.log(roster[otherUser].subscription);

          //Check if both are subscribed to each other
          if(roster[otherUser].subscription == 'both'){

            // show online /offline icon
            console.log('otherUser is in Roster and subscribed each other');


 
          } else if (roster[otherUser].subscription == 'none' && roster[otherUser].ask == 'subscribe') {

            //show offline icon
            console.log('currrentUser sent request, but otherUser not yet opened the App/ not autoaccepted by the App');

          } else if (roster[otherUser].subscription == 'none' && roster[otherUser].ask == null) {

            //resend roster request
            rosterAdd();

            console.log('otherUser has removed currentUser');
            console.log('Add user to roster : Sent otherUser a request');
            
          }

        } else {
          console.log('User is not in roster');
          console.log('Add user to roster : Sent otherUser a request');
          //Do a rosterAdd()
          rosterAdd();

        }
      }
}


function rosterAdd() {
  QB.chat.roster.add(otherUser, function() {
    log("You have sent a request to add the user " + otherUser);
  });
}


// show unread message count and new last message
function updateDialogsList(dialogId, text){

  // update unread message count
  var badgeCount = $('#'+dialogId+' .badge').html();
  $('#'+dialogId+'.list-group-item.inactive .badge').text(parseInt(badgeCount)+1).fadeIn(500);

  // update last message
  $('#'+dialogId+' .list-group-item-text').text(text);
}


(function () {

var original = document.title;
var timeout;

window.flashTitle = function (newMsg, howManyTimes) {
    function step() {
        document.title = (document.title == original) ? newMsg : original;

        if (--howManyTimes > 0) {
            timeout = setTimeout(step, 1000);
        };
    };

    howManyTimes = parseInt(howManyTimes);

    if (isNaN(howManyTimes)) {
        howManyTimes = 5;
    };

    cancelFlashTitle(timeout);
    step();
};

window.cancelFlashTitle = function () {
    clearTimeout(timeout);
    document.title = original;
};

}());


//-------------------------------------------LISTENERS-------------------------------------------------------------------------//


function userStatusListener(){
	// Listen User Online/Offline Status
	QB.chat.onContactListListener = function(userId, type) {
	  log("onContactListListener for user " + userId + ". Is online: " + (type === undefined || type == 'available'));
	};
}

function messageReadListener(){
	// Listen User Online/Offline Status
	QB.chat.onContactListListener = function(userId, type) {
	  log("onContactListListener for user " + userId + ". Is online: " + (type === undefined || type == 'available'));
	};
}

function messageDeliveredListener(){
	// Listen User Online/Offline Status
	QB.chat.onContactListListener = function(userId, type) {
	  log("onContactListListener for user " + userId + ". Is online: " + (type === undefined || type == 'available'));
	};
}

function otherUsertypingListener(){
	// show typing status in chat or groupchat
	QB.chat.onMessageTypingListener = function onMessageTyping(isTyping, userId, dialogId) {
		if(isTyping){
			console.log('otherUser is typing..');
		} else {
			console.log('otherUser stopped!');
		}
		
	  // showUserIsTypingView(isTyping, userId, dialogId);
	}
}

function chatMesssageInputListener(){
//Listen for enter/clicked send events 
  (function () {
    var Message;
    Message = function (arg) {
        this.text = arg.text, this.message_side = arg.message_side;
        this.draw = function (_this) {
            return function () {
                var $message;
                $message = $($('.message_template').clone().html());
                $message.addClass(_this.message_side).find('.text').html(_this.text);
                $('.messages').append($message);
                return setTimeout(function () {
                    return $message.addClass('appeared');
                }, 0);
            };
        }(this);
        return this;
    };
    $(function () {
        var getMessageText, message_side, sendMessage;
        message_side = 'right';
        getMessageText = function () {
            var $message_input;
            $message_input = $('.message_input');
            return $message_input.val();
        };
        sendMessage = function (text) {
            var $messages, message;
            if (text.trim() === '') {
                return;
            }
            $('.message_input').val('');
            $messages = $('.messages');
            message_side = 'left';
            message = new Message({
                text: text,
                message_side: message_side
            });
            // message.draw();

            //Send actual message through QB
            sendMessageQB(text, null);

            return $messages.animate({ scrollTop: $messages.prop('scrollHeight') }, 300);
        };
        $('.send_message').click(function (e) {
            return sendMessage(getMessageText());
        });
        $('.message_input').keyup(function (e) {

		    if (typeof isTypingTimerId === 'undefined') {

		    	console.log('Sending typing..');

		      // send 'is typing' status
		      sendTypingStatus();

		      // start is typing timer
		      isTypingTimerId = setTimeout(isTypingTimeoutCallback, 5000);
		    } else {

		      // start is typing timer again
		      clearTimeout(isTypingTimerId);
		      isTypingTimerId = setTimeout(isTypingTimeoutCallback, 5000);
		    }

            if (e.which === 13) {
                return sendMessage(getMessageText());
            }
        });
    });
}.call(this));
}

function onMessageListenerFn(){

	  QB.chat.onMessageListener = function onMessage(userId, msg) {

	  var audio = new Audio('./sound/the-calling.mp3');
	  audio.play();

	  flashTitle("New Message recieved!");

	  // console.log(msg);

	  // check if it's a mesasges for current dialog
	  
	  if (isMessageForCurrentDialog(userId, msg.dialog_id)){
	    dialogsMessages.push(msg);

	    console.log('Markable' + msg.markable );
	    if (msg.markable === 1) {
	    	console.log(userId + msg.id +  msg.dialog_id);
	      sendReadStatus(userId, msg.id, msg.dialog_id);
	    }

	    // сheck if it's an attachment
	    //
	    var messageAttachmentFileId = null;
	    if (msg.extension.hasOwnProperty("attachments")) {
	      if(msg.extension.attachments.length > 0) {
	        messageAttachmentFileId = msg.extension.attachments[0].id;
	      }
	    }


	    showMessage(userId, msg, messageAttachmentFileId);

	  }
	  // Here we process the regular messages

	  updateDialogsList(msg.dialog_id, msg.body);
	}
}


//-------------------------------------------UI-------------------------------------------------------------------------//

// build html for dialogs
function buildDialogHtml(dialogId, dialogUnreadMessagesCount, dialogIcon, dialogName, dialogLastMessage) {
  var UnreadMessagesCountShow = '<span class="badge">'+dialogUnreadMessagesCount+'</span>';
      UnreadMessagesCountHide = '<span class="badge" style="display: none;">'+dialogUnreadMessagesCount+'</span>';

  var dialogHtml = '<a href="#" class="list-group-item inactive" id='+'"'+dialogId+'"'+' onclick="triggerDialog('+"'"+dialogId+"'"+')">'+
                   (dialogUnreadMessagesCount === 0 ? UnreadMessagesCountHide : UnreadMessagesCountShow)+'<h4 class="list-group-item-heading">&nbsp;&nbsp;&nbsp;<span>'+dialogName+'</span></h4>'+'<p class="list-group-item-text last-message">'+
                   (dialogLastMessage === null ?  "" : dialogLastMessage)+'</p>'+'</a>';
  return dialogHtml;
}

// build html for messages
function buildMessageHTML(messageText, messageSenderId, userId, messageDateSent, attachmentFileId, messageId, status){
  var messageAttach;
  if(attachmentFileId){
      messageAttach = '<img src="http://api.quickblox.com/blobs/'+attachmentFileId+'/download.xml?token='+token+'" alt="attachment" class="attachments img-responsive" />';
  }
  // var delivered = '<img class="icon-small" src="https://support-tools.storage.googleapis.com/articles/support15.5.png" alt="" id="delivered_'+messageId+'">';
  // var read = '<img class="icon-small" src="http://appamatix.techmakaillc.netdna-cdn.com/wp-content/uploads/2015/08/support14.3.png" alt="" id="read_'+messageId+'">';

  // var messageHtml = '<div class="list-group-item" id="'+messageId+'" onclick="clickToAddMsg('+"'"+messageId+"'"+')">'+'<time datetime="'+messageDateSent+
  //                   '" class="pull-right">'+jQuery.timeago(messageDateSent)+'</time>'+'<h4 class="list-group-item-heading">'+messageSenderId+'</h4>'+
  //                   '<p class="list-group-item-text">'+(messageAttach ? messageAttach : messageText)+'</p>'+delivered+read+'</div>';


  if(userId == currentUser){
      var messageHtml = '<li id="'+messageId+'"class="message left appeared"><div class="avatar"></div><div class="text_wrapper"><div class="text">'+(messageAttach ? messageAttach : messageText)+'</div></div></li>';
  } else {
      var messageHtml = '<li id="'+messageId+'" class="message right appeared"><div class="avatar"></div><div class="text_wrapper"><div class="text">'+(messageAttach ? messageAttach : messageText)+'</div></div></li>';
  }
  return messageHtml;
}




function log(string){
  console.log(string);
}