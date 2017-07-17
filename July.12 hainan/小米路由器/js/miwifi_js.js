/*
* scripts for miwifi
* Latest modified 2014-05-16 15:04

*/
(function(){

	/* popSubNav用来弹出导航条中的子菜单 | 参数列表说明 */
	/* navli: 菜单容器，即包含主菜单项和子菜单项的li元素 */
	/* navs: 主菜单项a元素，鼠标滑过时背景高亮 */
	/* subs: 子菜单的div容器 */
	/* activeCls: 主菜单高亮时的样式名 */
	/* sub_firstCls: 子菜单项中第一项的特殊样式Class名 */
	/* sub_lastCls: 子菜单项中最后一项的特殊样式Class名 */
	/* sub_onlyoneCls: 子菜单项中只有一项时的特殊样式Class名 */
	function popSubNav( navli, navs, subs, activeCls, sub_firstCls, sub_lastCls, sub_onlyoneCls ){
		for(var i = 0; i < subs.length; i++){ // 为子菜单赋样式，不同个数，样式不同
			var _sub = subs[i];
		  var suba = $(_sub).children();
			if( suba.length > 1 ){
				$(suba[0]).addClass( sub_firstCls );
				$(suba[suba.length-1]).addClass( sub_lastCls );
			}else{
				$(suba[0]).addClass( sub_onlyoneCls );
			}
		} //end for
		navs.mouseenter(function(){
			var me = $(this);
			var seq = parseInt( me.attr("data") );
			var mySub = $(subs[seq]);
			var dad = $(navli[seq]);
			me.addClass( activeCls );
			me.click(function(){
				mySub.slideUp(200);
				me.removeClass( activeCls );
			});
			if(mySub.find('a').length > 0){
			  mySub.slideDown(200);
				mySub.find('a').click(function(){
					mySub.slideUp(200);
					me.removeClass( activeCls );
				});
			}
			dad.mouseleave(function(){
				me.removeClass( activeCls );
				mySub.slideUp(200);
			})
		})
	};

	popSubNav( $(".navli"),
	           $(".navs"),
						 $(".subs"),
						 "header_nav_active",
						 "sub_first",
						 "sub_last",
						 "sub_onlyone" 
						);


  /* ===== Roll用来轮播首页大图 | 参数列表说明 ===== */
  /* start: 起始位置，从0计数 */
	/* El: 滚动的元素，为图片列表的容器，移动的是El的left值 */
  /* dataArr: 盛放left值的数组容器，记录El每次滚动所达到的left位置 */
	/* duration: 每次滚动的间隔时间 */
	/* btnArr: 对应的按钮组 */
	/* btn_active: 按钮高亮时的Class名称 */
	/* outLink: 轮播图容器之外的要随之变化的元素 */
	/* outLinkStatus：数组，盛放outLink元素的状态变化 */
	var billboardLeft = ['0', '-100%', '-200%', '-300%', '-400%'];
	var fontColors = ['#23bdff', '#fff', '#505050', '#fff', '#fff'];
	var setRedo;
	function Roll( start, 
				         El, 
								 dataArr, 
								 duration, 
								 btnArr, 
								 btn_active, 
								 outLink, 
								 outLinkStatus ){
			if( start == dataArr.length ){
				start = 0;	
			}
			El.animate({
				left: dataArr[start]
			}, 200, function(){
				$(btnArr).removeClass(btn_active);
				$(btnArr[start]).addClass(btn_active);
				outLink.css("color", outLinkStatus[start]);
				for(var i = 0; i < btnArr.length; i++){
					$(btnArr[i]).mouseenter(function(){
					  btnArr.removeClass(btn_active);
						$(btnArr[start]).addClass(btn_active);
					  $(this).addClass(btn_active);
					});
					$(btnArr[i]).mouseleave(function(){
						btnArr.removeClass(btn_active);
						$(btnArr[start]).addClass(btn_active);
					});
				}// end for
				El.animate({
					opacity: 1
				}, 200, function(){
					setRedo = setTimeout(function(){
						start += 1;	
						Roll( start, 
								  El, 
									dataArr, 
									duration, 
									btnArr, 
									btn_active, 
									outLink, 
									outLinkStatus);
					}, duration);
				});
			});
	}; //end Roll

	// 页面加载即开始滚动:
	Roll( 0, 
				$("#Billboard"), 
			  billboardLeft, 
				10000,
				$(".btn"), 
				"btn_active", 
				$("#GoToXiaomi"), 
				fontColors
			);

	//点击大轮播图下的对应按钮:
	$(".btn").click(function(){
		var data = parseInt( $(this).attr("data") );
		clearTimeout(setRedo);
		Roll( data, 
					$("#Billboard"), 
					billboardLeft,
					10000,
					$(".btn"),
					"btn_active",
					$("#GoToXiaomi"),
					fontColors
				);
	});


	//点击弹出浮窗：
	//视频地址列表：
	var videoArr = ['http://player.youku.com/embed/XNjQ4NzMwMzky',
				          'http://player.youku.com/embed/XNjgwOTg2MTE2',
								  'http://player.youku.com/embed/XNjQ4OTg1NzAw'];
	var wx2dcode = ['statics/img/wf_2dcode.jpg']; //微信二维码
	//handlePop用来控制视频或二维码等内容的弹出 | 参数列表说明
	//onBtn: 触发浮窗弹出的按钮集，每个按钮有序号标识
	//offBtn: 使弹窗关闭的元素
	//Pop: 弹出的部分，包括蒙版和视频容器
	//subModel: 弹出窗口里的子元素内容，可以是视频，或二维码
	//arr: 视频地址或者二维码图片地址列表
	function handlePop( onBtn, offBtn, Pop, subModel, arr ){
		onBtn.click(function(){
			Pop.show();
			subModel.show();
			var n = parseInt( $(this).attr('data') );
			if(n < 100){
			  Pop.find('.rls').attr('src', arr[n]);
			}
		});
		offBtn.click(function(){
			Pop.find('.rls').attr('src', '');
			subModel.hide();
			Pop.hide();
		});
	};

	//首页视频弹窗
	handlePop( $('.promo_video'), $('.pcls'), $('.Pop'), $('.subModel_video'), videoArr );

	//页脚微信二维码弹窗
	handlePop( $('#wxNum'), $('.pcls'), $('.Pop'), $('.subModel_2dcode'), wx2dcode );

	//公测页视频弹窗
	handlePop( $('#openVideo'), $('.pcls'), $('.Pop'), $('.subModel_video'), videoArr );

	//开放平台页提示弹窗
	//handlePop( $('#openJoin'), $('.pcls'), $('.Pop'), $('.subModel_open') );

	//下载页点击弹出二维码
	$(".dl_scan").click(function(){
	  var codeImg = $(this).attr("data"); //二维码图片地址
		$(".Pop2d").show();
		$(".pop2dcode").attr("src", codeImg);
		$(".pcls").click(function(){
			$(".Pop2d").hide();
			$(".pop2dcode").attr("src", "");
		});
	});

	//页面中使用img元素嵌入的图片，将在Retina屏下被替换为高品质图片：
	function toRetina( img ){ //参数img是图片img元素
		var src2x = $(img).attr("data-src2x"); //拿到高品质图片地址
		if( src2x ){
		  $(img).attr("src", src2x); //替换img元素的src属性
		}
	}; //此方法只在window.devicePixelRatio > 1 时才被调用

	if( window.devicePixelRatio > 1 ){
		toRetina( $('.index_head_logo') );
		toRetina( $('.dl_head_logo') );
		toRetina( $('.pub_head_logo') );
		toRetina( $('.open_head_logo') );
		toRetina( $('.log_head_logo') );
		toRetina( $('.promo1_img') );
		toRetina( $('.promo3_img') );
		toRetina( $('.promo2_img') );
	}

	//下载页的滑动菜单：
	//由于页面结构适配不同宽度屏幕且能够等比缩放而采用绝对定位，因此滑动菜单时页面高度和部分容器的高度需要随之变化

	//foldDown方法给元素增加高度，foldUp方法给元素减少高度回到原状
	$.fn.foldDown = function( n ){
		var me = $(this);
		var ori_height = me.height();
		var new_height = ori_height + n;
		//me.animate({
			//height: new_height + "px"
		//}, 200);
		me.css( "height", new_height + "px" );
	};
	$.fn.foldUp = function( n ){
		var me = $(this);
		var ori_height = me.height();
		var new_height = ori_height - n;
		//me.animate({
			//height: new_height + "px"
		//}, 200);
		me.css( "height", new_height + "px" );
	};

	var folded = true; //初始状态，页面是收着的。点击查看日志后，部分元素要打开。
	var opens = 0; //变量opens用来标识当前有几个菜单是展开的。

	//点击查看日志时，分稳定版sta和开发版dev两种，token来区别是哪一种(sta or dev)
	//参数foldHeight是滑动菜单时，页面结构中需要改变高度的元素的高度变化值。
	function seelogToggle( seelogBtn, token, foldHeight ){
	  $( seelogBtn ).toggle(function(){
			if( folded ){
		    $("body").foldDown( foldHeight );
		    $(".download_container").foldDown( foldHeight );
		    $(".dl_last").foldDown( foldHeight );
		    $(".dl_last_li_" + token).foldDown( foldHeight );
		    $(".dl_" + token).foldDown( foldHeight );
				folded = false;
			}
		  $(".dl_slide_" + token).slideDown(200);
		  opens = opens + 1;
	  }, function(){
			if( !folded && (opens < 2) ){ //当两个下拉菜单不是全部打开时，才收回页面高度
	  	  $("body").foldUp( foldHeight );
  		  $(".download_container").foldUp( foldHeight );
  		  $(".dl_last").foldUp( foldHeight );
	  	  $(".dl_last_li_" + token).foldUp( foldHeight );
	  	  $(".dl_" + token).foldUp( foldHeight );
				folded = true;
			}
  		$(".dl_slide_" + token).slideUp(0);
			opens = opens - 1;
  	});
	};

	seelogToggle( ".seeLog_sta", "sta", 400 );
	seelogToggle( ".seeLog_dev", "dev", 400 );


})();


