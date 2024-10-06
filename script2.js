

var flag=0;
			function validateForm()
			{
				var pass = document.loginForm.password.value;
				var checkSpecial = /[*@!#%&]+/.test(pass);
				var checkUpper = /[A-Z]+/.test(pass);
				var checkLower = /[a-z]+/.test(pass);
				var user =document.loginForm.username.value;
		var letters=/^[a-zA-Z0-9_\s]+$/;
				if(pass=="" || pass=="null")
				{
					alert("please enter ur password");
					document.loginForm.password.focus();
					return false;
				}
				if(checkSpecial &&checkLower && checkUpper)
				{
					flag=1;
				}

				if(flag==0)
				{
					alert("Password should be the combination of atleast one lowercase letter, uppercase letter & special symbols like ($, & #)");
					document.loginForm.password.focus();
					return false;
				}
		if(user=="" || user=="null")
		{
			alert("Plz enter your user name");
			document.loginForm.username.focus();
			return false;
		}
		if(user.length<6)
		{
			alert("Plz enter minimum 6 characters");
			document.loginForm.username.focus();
			return false;
		}
		if(!user.match(letters))
		{
			alert("Plz enter valid user name");
			document.loginForm.username.focus();
			return false;
		}
			alert("sucessful");
	}
