function getJsonLength(jsonData){
    var jsonLength = 0;
    for(var item in jsonData){
       jsonLength++;
    }
    return jsonLength;
}
//编辑个人信息框
$("#Bianji").click(function(){
	$("#information").css("visibility","visible");
	var ele=document.getElementById("Bianji");
	var PAGE_CONTENT=document.getElementById("Form");
	PAGE_CONTENT.removeChild(ele);
	document.getElementById("nickname").value= "1";
	/*document.getElementById("sex").value= $.session.get('sex');
	document.getElementById("age").value= $.session.get('age');
	document.getElementById("phoneNumber").value= $.session.get('phoneNumber');
	document.getElementById("QQ").value= $.session.get('QQ');
	document.getElementById("WeChat").value= $.session.get('WeChat');
	document.getElementById("address").value= $.session.get('address');*/	
});

//个人信息提交
$("#submit").click(function(){
	/*var nickname=document.getElementById("nickname").value;
	var sex=document.getElementById("sex").value;
	var age=document.getElementById("age").value;
	var phoneNumber=document.getElementById("phoneNumber").value;
	var QQ=document.getElementById("QQ").value;
	var WeChat=document.getElementById("WeChat").value;
	var address=document.getElementById("address").value;
	$.ajax({ url: 'control.php',
	    type: 'post',
	    data:{"nickname":nickname,"sex":sex,"age":agr,"phoneNumber":phoneNumber,"QQ":QQ,"WeChat":WeChat,"address":address}, 
	    dataType:'json',
	    success: function(res)
	    {*/	
	    	var bianji=document.createElement("p");
	    	bianji.id="Bianji";
	    	bianji.innerHTML="编辑信息";
	    	$("#information").css("visibility","hidden");
	    /*}
	});*/
});

$("#messageHistory").click(function(){
	$("#PAGE_CONTENT").load("../chat_html/login.html");
	$("#PAGE_BUTTON").innerHTML="";
})
//购物车
$("#shoppingCar").click(function(){
	var items=8;
	var PAGE_CONTENT=document.getElementById("PAGE_CONTENT");
	var PAGE_BUTTON=document.getElementById('PAGE_BUTTON');
	PAGE_CONTENT.innerHTML="";
	PAGE_BUTTON.innerHTML="";
	//动态显示界面的函数
		for(var i=0;i<2;i++){
			var messageDiv=document.createElement("div");
			messageDiv.className="messageDiv";
			var message=document.createElement("tr");
			message.className="message";
			var td1=document.createElement("td");
			td1.className="td1";
			var td2=document.createElement("td");
			td2.className="td2";
			var td3=document.createElement("td");
			td3.className="td3";
			var td4=document.createElement("td");
			td4.className="td4";
			/**************td1*************/
			var img=document.createElement("img");
			img.src="../picture/jiepin.png";
			td1.appendChild(img);
			/**************td2**************/
			var bookname=document.createElement("p");
			bookname.innerHTML="我的书"+"<br/>";
			// bookname.style.fontSize="22px";
			// bookname.style.fontWeight="800";
			var author=document.createElement("p");
			author.innerHTML="作者："+"王益潮"+"<br/>"
			var publishingHouse=document.createElement("p");
			publishingHouse.innerHTML="出版社："+"王益潮出版社";
			td2.appendChild(bookname);
			td2.appendChild(author);
			td2.appendChild(publishingHouse);
			/**************td3*************/
			var price=document.createElement("p");
			price.innerHTML="<br/>￥ "+20;
			price.style.fontSize="20px";
			var button=document.createElement("button");
			button.className="buyButton";
			button.innerHTML="购买";
			button.value=123;
			button.onclick=function(){
				$.session.set("testKey",this.value);
				window.location.href="stuffmessage.html";
			};
			td3.appendChild(price);
			td3.appendChild(button);
			/*************td4***************/
			var deleteButton=document.createElement("button");
			deleteButton.className="deleteButton";
			deleteButton.value=i;
			deleteButton.innerHTML="从购物车删除";
			deleteButton.onclick=function(){
				var userId="123456";//$.session.get("userId");
				$.ajax({ url: '../php/deleteShoppingCar.php',
					type: 'post',
					data:{"userId":userId,"bookId":data[i].bookId}, 
					dataType:'json',
					success: function(res){}
			    });
			};
			td4.appendChild(deleteButton);
			/************************/
			message.appendChild(td1);
			message.appendChild(td2);
			message.appendChild(td3);
			message.appendChild(td4);
			messageDiv.appendChild(message);
			PAGE_CONTENT.appendChild(messageDiv);
		}
		
		for(var i=0;i<2;i++){
			var pageButton=document.createElement("button");
			pageButton.className="pageButton";
			pageButton.value=i;
			pageButton.innerHTML=i;
			PAGE_BUTTON.appendChild(pageButton);
		}

});

