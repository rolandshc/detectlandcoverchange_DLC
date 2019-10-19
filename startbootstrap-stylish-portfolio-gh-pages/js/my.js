function hello(){
    alert("Hello, World!");
}
counter = 0
function test_toggle(){
    var img_list = ['img/ee-2000.PNG','img/ee-2005.PNG','img/ee-2015.PNG'] 
    var img_number = ['2000','2005','2015']
    document.getElementById('main-img').src=img_list[counter % img_list.length]
    document.getElementById('main-number').innerHTML=img_number[counter % img_list.length]
    counter++
    // alert(counter % img_list.length)
}
