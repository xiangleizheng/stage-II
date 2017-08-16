<?php
	//获取数据
	$_username = $_POST['username'];
	$_userpwd = $_POST['userpwd'];
	$_type = $_POST['type'];
	
	//第一步，定义数据库的信息
	define("HOST","127.0.0.1");	//定义主机名
	define("PORT","3306");		//定义端口号
	define("DB_NAME","root");	//定义数据名用户名
	define("DB_PWD","123456");	//定义用户名的密码
	define("DB_CON","jenashop");//定义数据库名
	
	//第二步，创建数据库连接
	$_link = new mysqli(HOST,DB_NAME,DB_PWD,DB_CON,PORT);
	
	//-------- 设置字符编码
	$_link->set_charset("utf8");
	
	if($_type==="login"){
			//第三步，创建一条数据库语句
			$_sql = 'SELECT userpwd from userinfo WHERE username="'.$_username.'"';		
			//执行查询语句
			$_res = $_link->query($_sql);		
			//遍历结果集合
			$_row = $_res->fetch_row();			
			//判断密码是否正确
			if($_row[0] == $_userpwd){
				echo "success";
			}else {
				echo "error";
			}			
			//释放数据
			$_res->free();
	}else{
			//创建语句
			$_sqlinsert = 'INSERT into userinfo(username,userpwd) value ("'.$_username.'","'.$_userpwd.'")';
			//执行语句
			$_resinsert = $_link->query($_sqlinsert);
			//检查是否执行成功
			$_r = $_link->affected_rows;
			
			echo $_r;
	}
	//关闭数据库连接
	$_link->close();
?>