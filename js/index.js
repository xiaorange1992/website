var oWrapper=document.getElementById('wrapper');
var oVW=document.getElementById('view_wrapper');
var oSide=document.getElementById('tv_side');
var oSO=document.getElementById('sw_on');
var oDiv=oSide.getElementsByTagName('div');
var oData=oSide.getElementsByTagName('div')[0];
var oSkill=oSide.getElementsByTagName('div')[1];
var oCourse=oSide.getElementsByTagName('div')[2];
var oAb=oSide.getElementsByTagName('div')[3];
var oTalk=document.getElementsByClassName('talk')[0];
var oIcon=document.getElementsByClassName('my_icon')[0];
var oText=document.getElementsByClassName('text');
var oText1=document.getElementsByClassName('text1')[0];
var oText2=document.getElementsByClassName('text2')[0];
var oText3=document.getElementsByClassName('text3')[0];
var oText4=document.getElementsByClassName('text4')[0];
var  oName=document.getElementsByClassName('tv_name')[0];
var oHead=document.getElementsByClassName('tv_head')[0];
var oTvSkill=document.getElementsByClassName('tv_skill')[0];
var oMs=document.getElementsByClassName('more_skill');
var i=oInfo=document.getElementsByClassName('info');
var oIconImg=document.getElementsByClassName('icon_img');
var oMP=document.getElementsByClassName('tv_my_programes')[0];
var om1=document.getElementById('menulist1');
var om2=document.getElementById('menulist2');
var om3=document.getElementById('menulist3');
var om4=document.getElementById('menulist4');
var om5=document.getElementById('menulist5');
var opi=document.getElementsByClassName('pinfo');
var om11=document.getElementsByClassName('m11');

