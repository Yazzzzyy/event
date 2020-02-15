
function upDate(previewPic){
    var pic= previewPic.getAttribute("src");
    var alt= previewPic.getAttribute("alt");
    document.getElementById('image').style.backgroundImage = "url(" + pic +  ")";
    document.getElementById('image').innerHTML = alt;
   }

   function unDo(){
    undo = document.getElementById('image');
    undo.style.backgroundImage= "url('')";
    document.getElementById('image').innerHTML="Hover over an image below to display here.";
   
   }