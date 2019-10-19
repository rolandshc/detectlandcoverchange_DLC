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

function toggle_map(){
    is_forrest = !is_forrest
    var img_list = ['img/ee-map.PNG','img/ee-2005.PNG']
    var img_number = ['...','2000']
    var yearFrom = document.getElementById('yearFrom').values
    var yearTo = document.getElementById('yearTo').values
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
