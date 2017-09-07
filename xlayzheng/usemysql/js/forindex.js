		$(function(){
				/*
				 * MySQL
				 * DB：数据库
				 * 
				 */
				$("#login").click(function(){					
					//第一步：获取输入的用户名和密码
					var usernameVal = $("#uname").val();
					var userpwdVal = $("#upwd").val();
					//去除首尾空格的内容是不符合格式的，不能通过
					if (usernameVal.trim() =="" || userpwdVal.trim() == "") {
						alert("用户名或密码格式不正确！请重新输入！");
						return;
					}					
					//第二步，使用ajax将数据传给后台程序
					$.ajax({
						type:"post",
						url:"../php/login-register.php",
						data:{
							username:usernameVal,
							userpwd:userpwdVal,
							type:"login"
						},
						dataType:"text",
						success:function(data){
							if (data === "success") {
								alert(usernameVal+",欢迎！")
								$("#uname").val("");
								$("#upwd").val("");									
							} else{
								alert("用户名或密码错误！");
								$("#upwd").val("");	
							}
						},
						complete:function(){   	
			            }
					})
					
					
				})
				
				
				$("#reg").click(function(){					
					//第一步：获取输入的用户名和密码
					var usernameVal = $("#uname").val();
					var userpwdVal = $("#upwd").val();
					//去除首尾空格的内容是不符合格式的，不能通过
					if (usernameVal.trim() =="" || userpwdVal.trim() == "") {
						alert("将要注册的用户名或密码格式不正确！请重新输入！");
						return;
					}					
					//第二步，使用ajax将数据传给后台程序
					$.ajax({
						type:"post",
						url:"../php/login-register.php",
						data:{
							username:usernameVal,
							userpwd:userpwdVal,
							type:"reg"
						},
						dataType:"text",
						success:function(data){
							if(data=="1"){
								alert(usernameVal+"，你已经注册成功！");
							}else{
								alert("注册失败，请重试！")
								$("#uname").val("");
							    $("#upwd").val("");									
							}
						},
			            complete:function(){			            			            	
			            }
					})
					
					
				})
				
				
				$("button").on('mouseenter',function(){
					$(this).css('background-color','rgba(0,0,0,1)')
				})
				$("button").on('mouseleave',function(){
					$(this).css('background-color','rgba(0,0,0,0.8)')
				})
				
		})