/* js for public */
$(function () {
			var goout = $('.goout'), gohome = $('.gohome'), getup = $('.getup');
			var header = $('.pack_header');
			var wrapmodel = $('.wrap').children('.model');
			var wrap = $('.wrap');
			//页面跳转
			var start = Number(window.location.href.split('#model')[1]) ? Number(window.location.href.split('#model')[1]) : 0;
			if(start==1){
				getup.show();
			}else if(start==2){
				goout.show();
			}else if(start==3){
				gohome.show();
			}else{
				header.show();
			}
			//移动鼠标玩法
			$(".rel").hover(function (e){
				e.preventDefault();
				$(this).children('.con').show();
			},function (e){
				e.preventDefault();
				$(this).children('.con').hide();
			});

			//各种模式下各智能家居想法
			var big=$(".model .list .txtbig"),small=$(".model .list .txtsmall");
			function bigSmallHover(i,flag){
				if(flag){
					big.eq(i).css('display','none');
					small.eq(i).css('display','block');
				}else{
					small.eq(i).css('display','none');
					big.eq(i).css('display','block');
				}
			}
			var index;
			$(".getup .left li").hover(function (e){
				e.preventDefault();
				index=$(this).index();
				bigSmallHover(index,true);
			},function (e){
				e.preventDefault();
				bigSmallHover(index,false);
			});


			$(".getup .right li").hover(function (e){
				e.preventDefault();
				index=$(this).index()+3;
				bigSmallHover(index,true);
			},function (e){
				e.preventDefault();
				bigSmallHover(index,false);
			});

			$(".goout .left li").hover(function (e){
				e.preventDefault();
				index=$(this).index()+6;
				bigSmallHover(index,true);
			},function (e){
				e.preventDefault();
				bigSmallHover(index,false);
			});

			$(".goout .right li").hover(function (e){
				e.preventDefault();
				index=$(this).index()+9;
				bigSmallHover(index,true);
			},function (e){
				e.preventDefault();
				bigSmallHover(index,false);
			});

			$(".gohome .left li").hover(function (e){
				e.preventDefault();
				index=$(this).index()+12;
				bigSmallHover(index,true);
			},function (e){
				e.preventDefault();
				bigSmallHover(index,false);
			});

			$(".gohome .right li").hover(function (e){
				e.preventDefault();
				index=$(this).index()+15;
				bigSmallHover(index,true);
			},function (e){
				e.preventDefault();
				bigSmallHover(index,false);
			});
			//模式切换
			function selectModel(hd,sw){
				hd.css('zIndex',2400);
				hd.fadeOut("400",function(){
				 });
				sw.css('zIndex',2500);
				sw.fadeIn("400",function(){
				});
			}

			var mod = 0;
			//宽屏下切换模式
			$(".open").bind('click',function (e){
				wrap.show();
				e.preventDefault();
				getup.show();
			});
			$(".up").bind('click',function (e){
				e.preventDefault();
				header.hide();
				if(mod === 0){
					header.show();
					getup.hide();
					return false;
				}
				
				if(mod === 1){
					selectModel(goout,getup);
				} else {
					selectModel(gohome,goout);
				}
				mod -= 1;

			});
			$(".down").bind('click',function (e){
				e.preventDefault();
				header.hide();
				if(mod === 2){
					wrapmodel.hide();
					mod = 0;
					header.show();
					return false;
				}
				if(mod === 0){
					selectModel(getup,goout);
				} else {
					selectModel(goout,gohome);
				}
				mod += 1;
			});
			
			// 窄屏下切换模式
			function modelHidden(objchange,ind){
				$('.pack_header').hide();
				wrapmodel.fadeOut('400',function(){
					wrapmodel.css('zIndex',2400);
				});
				objchange.fadeIn("400",function(){ 	
					objchange.css('zIndex',2500);
				});
				mod=ind;
			}
			$('.returnindex').bind('click',function (e){
					e.preventDefault();
					header.show();
					wrapmodel.hide();
			});
			$('.banner .banmer1').bind('click',function (e){
				modelHidden(wrapmodel.eq(0),0);
			});
			$('.banner .banmer2').bind('click',function (e){
				modelHidden(wrapmodel.eq(1),1);
			});
			$('.banner .banmer3').bind('click',function (e){
				modelHidden(wrapmodel.eq(2),2);
			});

});

