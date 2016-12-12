//
//	jQuery Validate example script
//
//	Prepared by David Cochran
//
//	Free for your use -- No warranties, no guarantees!
//

$(document).ready(function(){

	// Validate
	// http://bassistance.de/jquery-plugins/jquery-plugin-validation/
	// http://docs.jquery.com/Plugins/Validation/
	// http://docs.jquery.com/Plugins/Validation/validate#toptions

		$('#contact-form').validate({
	    rules: {
	      name: {
	        minlength: 2,
	        required: true
	      },
	      email: {
	        required: true,
	        email: true
	      },
	      subject: {
	      	minlength: 2,
	        required: true
	      },
	      message: {
	        minlength: 2,
	        required: true
	      }
	    },
			highlight: function(element) {
				$(element).closest('.form-group').removeClass('success').addClass('error');
			},
			success: function(element) {
				element
				.text('OK!').addClass('valid')
				.closest('.form-group').removeClass('error').addClass('success');
			}
	  });

}); // end document.ready
$(document).ready(function(){
	var audio = $('audio').get(0);
	var flag=true;
	var musics=[
      {path:'media/群星 - 阳光总在风雨后.mp3'},
      {path:'media/快四-中国锣鼓[唐彪-喜庆舞曲dj版].mp3'},
      {path:'media/张雨生 - 我的未来不是梦.mp3'},
      {path:"media/我把真心给了你.mp3"},
      {path:"media/陈艾湄 - 镜花水月.mp3"},
      {path:"media/孙家山 - 喜庆临门.mp3"},
      ];
    var index=-1;
    var time;
    if(index===musics.length){
    	index=0
    }
      index++;
      audio.src=musics[index].path;
      audio.play();
      flag=true;
      //上一曲
    $(".pre").on("click",function(){
    	if(!flag){
    		return;
    	}
    	if(audio.paused){	
    		audio.pause();
    	}
    	index-=1
    	if(index<0){
    		index=musics.length-1
    	}
    	audio.src=musics[index].path;
      audio.play();
      flag=true;
    })
    //下一曲
   	$(".next").on("click",function(){
    	if(!flag){
    		return;
    	}
    	if(audio.paused){	
    		audio.pause();
    	}
    	index+=1;
    	if(index===musics.length){
    		index=0
    	}
    	audio.src=musics[index].path;
      audio.play();
      flag=true;
    })
   	//停止和播放
    $(".stop").on("click",function(){
    	if(flag){
    		audio.pause();
    		time=audio.currentTime
    		$(".stop-img").css("background","url(img/play.png)");
    		flag=false;
    	}else{
    		audio.src=musics[index].path;
    		audio.currentTime=time;
    		audio.play();
    		$(".stop-img").css("background","url(img/stop.png)");
    		flag=true;
    	}   	
    })
})