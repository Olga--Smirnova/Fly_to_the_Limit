//#########################################################################################

        //SMOOTH SCROLLING

//#########################################################################################

//https://github.com/cferdinandi/smooth-scroll#how-to-contribute - here you may find compiled and production-ready code.
window.onload=function()
{
    smoothScroll.init({
        speed: 500, // How fast to complete the scroll in milliseconds
        easing: 'easeInOutQuint', // Easing pattern to use
    });
};





//#########################################################################################

        //LIKE CALCULATOR

//#########################################################################################

//*********Variables ###############################################################################

var currentTot;

var obj = document.querySelectorAll('.like')    //target all like_btns
var myArray = Array.prototype.slice.call(obj); //make an array of all like_btns
var l;

var objTot = document.querySelectorAll('.total')    //target all <p class="total">
var mysecArray = Array.prototype.slice.call(objTot); //make an array of all <p class="total">
var t;


//**********Calculator ##############################################################################

//get the index of the like_btn, that has been clicked
for(l=0; l<myArray.length; l++)
{
    myArray[l].indexNumber = l;
    myArray[l].onclick = function()
    {
        myArray[this.indexNumber].disabled = true;
        likeCounter(this.indexNumber);
    };
}

//+1 to current amount of likes and put it in <p class="total"> with the same index as the index of clicked like_btn
function likeCounter(t)
{
        if(mysecArray[t].innerHTML.length==0)
        {
            currentTot = 0;
            mysecArray[t].innerHTML = currentTot+1;
        }else{
            currentTot = parseInt(mysecArray[t].innerHTML);
            mysecArray[t].innerHTML = currentTot+1;
        } 
}








//#########################################################################################

        //GALLERY

//#########################################################################################

//******* Variables **********************************************************************************************************

var largePhotos = new Array()
largePhotos[0]= 'assets/images/gallery/680/africa01.jpg';
largePhotos[1]= 'assets/images/gallery/680/africa02.jpg';
largePhotos[2]= 'assets/images/gallery/680/africa03.jpg';
largePhotos[3]= 'assets/images/gallery/680/africa04.jpg';
largePhotos[4]= 'assets/images/gallery/680/africa05.jpg';
largePhotos[5]= 'assets/images/gallery/680/africa06.jpg';
largePhotos[6]= 'assets/images/gallery/680/africa07.jpg';
largePhotos[7]= 'assets/images/gallery/680/africa08.jpg';
largePhotos[8]= 'assets/images/gallery/680/africa09.jpg';
largePhotos[9]= 'assets/images/gallery/680/africa10.jpg';
largePhotos[10]= 'assets/images/gallery/680/africa11.jpg';
largePhotos[11]= 'assets/images/gallery/680/africa12.jpg';
largePhotos[12]= 'assets/images/gallery/680/africa13.jpg';
largePhotos[13]= 'assets/images/gallery/680/africa14.jpg';
largePhotos[14]= 'assets/images/gallery/680/africa15.jpg';
largePhotos[15]= 'assets/images/gallery/680/africa16.jpg';
largePhotos[16]= 'assets/images/gallery/680/africa17.jpg';
largePhotos[17]= 'assets/images/gallery/680/africa18.jpg';
   
var nameInd;
var currentIndex;

