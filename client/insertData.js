Template.insertData.events(
  {
    // button이 클릭되면 우측 함수가 실행된다
    "click #btnSend": function(evt, tmpl) {
      evt.preventDefault();
      var user = Meteor.user();
      console.log(user);
      if(!user) {
        return alert('로그인이 필요합니다');
      }



      //data를 input에서 꺼내서 디비에 저장한다
      var obj = {};
      obj.inpName = $('#inpName').val();
      obj.inpEmail = $('#inpEmail').val();
      obj.inpPhone = $('#inpPhone').val();
      obj.inpSelect = $('#inpSelect').val();
      obj.inpTextarea = $('#inpTextarea').val();

      var image = $('#inpFile').val();

      if(image.length > 0) {
        console.log('after');
        fileObj = tmpl.find("#inpFile").files[0]
        fileReader = new FileReader();
        fileReader.onload = function(file) {
          console.log('callback');
          obj.image = file.srcElement.result;

          Boards.insert(obj);

          $('#inpName').val("");
          $('#inpEmail').val("");
          $('#inpPhone').val("");
          $('#inpTextarea').val("");
          $('#inpFile').val("");
        }
        fileReader.readAsDataURL(fileObj);
      }
      else {
        Boards.insert(obj);

        $('#inpName').val("");
        $('#inpEmail').val("");
        $('#inpPhone').val("");
        $('#inpTextarea').val("");
        $('#inpFile').val("");
      }


    }
  }
);