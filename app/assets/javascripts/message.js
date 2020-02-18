$(function(){
  function buildHTML(message){
    var addImage = (message.image !== null) ? `<img class = "lower-message__image", src="${message.image}">` :''
    var html = `<div class="message" data-message-id=${message.id}>
      <div class="upper-message">
        <div class="upper-message__user-name">
          ${message.name}
        </div>
        <div class="upper-message__date">
          {message.updated_at}
        </div>
      </div>
        <div class="lower-message">
          <p class="lower-message__content">
            ${message.content}
          </p>
        </div>
        ${addImage}
      </div>`
      return html
  }
  $('.new_message').on('submit', function(e) {
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action'); 
  
  $.ajax({
    url: url, 
    type: 'POST',  
    data: formData,  
    dataType: 'json',
    processData: false,
    contentType: false
  })
    .done(function(message){
      var html = buildHTML(message);
      $('.messages').append(html);
      $('form')[0].reset();
      $(".form__submit").removeAttr("disabled");
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');

    })
      .fail(function(massege){
        alert('メッセージを入力してください');
        $(".form__submit").removeAttr("disabled");
      })
  })


//自動更新

    var reloadMessages = function () {
      if (window.location.href.match(/\/groups\/\d+\/messages/)){
      var last_message_id = $('.message:last').data('message-id');

      $.ajax({
        url: "api/messages",
        type: 'get',
        data: {id : last_message_id },
        dataType: 'json'
      })
      　　　　.done(function(messages) {
        if (messages.length !== 0) {
          //追加するHTMLの入れ物を作る
          var insertHTML = '';
          //配列messagesの中身一つ一つを取り出し、HTMLに変換したものを入れ物に足し合わせる
          $.each(messages, function(i, message) {
            insertHTML += buildHTML(message)
          });
          //メッセージが入ったHTMLに、入れ物ごと追加
          $('.messages').append(insertHTML);
          $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
        }
      })
      .fail(function() {
        console.log('error');
      });
    };
  });