var thumbb = new Array()
thumbb[0]= document.querySelector('.thumbs img:nth-of-type(1)');
thumbb[1]= document.querySelector('.thumbs img:nth-of-type(2)');
thumbb[2]= document.querySelector('.thumbs img:nth-of-type(3)');
thumbb[3]= document.querySelector('.thumbs img:nth-of-type(4)');
thumbb[4]= document.querySelector('.thumbs img:nth-of-type(5)');
thumbb[5]= document.querySelector('.thumbs img:nth-of-type(6)');
thumbb[6]= document.querySelector('.thumbs img:nth-of-type(7)');
thumbb[7]= document.querySelector('.thumbs img:nth-of-type(8)');
thumbb[8]= document.querySelector('.thumbs img:nth-of-type(9)');
thumbb[9]= document.querySelector('.thumbs img:nth-of-type(10)');
thumbb[10]= document.querySelector('.thumbs img:nth-of-type(11)');
thumbb[11]= document.querySelector('.thumbs img:nth-of-type(12)');
thumbb[12]= document.querySelector('.thumbs img:nth-of-type(13)');
thumbb[13]= document.querySelector('.thumbs img:nth-of-type(14)');
thumbb[14]= document.querySelector('.thumbs img:nth-of-type(15)');
thumbb[15]= document.querySelector('.thumbs img:nth-of-type(16)');
thumbb[16]= document.querySelector('.thumbs img:nth-of-type(17)');
thumbb[17]= document.querySelector('.thumbs img:nth-of-type(18)');

var n;




//******* Starting Point **********************************************************************************************************

document.querySelector('#mainDisplay').innerHTML = '<img src="assets/images/gallery/680/africa01.jpg">';
document.querySelector('#back').disabled = true;

//inlarge big img, when click .thumb img
for(n=0; n<thumbb.length; n++)
{
    thumbb[n].addEventListener('click', function()
    {
        makeLargeFromAny(this);
    })
}
       
//change big img, when click back/next btns
document.querySelector('#back').addEventListener('click', function()
{
    goBackward();
})

document.querySelector('#next').addEventListener('click', function()
{
    goForward();
})


//******* Functions **********************************************************************************************************

function makeLarge(imgName)
{
    document.querySelector('#mainDisplay').innerHTML='<img src="assets/images/gallery/680/'+imgName+'.jpg">';
}


function makeLargeFromAny(currentObj)
{
    var fullImgName = currentObj.src;
       
    var filename = fullImgName.substring(fullImgName.lastIndexOf("/") +1, fullImgName.lastIndexOf("."));
    makeLarge(filename);

    currentIndex = document.querySelector('#mainDisplay').innerHTML;

    nameInd = parseInt(currentIndex.substring(currentIndex.lastIndexOf("a") +1, currentIndex.lastIndexOf(".")));


    if(nameInd==1)
    {
        document.querySelector('#back').disabled = true;
        document.querySelector('#next').disabled = false;
    }else if(nameInd>=18){
        document.querySelector('#next').disabled = true;
        document.querySelector('#back').disabled = false;
    }else{
        document.querySelector('#next').disabled = false;
        document.querySelector('#back').disabled = false;
    };
}


function goBackward()
{
    currentIndex = document.querySelector('#mainDisplay').innerHTML;
    nameInd = parseInt(currentIndex.substring(currentIndex.lastIndexOf("a") +1, currentIndex.lastIndexOf("."))) - 2;
    document.querySelector('#mainDisplay').innerHTML = '<img src="'+largePhotos[nameInd]+'">';

    if(nameInd==0)
    {
        document.querySelector('#back').disabled = true;
    }else{
        document.querySelector('#next').disabled = false;
    };
}



function goForward()
{
    currentIndex = document.querySelector('#mainDisplay').innerHTML;
    nameInd = parseInt(currentIndex.substring(currentIndex.lastIndexOf("a") +1, currentIndex.lastIndexOf("."))) + 0;
    document.querySelector('#mainDisplay').innerHTML = '<img src="'+largePhotos[nameInd]+'">';

    if(nameInd>=17)
    {
        document.querySelector('#next').disabled = true;
    }else{
        document.querySelector('#back').disabled = false;
    };
}






//#########################################################################################

        //Total Price Counter (Bookings section) + Enable For Trampers Fieldset

//#########################################################################################
// if button BOOK NOW on flight's description page was pressed, the selection on Bookings psge automatically changes according to it
var book = document.querySelectorAll('.book')    //target all book_btns
var bookArray = Array.prototype.slice.call(book); //make an array of all book_btns