$("#translateHistory").click(function(){
	var items=8;
	var PAGE_CONTENT=document.getElementById("PAGE_CONTENT");
	var PAGE_BUTTON=document.getElementById('PAGE_BUTTON');
	PAGE_BUTTON.innerHTML="";
	PAGE_CONTENT.innerHTML="";
	//动态显示界面的函数
	for(var i=0;i<3;i++){
		var messageDiv=document.createElement("div");
		messageDiv.className="transMessageDiv";
		var message=document.createElement("tr");
		message.className="transMessage";
		var td1=document.createElement("td");
		td1.className="td1";
		var td2=document.createElement("td");
		td2.className="td2";
		var td3=document.createElement("td");
		td3.className="td3";
		var td4=document.createElement("td");
		td4.className="td4";
		/**************td1*************/
		var img=document.createElement("img");
		img.src="../picture/jiepin.png";
		td1.appendChild(img);
		/**************td2**************/
		var bookname=document.createElement("p");
		bookname.innerHTML="我的书"+"<br/>";
		bookname.style.fontSize="22px";
		bookname.style.fontWeight="800";
		var author=document.createElement("p");
		author.innerHTML="作者："+"王益潮"+"<br/>"
		var publishingHouse=document.createElement("p");
		publishingHouse.innerHTML="出版社："+"山东大学出版社";
		td2.appendChild(bookname);
		td2.appendChild(author);
		td2.appendChild(publishingHouse);
		/**************td3*************/
		var price=document.createElement("p");
		price.innerHTML="订单金额：￥ "+20;
		var orderId=document.createElement("p");
		orderId.innerHTML="订单号：￥ "+12331;
		var transTime=document.createElement("p");
		transTime.innerHTML="交易时间："+"11:11:11";
		td3.appendChild(price);
		td3.appendChild(orderId);
		td3.appendChild(transTime);
		/*************td4***************/
		var deleteButton=document.createElement("button");
		deleteButton.className="deleteButton";
		deleteButton.value=i;
		deleteButton.innerHTML="删除历史记录";
		deleteButton.onclick=function(){
			var userId="123456";//$.session.get("userId");
			$.ajax({ url: '../php/delete_transHistory.php',
				type: 'post',
				data:{"userId":userId,"bookId":11}, 
				dataType:'json',
				success: function(resdata){}
		    });
		}
		td4.appendChild(deleteButton);
		/************************/
		message.appendChild(td1);
		message.appendChild(td2);
		message.appendChild(td3);
		message.appendChild(td4);
		messageDiv.appendChild(message);
		PAGE_CONTENT.appendChild(messageDiv);
	}
	
	for(var i=0;i<2;i++){
		var pageButton=document.createElement("button");
		pageButton.className="pageButton";
		pageButton.value=i;
		pageButton.innerHTML=i;
		PAGE_BUTTON.appendChild(pageButton);
	}
});

