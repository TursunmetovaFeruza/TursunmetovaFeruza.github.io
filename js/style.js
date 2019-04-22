	var i=0;
	var images=[];
	images=[
	'style/img/1.jpg',
	'style/img/2.jpg',
	'style/img/3.jpg',
	'style/img/4.jpg',
	'style/img/5.jpg'
	];

		document.slide.src=images[0];
	$('section').on('click','#left',function(){
		var s=0;
		if(i>images.length-1){
			i--;
			s=i+1;
			document.slide.src=images[i];
			 document.getElementById("slide-id").innerHTML ="0"+s+" / 05";
		}else{
			i=0;
			s=i+1;
			 document.getElementById("slide-id").innerHTML ="0"+s+" / 05";
			document.slide.src=images[i];
		}
	})
	
	$('section').on('click','#right',function(){	
		if(i<images.length-1){
			i++;
			s=i+1;
			 document.getElementById("slide-id").innerHTML ="0"+s+" / 05";
			document.slide.src=images[i];
		}else{
			i=0;
			s=i+1;
			 document.getElementById("slide-id").innerHTML ="0"+s+" / 05";
			document.slide.src=images[i];
		}
	})

	images2=[
	'../style/img/paint1.png',
	'../style/img/paint2.png'
	];

	var j=images2.length;
	document.slide1.src=images2[0];
	document.slide2.src=images2[1];
	$('section').on('click','#left1',function(){
		
		if(i>images2.length-1){
			i--;
			document.slide1.src=images2[i];
			document.slide2.src=images2[i+1];
		}else{
			i=0;
			document.slide1.src=images2[i];
			document.slide2.src=images2[i+1];
		}
	})
	
	$('section').on('click','#right1',function(){	
		if(j<images2.length-1){
			j++;
				console.log("hs2 "+j);
				document.slide1.src=images2[j-1];
				document.slide2.src=images2[j];
			j++;
		}else{
			console.log("hs "+j);
			document.slide1.src=images2[j-1];
			document.slide2.src=images2[j-2];
			j=j-2;
		}
	})	