var opt = document.querySelectorAll('#select1 option')    //target all possible selection1 options
var optArray = Array.prototype.slice.call(opt); //make an array of all possible selection1 options

// for price calculating according to selection on both forms: main and additional one
var firstArray = new Array();
firstArray['1hr Scenic Flight $350']=350;
firstArray['1hr Scenic Flight, heli $450']=450;
firstArray['2hr Scenic Flight $500']=500;
firstArray['2hr Scenic Flight, heli $550']=550;
firstArray['Sunset Mountain Veiwing $350']=350;
firstArray['Sunset Mountain Veiwing, heli $450']=450;
firstArray['Photographic Flight $400']=400;
firstArray['Aerobatic Flight $350']=350;
firstArray['Ultimate Stunt Flight $400']=400;
firstArray['Lake Trip $550']=550;
firstArray['Glider Flight $550']=550;
firstArray['Fly In-Fly Out $300']=300;
firstArray['Provisioning Service $300']=300;
firstArray['Charters $300']=300;

var secondArray = new Array();
secondArray['1hr Scenic Flight $350']=350;
secondArray['1hr Scenic Flight, heli $450']=450;
secondArray['2hr Scenic Flight $500']=500;
secondArray['2hr Scenic Flight, heli $550']=550;
secondArray['Sunset Mountain Veiwing $350']=350;
secondArray['Sunset Mountain Veiwing, heli $450']=450;
secondArray['Photographic Flight $400']=400;
secondArray['Aerobatic Flight $350']=350;
secondArray['Ultimate Stunt Flight $400']=400;
secondArray['Lake Trip $550']=550;
secondArray['Glider Flight $550']=550;
secondArray['Fly In-Fly Out $300']=300;
secondArray['Provisioning Service $300']=300;
secondArray['Charters $300']=300;

var price = document.querySelector('#price');
var current;
var j;

document.querySelector('#forTrampers1').style.display = 'none';
document.querySelector('#forTrampers2').style.display = 'none';



//get the index of the book_btn, that has been clicked, call the function
for(l=0; l<bookArray.length; l++)
{
    bookArray[l].indexNumber = l;
    bookArray[l].addEventListener('click', function()
    {
      optArray[this.indexNumber].selected = true;
      pressedBtn(this.indexNumber);
    })
}


document.querySelector('#select1').addEventListener('change', function()
{  
    counter();
})

document.querySelector('#select2').addEventListener('change', function()
{
  j = true;
  counter();
})



// finctions *************************************************************************************************************
function selection()
{
  var thisPrice=0;

  var theForm = document.forms["orderForm1"];
  var selectedFlight = theForm.elements["select1"];

  thisPrice = firstArray[selectedFlight.value];

// show the input fields for trampers, if trampers' trips have been selected
  if(selectedFlight.selectedIndex==11 || selectedFlight.selectedIndex==12 || selectedFlight.selectedIndex==13)
  {
    document.querySelector('#forTrampers1').style.display = 'block';
  }else{
    document.querySelector('#forTrampers1').style.display = 'none';
  }
  return thisPrice;
}

function selection2()
{
  var thisPrice=0;

  var theForm = document.forms["orderForm2"];
  var selectedFlight = theForm.elements["select2"];

if(selectedFlight.selectedIndex==11 || selectedFlight.selectedIndex==12 || selectedFlight.selectedIndex==13)
  {
    document.querySelector('#forTrampers2').style.display = 'block';
  }else{
    document.querySelector('#forTrampers2').style.display = 'none';
  }

  thisPrice = secondArray[selectedFlight.value];

  return thisPrice;
}


function pressedBtn(t)
{
    if(t==0 || t==4 || t==7)
        {counter(350);}
    else if(t==6 || t==8)
        {counter(400);}
    else if(t==1 || t==5)
        {counter(450);}
    else if(t==11 || t==12 || t==13)
        {counter(300);
        document.querySelector('#forTrampers1').style.display = 'block';
        }
    else if(t==3 || t==9 || t==10)
        {counter(550);}
    else if(t==2)
        {counter(500);}

}