$("#lostLog").click(function(){
	var items=8;
	var PAGE_CONTENT=document.getElementById("PAGE_CONTENT");
	var PAGE_BUTTON=document.getElementById('PAGE_BUTTON');
	PAGE_BUTTON.innerHTML="";
	PAGE_CONTENT.innerHTML="";
	for(var i=0;i<5;i++){
		var messageDiv=document.createElement("div");
		messageDiv.className="lostMessageDiv";
		var message=document.createElement("tr");
		message.className="lostMessage";
		var td1=document.createElement("td");
		td1.className="td1";
		var td2=document.createElement("td");
		td2.className="td2";
		var td3=document.createElement("td");
		td3.className="td3";
		var td4=document.createElement("td");
		td4.className="td4";
		/**************td1*************/
		var img=document.createElement("img");
		img.src="../picture/jiepin.png";
		td1.appendChild(img);
		/**************td2**************/
		var title=document.createElement("p");
		title.innerHTML="标题"+"<br/>";
		// title.style.fontSize="22px";
		// title.style.fontWeight="800";
		var lostTime=document.createElement("p");
		lostTime.innerHTML="丢失时间："+"11:12:11"+"<br/>"
		var lostRange=document.createElement("p");
		lostRange.innerHTML="丢失范围："+"图书馆";
		td2.appendChild(title);
		td2.appendChild(lostTime);
		td2.appendChild(lostRange);
		/*************td4***************/
		var deleteButton=document.createElement("button");
		deleteButton.className="deleteButton";
		deleteButton.value=i;
		deleteButton.innerHTML="删除丢失记录";
		deleteButton.onclick=function(){
			var userId="123456";//$.session.get("userId");
			$.ajax({ url: '../php/delete_lostLog.php',
				type: 'post',
				data:{"userId":userId,"bookId":data[i].bookId}, 
				dataType:'json',
				success: function(resdata){}
		    });
		}
		td4.appendChild(deleteButton);
		/************************/
		message.appendChild(td1);
		message.appendChild(td2);
		message.appendChild(td4);
		messageDiv.appendChild(message);
		PAGE_CONTENT.appendChild(messageDiv);
	}

	for(var i=0;i<2;i++){
		var pageButton=document.createElement("button");
		pageButton.className="pageButton";
		pageButton.value=i;
		pageButton.innerHTML=i;
		PAGE_BUTTON.appendChild(pageButton);
	}
});

$("#pickedLog").click(function(){
	var items=8;
	var PAGE_CONTENT=document.getElementById("PAGE_CONTENT");
	var PAGE_BUTTON=document.getElementById('PAGE_BUTTON');
	PAGE_BUTTON.innerHTML="";
	PAGE_CONTENT.innerHTML="";
	for(var i=0;i<2;i++){
		var messageDiv=document.createElement("div");
		messageDiv.className="pickedMessageDiv";
		var message=document.createElement("tr");
		message.className="pickedMessage";
		var td1=document.createElement("td");
		td1.className="td1";
		var td2=document.createElement("td");
		td2.className="td2";
		var td3=document.createElement("td");
		td3.className="td3";
		var td4=document.createElement("td");
		td4.className="td4";
		/**************td1*************/
		var img=document.createElement("img");
		img.src="../picture/jiepin.png";
		td1.appendChild(img);
		/**************td2**************/
		var title=document.createElement("p");
		title.innerHTML="条目标题"+"<br/>";
		// title.style.fontSize="22px";
		// title.style.fontWeight="800";
		var pickedTime=document.createElement("p");
		pickedTime.innerHTML="拾到时间："+"11:11:12"+"<br/>";
		var release=document.createElement("p");
		release.innerHTML="归还时间："+"13:12:11"+"<br/>";
		var pickedRange=document.createElement("p");
		pickedRange.innerHTML="拾到地点："+"博物馆";
		td2.appendChild(title);
		td2.appendChild(pickedTime);
		td2.appendChild(release);
		td2.appendChild(pickedRange);
		/*************td4***************/
		var deleteButton=document.createElement("button");
		deleteButton.className="deleteButton";
		deleteButton.value=i;
		deleteButton.innerHTML="删除拾物记录";
		deleteButton.onclick=function(){
			var userId="123456";//$.session.get("userId");
			$.ajax({ url: '../php/delete_pickedLog.php',
				type: 'post',
				data:{"userId":userId,"bookId":data[i].bookId}, 
				dataType:'json',
				success: function(resdata){}
		    });
		}
		td4.appendChild(deleteButton);
		/************************/
		message.appendChild(td1);
		message.appendChild(td2);
		message.appendChild(td4);
		messageDiv.appendChild(message);
		PAGE_CONTENT.appendChild(messageDiv);
	}
	
	for(var i=0;i<3;i++){
		var pageButton=document.createElement("button");
		pageButton.className="pageButton";
		pageButton.value=i;
		pageButton.innerHTML=i;
		PAGE_BUTTON.appendChild(pageButton);
	}
		
});