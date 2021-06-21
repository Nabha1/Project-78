var images = ["https://www.clipartkey.com/mpngs/m/50-501400_family-clip-art-png-family-clipart.png",
"https://i.pinimg.com/474x/77/cc/bb/77ccbbdda7411fe2c4feaf11a24a04e8.jpg",
"https://s3-ap-southeast-1.amazonaws.com/storage-2-eu/wp-content/uploads/2019/05/19163105/family-brother.jpg",
"https://thumbs.dreamstime.com/z/smiling-mother-illustration-white-background-34713707.jpg",
"https://i.pinimg.com/originals/87/b8/3b/87b83ba77a10a1d3313ed7872918524d.jpg"];

var names = ["Family Book","Nabha","Aditya","Swati","Kapilkumar"];

var i = 0;
function update()
 {

    i++;
    var numbers_of_family_member_in_array = 5
if(i > numbers_of_family_member_in_array)
{
    i=0;
}   
var updatedImage = images[i];
var updatedName = names[i];
document.getElementById("family_member_image").src = updatedImage;
document.getElementById("family_member_name").innerHTML = updatedName;
}