function counter()
{
  if(j ==true){
    price.innerHTML = selection() + selection2();
  }else{
    price.innerHTML = selection();
  }
}







//#########################################################################################

        //Additional Form For Ordering Second Flight + "Why Do We Ask For" little Btns

//#########################################################################################

document.querySelector('#forform2').style.display = 'none';
document.querySelector('#why1').style.display = 'none';
document.querySelector('#why2').style.display = 'none';
document.querySelector('#cancellationPolicy').style.display = 'none';
document.querySelector('#termsConditions').style.display = 'none';
document.querySelector('#privacyPolicy').style.display = 'none';


// what happend, when you click plus-additional-flight button
document.querySelector('#f1').addEventListener('click', function()
{
    document.querySelector('#forform2').style.display = 'inline-block';
})

document.querySelector('#f4').addEventListener('click', function()
{
    document.querySelector('#forform2').style.display = 'none';
})


// what happend, when you hover why-ask-for-phone-number button
document.querySelector('#f2').addEventListener('mouseover', function()
{
    document.querySelector('#why1').style.display = 'block';
})

document.querySelector('#f2').addEventListener('mouseout', function()
{
    document.querySelector('#why1').style.display = 'none';
})


// what happend, when you hover why-ask-for-email-address button
document.querySelector('#f3').addEventListener('mouseover', function()
{
    document.querySelector('#why2').style.display = 'block';
})

document.querySelector('#f3').addEventListener('mouseout', function()
{
    document.querySelector('#why2').style.display = 'none';
})


// what happend, when you hover cancellation policy link
document.querySelector('#cancellPolLink').addEventListener('mouseover', function()
{
    document.querySelector('#cancellationPolicy').style.display = 'block';
})

document.querySelector('#cancellPolLink').addEventListener('mouseout', function()
{
    document.querySelector('#cancellationPolicy').style.display = 'none';
})

// what happend, when you hover terms and conditions link
document.querySelector('#termsCondLink').addEventListener('mouseover', function()
{
    document.querySelector('#termsConditions').style.display = 'block';
})

document.querySelector('#termsCondLink').addEventListener('mouseout', function()
{
    document.querySelector('#termsConditions').style.display = 'none';
})

// what happend, when you hover privacy policy link
document.querySelector('#privacyPolicyLink').addEventListener('mouseover', function()
{
    document.querySelector('#privacyPolicy').style.display = 'block';
})

document.querySelector('#privacyPolicyLink').addEventListener('mouseout', function()
{
    document.querySelector('#privacyPolicy').style.display = 'none';
})



//#########################################################################################

        //Enable Book Btn, Disable Send A Message Btn

//#########################################################################################

document.querySelector('#submit').disabled = true;
document.querySelector('#sendMessage').disabled = true;


document.querySelector('#agree').addEventListener('change', function()
{   
    if(document.querySelector('#submit').disabled == true)
    {   
        document.querySelector('#submit').disabled = false;
    }else{
        
        document.querySelector('#submit').disabled = true;
    }
});








//#########################################################################################

        //Forms Validation

//#########################################################################################

var sel_msg = 'Choose your flight, please.'
var name_msg = 'Fill it with letters and spaces only, please.';
var tel_msg = 'Fill it with numbers and spaces only, please.';
var mail_msg = 'ex. fly@gmail.com';
var date_msg = 'Choose the date for your trip, please.';
var type_msg = 'This field is required.';
var typeBad_msg = 'No <, > signs, please.';


function tel(str)
{
    rxtel = /^[0-9 ]+$/;
    return (rxtel.test(str));
}

function name(str)
{
    rxname = /^[A-Za-z ]+$/;
    return (rxname.test(str));
}