var index=0;
var mindex=0;
//tv_side
//tv_side_data
oData.onclick=function(){
	oMP.style.bottom='-100%';
	for (var i = oMs.length - 1; i >= 0; i--) {
		oMs[i].style.opacity=0;
	}
	for (var i = oInfo.length - 1; i >= 0; i--) {
		oInfo[i].style.opacity=0;
	}
	for (var i = oIconImg.length - 1; i >= 0; i--) {
		oIconImg[i].style.opacity=1;
	}
	//oTvSkill.style.visibility='hidden';
	oIcon.style.opacity=1;
	for (var i = oText.length - 1; i >= 0; i--) {
		oText[i].style.marginLeft='25px';
		oText[i].style.marginTop='10px';
	}
	oHead.style.transform='scale(1)';
	oHead.style.left='50%';
	oHead.style.marginLeft='-60px';
	oName.style.left='50%';
	oName.style.top='42%';
	oName.style.marginLeft='-60px';
	for (var i = oDiv.length - 1; i >= 0; i--) {
		for (var i = oDiv.length - 1; i >= 0; i--) {
			oDiv[i].className='';
		}
		oData.className='active';
	}
}
//tv_side_skill
oSkill.onclick=function(){
	oSkill.style.display='block';
	oMP.style.bottom='-100%';
	for (var i = oMs.length - 1; i >= 0; i--) {
		index=rnd(1,500);
		oMs[i].style.opacity=1;
		oMs[i].style.transitionDelay=`${index}ms`;
	}
	for (var i = oInfo.length - 1; i >= 0; i--) {
		oInfo[i].style.opacity=0;
	}
	for (var i = oIconImg.length - 1; i >= 0; i--) {
		oIconImg[i].style.opacity=0;
	}
	oIconImg[0].style.opacity=0;
	oText[1].style.opacity=1;
	oText
	for (var i = oText.length - 1; i >= 0; i--) {
		oText[i].style.visibility='visible';
	}
	oText1.style.marginTop='-130px';
	oText1.style.marginLeft='-0px';
	oText2.style.marginTop='-90px';
	oText2.style.marginLeft='-153px';
	oText3.style.marginTop='-50px';
	oText3.style.marginLeft='-307px';
	oText4.style.marginTop='-10px';
	oText4.style.marginLeft='-462px';
	oName.style.left=0;
	oName.style.top='120px';
	oName.style.margin=0;
	oHead.style.left=0;
	oHead.style.margin=0;
	oHead.style.transform='scale(0.7)';
	for (var i = oDiv.length - 1; i >= 0; i--) {
		for (var i = oDiv.length - 1; i >= 0; i--) {
			oDiv[i].className='';
		}
		oSkill.className='active';
	}
}
oCourse.onclick=function(){
	for (var i = oMs.length - 1; i >= 0; i--) {
		oMs[i].style.opacity=0;
	}
	for (var i = oInfo.length - 1; i >= 0; i--) {
		oInfo[i].style.opacity=0;
	}
	for (var i = oIconImg.length - 1; i >= 0; i--) {
		oIconImg[i].style.opacity=0;
	}
	oIconImg[0].style.opacity=0;
	oText[1].style.opacity=1;
	oText
	for (var i = oText.length - 1; i >= 0; i--) {
		oText[i].style.visibility='visible';
	}
	oText1.style.marginTop='-130px';
	oText1.style.marginLeft='-0px';
	oText2.style.marginTop='-90px';
	oText2.style.marginLeft='-153px';
	oText3.style.marginTop='-50px';
	oText3.style.marginLeft='-307px';
	oText4.style.marginTop='-10px';
	oText4.style.marginLeft='-462px';
	oName.style.left=0;
	oName.style.top='120px';
	oName.style.margin=0;
	oHead.style.left=0;
	oHead.style.margin=0;
	oHead.style.transform='scale(0.7)';
	for (var i = oDiv.length - 1; i >= 0; i--) {
		for (var i = oDiv.length - 1; i >= 0; i--) {
			oDiv[i].className='';
		}
		oCourse.className='active';
	}
	for (var i = oMs.length - 1; i >= 0; i--) {
		oMs[i].style.opacity=0;
	}
	oMP.style.bottom='-15%';
}
oAb.onclick=function(){
	oMP.style.bottom='-100%';
	for (var i = oMs.length - 1; i >= 0; i--) {
		oMs[i].style.opacity=0;
	}
	for (var i = oInfo.length - 1; i >= 0; i--) {
		index2=rnd(1,500);
		oInfo[i].style.opacity=1;
		oInfo[i].style.transitionDelay=`${index2}ms`;
	}
	for (var i = oIconImg.length - 1; i >= 0; i--) {
		oIconImg[i].style.opacity=0;
	}
	oIconImg[0].style.opacity=0;
	oText[1].style.opacity=1;
	oText
	for (var i = oText.length - 1; i >= 0; i--) {
		oText[i].style.visibility='visible';
	}
	oText1.style.marginTop='-130px';
	oText1.style.marginLeft='-0px';
	oText2.style.marginTop='-90px';
	oText2.style.marginLeft='-153px';
	oText3.style.marginTop='-50px';
	oText3.style.marginLeft='-307px';
	oText4.style.marginTop='-10px';
	oText4.style.marginLeft='-462px';
	oName.style.left=0;
	oName.style.top='120px';
	oName.style.margin=0;
	oHead.style.left=0;
	oHead.style.margin=0;
	oHead.style.transform='scale(0.7)';
	for (var i = oDiv.length - 1; i >= 0; i--) {
		for (var i = oDiv.length - 1; i >= 0; i--) {
			oDiv[i].className='';
		}
		oAb.className='active';
	}
}
oTalk.onclick=function(){
	oWrapper.style.display='none';
	oVW.style.display='block';

}
oSO.onclick=function(){
	setTimeout(function(){
		oWrapper.style.display='block';
		oVW.style.display='none';	
		oSO.style.transform='translateX(0)'	
	},400)

	oSO.style.transform='translateX(62%)'	
}
for (var i = om11.length - 1; i >= 0; i--) {
	om11[i].index=i;
	om11[i].onclick=function(){
		for (var i = opi.length - 1; i >= 0; i--) {
			opi[this.index+1].style.transform='';
			opi[i].style.bottom='-50%';
			opi[0].style.opacity ='0';
			opi[i].style.transition='';
		}
		opi[this.index+1].style.bottom='20%';
		opi[this.index+1].style.transition='bottom 2s';
	}
}