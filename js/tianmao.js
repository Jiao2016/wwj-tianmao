// 导航中的猫
 $(function(){
	var mao=$(".mao");
	var zikuai=$(".zikuai");

		function cat(zikuai,mao){
			zikuai.onmouseover=function(){
			animate(mao,{opacity:1,top:-12},300)
			}
			zikuai.onmouseout=function(){
				animate(mao,{opacity:0,top:0},0)
			}
		}
for (var i = 0;i<10;i++) {
	cat(zikuai[i],mao[i])
}
// top效果
var topdes=$(".topdes");
var xiangxilist=$(".xiangxilist");
for (var i = 0; i < topdes.length; i++) {
	topdes[i].index=i;
	hover(topdes[i],function(){
		topdes[this.index].style.background="#fff"
		topdes[this.index].style.borderColor="#eee";
		topdes[this.index].style.height="34px"
		xiangxilist[this.index].style.display="block";
	},function(){
		topdes[this.index].style.background="#f6f6f6";
		topdes[this.index].style.height="32px"
		topdes[this.index].style.borderColor="transparent";
		xiangxilist[this.index].style.display="none";
	})

};




// banner图
var bantuimg=$(".bantuimg");
var banbtn=$(".dianbtnn");
var bannerbox=$(".banner")[0];
var bannerbg=["#4C0004","#E8E8E8","#B10006","#ED0C52","#310708","#DEDFE3"]
for(var i=0;i<banbtn.length;i++){
	banbtn[i].index=i;
	banbtn[i].onmouseover=function(){
		for (var i = 0;i<bantuimg.length;i++) {
			num=this.index;
			bantuimg[i].style.zIndex="1";
			banbtn[i].style.backgroundImage="url(images/9.png)";
			bantuimg[i].style.opacity=0.8;
			bannerbox.style.opacity=0.8;
		}
		bantuimg[this.index].style.zIndex="2";
		this.style.backgroundImage="url(images/8.png)";
		animate(bantuimg[num],{opacity:1});
		bannerbox.style.background=bannerbg[this.index];
		animate(bannerbox,{opacity:1});
	}
}
var num=0;
function banner(){
	num++;
	if (num==bantuimg.length) {
		num=0;
	}
	if (num==-1) {
		num=banbtn.length-1;
	}
	for (var i = 0;i<bantuimg.length;i++) {
		bantuimg[i].style.zIndex="1";
		banbtn[i].style.backgroundImage="url(images/9.png)";
		bantuimg[i].style.opacity=0.5;
		bannerbox.style.opacity=0.5;
	}
	bantuimg[num].style.zIndex="2";
	banbtn[num].style.backgroundImage="url(images/8.png)";
	animate(bantuimg[num],{opacity:1});
	bannerbox.style.background=bannerbg[num];
	animate(bannerbox,{opacity:1});
}
var bannert=setInterval(banner,3000);
bannerbox.onmouseover=function(){
	clearInterval(bannert);
}
bannerbox.onmouseout=function(){
	bannert=setInterval(banner,3000);
}
// 品牌街右边商家出现效果(在css中添加样式)
var brand_item=$(".brand_item");
var brand_mask=$(".brand_mask");
var brand_mask1=$(".brand_mask1");
for (var i = 0; i < brand_item.length; i++) {
	brand_item[i].index=i;
	brand_item[i].onmouseover=function(){
		animate(brand_mask[this.index],{opacity:1},200)
		animate(brand_mask1[this.index],{opacity:0.8},200)
	}
	brand_item[i].onmouseout=function(){
		animate(brand_mask[this.index],{opacity:0})
		animate(brand_mask1[this.index],{opacity:0})
	}
}


// 楼层跳转
var louceng=$(".louceng");
var floorbtn=$(".floorbtn");
var chuangkou=getWindow();
for (var i = 0; i < floorbtn.length; i++) {
	floorbtn[i].index=i;
	floorbtn[i].onclick=function(){
		var st=louceng[this.index].offsetTop-20;
		animate(chuangkou,{scrollTop:st})
	}
}
//返回顶部
var totop=$(".totop")[0];
totop.onclick=function(){
	animate(chuangkou,{scrollTop:0});
}
var xiangtop=$(".xiangtop")[0];
xiangtop.onclick=function(){
	animate(chuangkou,{scrollTop:0});
}

// 最右边导航描述的特效
var des=$(".des");
var rtnav=$(".rtnav");
for (var i = 0; i < rtnav.length; i++) {
	rtnav[i].index=i;
	rtnav[i].onmouseover=function(){
		animate(des[this.index],{right:35,opacity:1});
		rtnav[this.index].style.background="#C40000";
		des[this.index].style.display="block";
	}
	rtnav[i].onmouseout=function(){
		animate(des[this.index],{right:90,opacity:0});
		rtnav[this.index].style.background="#000";
		des[this.index].style.display="none";
	}
}
var dess=$(".dess")[0];
var	erweima=$(".erweima")[0];
erweima.onmouseover=function(){
	animate(dess,{right:35,opacity:1});
	erweima.style.background="#C40000";
	dess.style.display="block";
}
erweima.onmouseout=function(){
	animate(dess,{right:90,opacity:0});
	erweima.style.background="#000";
	dess.style.display="none";
}



// 六个分类中的每个小块左移的效果
var qzxiaokuai=$(".qzxiaokuai");
var qzxkimg=$(".qzxkimg")
for (var i = 0;i<qzxiaokuai.length;i++) {
	qzxiaokuai[i].index=i;
	qzxiaokuai[i].onmouseover=function(){
		animate(qzxkimg[this.index],{marginLeft:80});
	}

	qzxiaokuai[i].onmouseout=function(){
		animate(qzxkimg[this.index],{marginLeft:90});
	}
}
var	qzxkrimg=$(".qzxkrimg")
var qzrkuai=$(".qzrkuai")
for (var i = 0;i<qzrkuai.length;i++) {
	qzrkuai[i].index=i;
	qzrkuai[i].onmouseover=function(){
		animate(qzxkrimg[this.index],{marginLeft:138});
	}

	qzrkuai[i].onmouseout=function(){
		animate(qzxkrimg[this.index],{marginLeft:148});
	}
}	
var cdkwoneimg=$(".cdkwoneimg")[0];
var cdonexk=$(".cdonexk")[0];
cdonexk.onmouseover=function(){
	animate(cdkwoneimg,{right:10});
}

cdonexk.onmouseout=function(){
	animate(cdkwoneimg,{right:0});
}

// 潮流前沿放大效果
var chao2=$(".chao2")
var chaoimg=$(".chaoimg")
for (var i = 0; i < chao2.length; i++) {
	chao2[i].index=i;
	chao2[i].onmouseover=function(){
		animate(chaoimg[this.index],{width:145,height:145})
	}
	chao2[i].onmouseout=function(){
		animate(chaoimg[this.index],{width:140,height:140})
	}
}

// banner左边的导航效果
var	bannavlist=$(".bannavlist");
var banLeftList=$(".ban_left_list");
for (var i = 0; i < bannavlist.length; i++) {
	bannavlist[i].index=i;
	hover(bannavlist[i],function(){
		banLeftList[this.index].style.display="block";
		bannavlist[this.index].style.color="#e54077";
	},function(){
		banLeftList[this.index].style.display="none";
		bannavlist[this.index].style.color="#000";
	})

};
// bannavlist.onmouseover=function(){
// 	banLeftList.style.display="block";
// }

// 页面缓存加载效果(优化2)
// var imgarr=$("img");
// var ksheight=document.documentElement.clientHeight;
// for (var i = 0;i<imgarr.length;i++) {
// 	if (ksheight>getPosition(imgarr[i]).y) {
// 		imgarr[i].datesrc=imgarr[i].src;
// 	}else{
// 		imgarr[i].datesrc=imgarr[i].src;
// 		imgarr[i].src="";
// 	}
// }
// window.onscroll=function(){
// 	var st=chuangkou.scrollTop;
// 	for (var i = 0; i < imgarr.length; i++) {
// 		if (st+ksheight>getPosition(imgarr[i]).y) {
// 			imgarr[i].src=imgarr[i].datesrc;
// 		}
// 	}
// }


})