function alphNumSpaces(str)
{
    rxAlphNumSpaces = /^[a-zA-Z\s\d\.\,]+$/;
    return (rxAlphNumSpaces.test(str));
}

function mail(str)
{
    rxmail = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
    return (rxmail.test(str));
}

function dateType(str)
{
    rxdate = /^(20|20)\d\d[- \/.](0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])$/;
    return (rxdate.test(str));
}


// listeners for blur event for input fields
document.querySelector('#username2').addEventListener('blur', function()
    {
        username(this);
    });

document.querySelector('#urname').addEventListener('blur', function()
    {
        username(this);
    });

document.querySelector('#username').addEventListener('blur', function()
    { 
        username(this);
    });

document.querySelector('#messageTous').addEventListener('blur', function()
    { 
        typeSmth(this);
    });

document.querySelector('#tel').addEventListener('blur', function()
    {
        phone(this);
    });

document.querySelector('#tel2').addEventListener('blur', function()
    {
        phone(this);
    });

document.querySelector('#email').addEventListener('blur', function()
    {
        mailAddress(this);
    });

document.querySelector('#email2').addEventListener('blur', function()
    {
        mailAddress(this);
    });

document.querySelector('#email3').addEventListener('blur', function()
    {
        mailAddress(this);
    });

document.querySelector('#select1').addEventListener('blur', function()
    {
        sel(this);
    });

document.querySelector('#select2').addEventListener('blur', function()
    {
        sel2(this);
    });

document.querySelector('#date').addEventListener('blur', function()
    {
        date(this);
    });

document.querySelector('#date2').addEventListener('blur', function()
    {
        date(this);
    });


// functions, that turns on/off validation *************************************************************************************
// 1) check if the flight was selected
function sel(t)
{   
    if(parseInt(document.querySelector('#price').innerHTML) > 0)
    {
        t.className=t.className.replace('fail','');
        t.nextElementSibling.innerHTML = '';
    }else{
        fail(t, sel_msg);
    }
 }

// 2) check if the flight at aditional form was selected
function sel2(t)
{
    if(parseInt(document.querySelector('#price').innerHTML) > 550)
    {
        t.className=t.className.replace('fail','');
        t.nextElementSibling.innerHTML = '';
    }else{
        fail(t, sel_msg);
    }
}

// 3) check if user did type his/her name
function username(t)
{    
        if(name(t.value))
        {   t.className=t.className.replace('fail','');
            t.nextElementSibling.innerHTML = '';
        }else{
            fail(t, name_msg);
        }
 }

// 4) check if user did type phone number correctly
function phone(t)
{ 
    if(tel(t.value))
    {   t.className=t.className.replace('fail','');
        t.nextElementSibling.innerHTML = '';
    }else{
        fail(t,tel_msg);
    }
 }

// 5) check if user did type email address  correctly
function mailAddress(t)
{ 
        if(mail(t.value))
        {   t.className=t.className.replace('fail','');
            t.nextElementSibling.innerHTML = '';
        }else{
            fail(t, mail_msg);
        }
 }

// 5) check if user did choose the date
function date(t)
{
    if(dateType(t.value))
    {   t.className=t.className.replace('fail','');
        t.nextElementSibling.innerHTML = '';
    }else{
        fail(t, date_msg);
    }
 };

 //6) check if user did forget to type the message on contact us form
function typeSmth(t)
{   if(t.value.length>0)
    {
        if(alphNumSpaces(t.value))
        {
            t.className=t.className.replace('fail','');
            t.nextElementSibling.innerHTML = '';
            document.querySelector('#sendMessage').disabled = false;
        }else{
            t.nextElementSibling.innerHTML = '';
            fail(t, typeBad_msg);
        }
    }else{
        fail(t, type_msg);
    }
 }



function fail(currObj, msg)
{
    currObj.className = 'fail';
    currObj.nextElementSibling.innerHTML = msg;
}






