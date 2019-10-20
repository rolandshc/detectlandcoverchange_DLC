$('div .checkbox').click(function () {
                 checkedState = $(this).attr('checked');
                  $(this).parent('div').children('.checkbox:checked').each(function () {
                      $(this).attr('checked', false);
                  });
                  $(this).attr('checked', checkedState);
});


function hello(){
    alert("Hello, World!");
}
counter = 1
function test_toggle(){
    var img_list = ['img/ee-2000.PNG','img/ee-2005.PNG','img/ee-2015.PNG']
    var img_number = ['2000','2005','2015']
    var yearFrom = document.getElementById('yearFrom').values
    var yearTo = document.getElementById('yearTo').values
    document.getElementById('main-img').src=img_list[counter % img_list.length]
    document.getElementById('main-number').innerHTML=img_number[counter % img_list.length]
    counter++
    // alert(counter % img_list.length)
}

is_forrest = false

function toggle_map(e){
    console.log(e)
    is_forrest = !is_forrest
    var img_list = ['img/ee-map.PNG','img/ee-2005.PNG']
    var img_number = ['...','2000']
    var yearFrom = document.getElementById('yearFrom').values
    var yearTo = document.getElementById('yearTo').values
    // e.addClass('active');
    if (is_forrest){
        e.classList.add("active");
    }else{
        e.classList.remove("active");
    }
    console.log(e.innerHTML)

    document.getElementById('main-img').src=img_list[counter % img_list.length]
    // document.getElementById('main-number').innerHTML=img_number[counter % img_list.length]
    counter++
    // alert(counter % img_list.length)
}
function toggle_year(){

    // var is_forrest = document.getElementById('yearFrom')
    if(!is_forrest){
        return
    }
    var img_list = ['img/ee-2000.PNG','img/ee-2005.PNG','img/ee-2015.PNG']
    var yearFrom = document.getElementById('yearFrom').values
    var yearTo = document.getElementById('yearTo').values
    document.getElementById('main-img').src=img_list[counter % img_list.length]
    // document.getElementById('main-number').innerHTML=img_number[counter % img_list.length]
    counter++
    // alert(counter % img_list.length)
}

function getPos(e){
        x = e.clientX || e.touches[0].clientX;
        y = e.clientY || e.touches[0].clientY;
    		document.getElementById("xCo").innerHTML= x
        document.getElementById("yCo").innerHTML= y
    	}

function stopTracking(){
    		document.getElementById("main-img").innerHTML="";
    	}


function resizeImg (img)
            	  {
                var orignW = document.getElementById('main-img').clientWidth
                var orignH = document.getElementById('main-img').clientHeight
                if (orignW > 400 || orignH > 300)
                {
                  img.style.height = "250px";
                  img.style.width  = "100%";
                }
                else {
                  var resize = 550; // resize amount in percentage
              		var origH  = 250;  // original image height
              		var origW  = 350; // original image width
              		var mouseX = parseInt(document.getElementById("xCo").innerHTML);
              		var mouseY = parseInt(document.getElementById("yCo").innerHTML);
              		//var newH   = origH * (resize / 100) + "px";
              		//var newW   = origW * (resize / 100) + "px";
                  var newH   = origH * (resize / 100) + "px";
                  var newW   = origW * (resize / 100) + "px";
                  var newHvalue   = origH * (resize / 100);
                  var newWvalue   = origW * (resize / 100);
                  	// Set the new width and height
                    img.style.height = newH;
                    img.style.width  = newW;

              	//	var c = img.parentNode;
                var left = mouseX * (resize / 100) - (newHvalue / 2) / 2;
                var top = mouseY * (resize / 100) - (newWvalue / 2) / 2;
                  document.getElementById('imageContainer').scrollLeft = left;
                  document.getElementById('imageContainer').scrollTop = top;
              		// Work out the new center

                }


            	  }

function hammer(){
  var myElement = document.getElementById('main-img');

  // We create a manager object, which is the same as Hammer(), but without the presetted recognizers.
  var mc = new Hammer.Manager(myElement);


  // Tap recognizer with minimal 2 taps
  mc.add( new Hammer.Tap({ event: 'doubletap', taps: 2 }) );
  // Single tap recognizer
  mc.add( new Hammer.Tap({ event: 'singletap' }) );


  // we want to recognize this simulatenous, so a quadrupletap will be detected even while a tap has been recognized.
  mc.get('doubletap').recognizeWith('singletap');
  // we only want to trigger a tap, when we don't have detected a doubletap
  mc.get('singletap').requireFailure('doubletap');


  mc.on("doubletap", function(ev) {
      var myElement = document.getElementById('main-img');
      resizeImg(myElement);
  });

}
