 var app=angular.module("videomodule",[]);//定义一个名字
 app.controller("forvideo",function($scope){
			 $scope.newv=[
			     {'video':'./imgforv/brand.png','intro':'布兰德最新皮肤上线','num':'6900','time':'一个小时前'},
			     {'video':'./imgforv/ezreal.png','intro':'像我这么帅的，一般都是主角儿哟！','num':'1.3万','time':'一个小时前'},
			     {'video':'./imgforv/suolaka.png','intro':'星光之子  守护者新装来袭','num':'6900','time':'一个小时前'},
			     {'video':'./imgforv/lulu.png','intro':'香炉风语  女巫露露带你上王者','num':'6900','time':'一个小时前'},
			 ];
			 $scope.tittlearr=["最新视频",'解说视频','赛事视频','周免视频','趣味视频','官方视频'];
			 $scope.more="查看更多";
			 $scope.dtop=[
			     {'no':'1','intro':'2017全球总决赛 入围赛 GMB vs WE','num':'96.9万','auth':'全球总决赛'},
			     {'no':'2','intro':'阿冷与五五开献唱LPL战歌《成王败寇》','num':'95.3万','auth':'英雄联盟精彩视频'},
			     {'no':'3','intro':'2017全球总决赛 入围赛 WE vs LYN','num':'78.4万','auth':'全球总决赛'},
			 ];
			 $scope.dbottom=[
			     {'no':'4','intro':'2018季前赛符文重铸即将到来','num':'70.9万'},
			     {'no':'5','intro':'徐老师来巡山133：一条姐分身也能偷家','num':'70.3万'},
			     {'no':'6','intro':'寡妇制造者伊芙琳重做-再次沉沦痛苦之拥吧','num':'68.4万'},
			     {'no':'7','intro':'世界第一：1秒学会大嘴完美走A','num':'68.1万'},
			     {'no':'8','intro':'每日五杀572:锐雯光速QA震魂五杀!修罗地狱骑士归来','num':'67.7万'},
			 ];	
			 $scope.wtop=[
			     {'no':'1','intro':'【抗韩中年人】双工资装琴女 奶淹七军','num':'696.9万','auth':'7号&笑笑'},
			     {'no':'2','intro':'主播玩脱了：骚男不靠弟弟！','num':'295.3万','auth':'英雄联盟精彩视频'},
			     {'no':'3','intro':'主播真搞笑：卢本伟遭人埋伏','num':'178.4万','auth':'全球总决赛'},
			 ];
			 $scope.wbottom=[
			     {'no':'4','intro':'神探苍致胜90秒：卡特万能输出堪比炮台','num':'170.9万'},
			     {'no':'5','intro':'懵逼日记：史上最肉蒙多抗五人反拿五杀','num':'170.3万'},
			     {'no':'6','intro':'寡妇制造者伊芙琳重做-再次沉沦痛苦之拥吧','num':'168.4万'},
			     {'no':'7','intro':'主播玩脱了 蛇哥有千军万马！敌人孤胆豪侠','num':'168.1万'},
			     {'no':'8','intro':'Miss排位日记436期 时空倒转！','num':'167.7万'},
			 ];
			 $scope.mtop=[
			     {'no':'1','intro':'【英雄联盟玩很6】 年度最爆笑联盟户外','num':'2396.9万','auth':'全球总决赛'},
			     {'no':'2','intro':'2017LPL夏季赛 总决赛 EDG vs RNG','num':'1895.3万','auth':'英雄联盟精彩视频'},
			     {'no':'3','intro':'别闹了，拳头 ：为了更好的奖励','num':'1878.4万','auth':'全球总决赛'},
			 ];
			 $scope.mbottom=[
			     {'no':'4','intro':'徐老师来巡山129：如何正确使用真眼','num':'1870.9万'},
			     {'no':'5','intro':'【抗韩中年人】一控五瞬间结束一场绝世之战','num':'1670.3万'},
			     {'no':'6','intro':'电竞有个圈67：PDD揭密昔日情史','num':'1668.4万'},
			     {'no':'7','intro':'世界第一：1秒学会大嘴完美走A','num':'1468.1万'},
			     {'no':'8','intro':'星之守护者阿狸动画：初之际','num':'1267.7万'},
			 ];
			 $scope.so="解说视频正在完善中...";
			 $scope.so="赛事视频正在完善中...";
			 $scope.jieshuo=["小苍","苦笑","小智","若风","Miss","七号&笑笑","伊芙蕾雅",'大司马',"枪炮玫瑰","小北","长歌"];			 
			 $scope.game=["LPL","LSPL","德玛西亚杯","全球总决赛","MSI季中邀请赛","All-star","洲际赛","高校联赛","城市争霸赛"];			 
			 $scope.jieshuov1=[
			     {'video':'./imgforv/v21.png','intro':'布兰德最新皮肤上线','num':'55万','time':'5.5小时前'},
			     {'video':'./imgforv/v22.png','intro':'像我这么帅的，一般都是主角儿哟！','num':'1.3万','time':'2.2小时前'},
			     {'video':'./imgforv/v41.gif','intro':'星光之子  守护者新装来袭','num':'690万','time':'2.3小时前'},
			     {'video':'./imgforv/v24.jpg','intro':'不知道写什么好... ','num':'60万','time':'1.5小时前'},
			     {'video':'./imgforv/v25.png','intro':'香炉风语  女巫露露带你上王者','num':'6.9万','time':'3.5小时前'},
			     {'video':'./imgforv/v26.png','intro':'香炉风语  女巫露露带你上王者','num':'9900','time':'6小时前'},
			     {'video':'./imgforv/v27.png','intro':'香炉风语  女巫露露带你上王者','num':'1.6万','time':'2小时前'},
			     {'video':'./imgforv/v30.jpg','intro':'香炉风语  女巫露露带你上王者','num':'2.5万','time':'2.1小时前'},
			     {'video':'./imgforv/v28.png','intro':'香炉风语  女巫露露带你上王者','num':'60万','time':'3小时前'},
			     {'video':'./imgforv/v29.png','intro':'香炉风语  女巫露露带你上王者','num':'90万','time':'4.5小时前'},
			 ];	
			 $scope.jieshuov2=[
			     {'video':'./imgforv/v11.png','intro':'布兰德最新皮肤上线','num':'55万','time':'5.5小时前'},
			     {'video':'./imgforv/v12.jpg','intro':'像我这么帅的，一般都是主角儿哟！','num':'1.3万','time':'2.2小时前'},
			     {'video':'./imgforv/v13.png','intro':'星光之子  守护者新装来袭','num':'690万','time':'2.3小时前'},
			     {'video':'./imgforv/v14.png','intro':'香炉风语  女巫露露带你上王者','num':'60万','time':'1.5小时前'},
			     {'video':'./imgforv/v23.png','intro':'香炉风语  女巫露露带你上王者','num':'6.9万','time':'3.5小时前'},
			     {'video':'./imgforv/v42.jpg','intro':'香炉风语  女巫露露带你上王者','num':'9900','time':'6小时前'},
			     {'video':'./imgforv/v43.gif','intro':'香炉风语  女巫露露带你上王者','num':'1.6万','time':'2小时前'},
			     {'video':'./imgforv/v53.png','intro':'香炉风语  女巫露露带你上王者','num':'2.5万','time':'2.1小时前'},
			     {'video':'./imgforv/v51.jpg','intro':'香炉风语  女巫露露带你上王者','num':'60万','time':'3小时前'},
			     {'video':'./imgforv/v44.jpg','intro':'香炉风语  女巫露露带你上王者','num':'90万','time':'4.5小时前'},
			 ];				 
 
 })