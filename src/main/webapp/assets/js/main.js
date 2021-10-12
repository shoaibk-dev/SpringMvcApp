function authenticate(){
	$.ajax({
        type: "POST",
        url: 'ajax/auth.jsp',
        data: $('#login-form').serializeArray(),
        cache: false,
        success: function(data)
        {
            if(data.indexOf('success') > -1){
            	window.location = 'main.jsp';
            }else if(data.indexOf('failed') > -1){
            	window.location = 'login.jsp?t=invalid credentials';
            }else{
            	window.location = 'login.jsp?t=unknown error';
            }
        }
    });
}