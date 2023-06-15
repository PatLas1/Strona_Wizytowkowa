//Przycisk "Hire Me"
function openWindow(){
    document.getElementById("InsideWindow").style.display = "block";
}
function closeWindow(){
    document.getElementById("InsideWindow").style.display = "none";
}


//Przycisk "Let's Talk"
function openingWindow(){
    document.getElementById("IWTalk").style.display = "block";
}
function closedWindow(){
    document.getElementById("IWTalk").style.display = "none";
}


//Przycisk "SMS" wewnątrz przycisku "Let's Talk"
function openInsideWindow(){
    document.getElementById("InsideSMSButton").style.display = "block";
}
/* Stara wersja zamykania okienka bez animacji
function closeInsideWindow(){
    document.getElementById("InsideSMSButton").style.display = "none";
}
*/

//Przycisk "Email" wewnątrz przycisku "Let's Talk"
function openedInsideWindow(){
    document.getElementById("InsideEmailButton").style.display = "block";
}
/* Stara wersja zamykania okienka bez animacji
function closeedInsideWindow(){
    document.getElementById("InsideEmailButton").style.display = "none";
}
*/

//Formularz do wysyłania SMS'ow
document.getElementById("SmsForm").addEventListener("submit", function(event){
    event.preventDefault(); //ta komenda zapobiega domyślnej akcji formularza

    var PhoneNumber = document.getElementById("PhoneNumber").value;
    var message = document.getElementById("message").value;

    //Komenda tworząca link sms z numerem i treścią wiadomości 
    var smsLink = "sms:" + PhoneNumber + "?body=" + encodeURIComponent(message);

    //Przekierowanie użytkownika do aplikacji SMS
    window.location.href = smsLink;
});


//Formularz do wysyłania Email'i
document.getElementById("emailForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Zapobiegamy domyślnej akcji formularza

    var emailAddress = document.getElementById("emailAddress").value;
    var message = document.getElementById("message").value;

    // Tworzymy link mailto z adresem e-mail i treścią wiadomości
    var mailtoLink = "mailto:" + emailAddress + "?body=" + encodeURIComponent(message);

    // Przekierowujemy użytkownika do aplikacji pocztowej
    window.location.href = mailtoLink;
  });

  //Animacja zamykania okienka Email
  var closeButtonEmail = document.getElementById("closeEmail");
  var InsideEmailButtonContent = document.getElementById("InsideEmailButton");

  closeButtonEmail.addEventListener("click", function(){
    InsideEmailButtonContent.classList.add("close-animation");

    setTimeout(function(){
        InsideEmailButtonContent.style.display = "none";
        InsideEmailButtonContent.classList.remove("close-animation");

    }, 500);
  });

  var closeButtonSMS = document.getElementById("closeSms");
  var InsideSMSButtonContent = document.getElementById("InsideSMSButton");

  closeButtonSMS.addEventListener("click", function(){
    InsideSMSButtonContent.classList.add("close-animationSMS");

    setTimeout(function(){
        InsideSMSButtonContent.style.display = "none";
        InsideSMSButtonContent.classList.remove("close-animationSMS");
    }, 500);
  });

//Stworzenie funkcji przycisku przewijania

var prevButton = document.getElementById("Wlewo");
var nextButton = document.getElementById("Wprawo");
var image = document.getElementById("image");
var SellectButton = document.getElementById("Sellect");
var images = ["images/Tlo.jpg", "images/Tlo1.jpg", "images/Tlo2.jpg", "images/Tlo3.jpg", "images/Tlo4.jpg"];
var currentImageIndex = 0;

var GreenCircle = document.getElementById("circle");
var GreenCircle1 = document.getElementById("circle1");
var GreenCircle2 = document.getElementById("circle2");
var GreenCircle3 = document.getElementById("circle3");
var GreenCircle4 = document.getElementById("circle4");

if(currentImageIndex == 0){
    document.getElementById("circle").style.backgroundColor = "green";
}

prevButton.addEventListener("click", function(){
    if(currentImageIndex > 0){
        currentImageIndex--;
        //dodanie zielonej kropki w odpowiednim miejscu
        if(currentImageIndex == 4){
            document.getElementById("circle4").style.backgroundColor = "green";
        }else if(currentImageIndex == 3){
            document.getElementById("circle4").style.backgroundColor = "transparent";
            document.getElementById("circle3").style.backgroundColor = "green";
        }else if(currentImageIndex == 2){
            document.getElementById("circle3").style.backgroundColor = "transparent";
            document.getElementById("circle2").style.backgroundColor = "green";
        }else if(currentImageIndex == 1){
            document.getElementById("circle2").style.backgroundColor = "transparent";
            document.getElementById("circle1").style.backgroundColor = "green";
        }else if(currentImageIndex == 0){
            document.getElementById("circle1").style.backgroundColor = "transparent";
            document.getElementById("circle").style.backgroundColor = "green";
        }
    }else if(currentImageIndex == 0){//zapobieganie przeskakiwaniu z indexu 0 na 4 tablicy
        prevButton.removeEventListener;
    }else{
        currentImageIndex = images.length - 1;
    }

    image.src = images[currentImageIndex];

    //Zamknięcie okna obok opisującego po przejściu na poprzednie zdjęcie
    document.getElementById("BoczneOknoDlaZdj").style.display = "none";
    document.getElementById("BoczneOknoDlaZdj1").style.display = "none";
    document.getElementById("BoczneOknoDlaZdj2").style.display = "none";
    document.getElementById("BoczneOknoDlaZdj3").style.display = "none";
    document.getElementById("BoczneOknoDlaZdj4").style.display = "none";
    document.getElementById("InsideWindow").style.overflow = "hidden";
});

nextButton.addEventListener("click", function() {
    if (currentImageIndex < images.length - 1) {
        currentImageIndex++;
        //dodanie zielonej kropki w odpowiednim miejscu 
        if(currentImageIndex == 0){
            document.getElementById("circle").style.backgroundColor = "green";
        }else if(currentImageIndex == 1){
            document.getElementById("circle").style.backgroundColor = "transparent";
            document.getElementById("circle1").style.backgroundColor = "green";
        }else if(currentImageIndex == 2){
            document.getElementById("circle1").style.backgroundColor = "transparent";
            document.getElementById("circle2").style.backgroundColor = "green";
        }else if(currentImageIndex == 3){
            document.getElementById("circle2").style.backgroundColor = "transparent";
            document.getElementById("circle3").style.backgroundColor = "green";
        }else if(currentImageIndex == 4){
            document.getElementById("circle3").style.backgroundColor = "transparent";
            document.getElementById("circle4").style.backgroundColor = "green";
        }
    }else if(currentImageIndex == 4){//zapobieganie przeskakiwaniu z indexu 4 na 0 tablicy
        nextButton.removeEventListener;
    }else {
      currentImageIndex = 0;
    }

    image.src = images[currentImageIndex];
    //Zamknięcie okna obok opisującego po przejściu na nastepne zdjęcie
    document.getElementById("BoczneOknoDlaZdj").style.display = "none";
    document.getElementById("BoczneOknoDlaZdj1").style.display = "none";
    document.getElementById("BoczneOknoDlaZdj2").style.display = "none";
    document.getElementById("BoczneOknoDlaZdj3").style.display = "none";
    document.getElementById("BoczneOknoDlaZdj4").style.display = "none";
    document.getElementById("InsideWindow").style.overflow = "hidden";
});

//Wyswietlanie okna obok opisujacego po kliknieciu Sellect
var SellectButton = document.getElementById("Sellect");
var AnimacjaOknaBocznego = document.getElementById("BoczneOknoDlaZdj");
var AnimacjaOknaBocznego1 = document.getElementById("BoczneOknoDlaZdj1");
var AnimacjaOknaBocznego2 = document.getElementById("BoczneOknoDlaZdj2");
var AnimacjaOknaBocznego3 = document.getElementById("BoczneOknoDlaZdj3");
var AnimacjaOknaBocznego4 = document.getElementById("BoczneOknoDlaZdj4");

SellectButton.addEventListener("click", function(){
    if(currentImageIndex == 0){
        document.getElementById("BoczneOknoDlaZdj").style.display = "block";
        document.getElementById("InsideWindow").style.overflow = "visible";

        //animacja otworzenia okienkadlazdj
        AnimacjaOknaBocznego.classList.add("Open-animationSideWindow");
        setTimeout(function(){
            AnimacjaOknaBocznego.classList.remove("Open-animationSideWindow");
        },800);

    }else if(currentImageIndex == 1){
        document.getElementById("BoczneOknoDlaZdj1").style.display = "block";
        document.getElementById("InsideWindow").style.overflow = "visible";
        
        //animacja otworzenia okna Bocznego (1)
        AnimacjaOknaBocznego1.classList.add("Open-animationSideWindow");
        setTimeout(function(){
            AnimacjaOknaBocznego1.classList.remove("Open-animationSideWindow");
        },800);
        
    }else if(currentImageIndex == 2){
        document.getElementById("BoczneOknoDlaZdj2").style.display = "block";
        document.getElementById("InsideWindow").style.overflow = "visible";
        
        //animacja otworzenia okna Bocznego (2)
        AnimacjaOknaBocznego2.classList.add("Open-animationSideWindow");
        setTimeout(function(){
            AnimacjaOknaBocznego2.classList.remove("Open-animationSideWindow");
        },800);

    }else if(currentImageIndex == 3){
        document.getElementById("BoczneOknoDlaZdj3").style.display = "block";
        document.getElementById("InsideWindow").style.overflow = "visible";

        //animacja otworzenia okna Bocznego (3)
        AnimacjaOknaBocznego3.classList.add("Open-animationSideWindow");
        setTimeout(function(){
            AnimacjaOknaBocznego3.classList.remove("Open-animationSideWindow");
        },800);

    }else if(currentImageIndex == 4){
        document.getElementById("BoczneOknoDlaZdj4").style.display = "block";
        document.getElementById("InsideWindow").style.overflow = "visible";

        //animacja otworzenia okna Bocznego (4)
         AnimacjaOknaBocznego4.classList.add("Open-animationSideWindow");
        setTimeout(function(){
            AnimacjaOknaBocznego4.classList.remove("Open-animationSideWindow");
        },800);

    }
});

//Funkcjonalnosc przycisku Hide
var HideSideWindow = document.getElementById("Hide");
HideSideWindow.addEventListener("click", function(){
    document.getElementById("BoczneOknoDlaZdj").style.display = "none";
    document.getElementById("BoczneOknoDlaZdj1").style.display = "none";
    document.getElementById("BoczneOknoDlaZdj2").style.display = "none";
    document.getElementById("BoczneOknoDlaZdj3").style.display = "none";
    document.getElementById("BoczneOknoDlaZdj4").style.display = "none";
    document.getElementById("InsideWindow").style.overflow = "hidden";
});

//Funkcjonalnosc przycisku Close
var closeButtonEmail = document.getElementById("CloseButton");
closeButtonEmail.addEventListener("click", function(){
    document.getElementById("InsideWindow").style.display = "none";
    document.getElementById("InsideWindow").style.overflow = "hidden";
});

//Wewnętrzne menu dla Zakładki "Umiejętności"

var prevButtonInsideSkills = document.getElementById("ToLeftButton");
var nextButtonInsideSkills = document.getElementById("ToRightButton");
var imageInsideSkills = document.getElementById("imageInsideUmiejetnosci3");
var imagesInsideSkills = ["images/ProgramowanieUmiejetnosciTlo.png", "images/JiraUmiejetnosciTlo.png", "images/OfficeUmiejetnosciTlo.png", "images/GitHubUmiejetnosciTlo.png"];
var currentImageIndexInsideSkills = 0;
var GreenCircleInsideSkills1 = document.getElementById("Circle1");
var GreenCircleInsideSkills2 = document.getElementById("Circle2");
var GreenCircleInsideSkills3 = document.getElementById("Circle3");
var GreenCircleInsideSkills4 = document.getElementById("Circle4");

if(currentImageIndexInsideSkills == 0){
    document.getElementById("Circle1").style.backgroundColor = "green";
}

prevButtonInsideSkills.addEventListener("click", function(){
    if(currentImageIndexInsideSkills > 0){
        currentImageIndexInsideSkills--;
        //dodanie zielonej kropki w odpowiednim miejscu
        if(currentImageIndexInsideSkills == 3){
            document.getElementById("Circle4").style.backgroundColor = "green";
        }else if(currentImageIndexInsideSkills == 2){
            document.getElementById("Circle4").style.backgroundColor = "transparent";
            document.getElementById("Circle3").style.backgroundColor = "green";
        }else if(currentImageIndexInsideSkills == 1){
            document.getElementById("Circle3").style.backgroundColor = "transparent";
            document.getElementById("Circle2").style.backgroundColor = "green";
        }else if(currentImageIndexInsideSkills == 0){
            document.getElementById("Circle2").style.backgroundColor = "transparent";
            document.getElementById("Circle1").style.backgroundColor = "green";
        }
    }else if(currentImageIndexInsideSkills == 0){//zapobieganie przeskakiwaniu z indexu 0 na 4 tablicy
        prevButtonInsideSkills.removeEventListener;
    }else{
        currentImageIndexInsideSkills = imagesInsideSkills.length - 1;
    }

    imageInsideSkills.src = imagesInsideSkills[currentImageIndexInsideSkills];
});

nextButtonInsideSkills.addEventListener("click", function() {
    if (currentImageIndexInsideSkills < imagesInsideSkills.length - 1) {
        currentImageIndexInsideSkills++;
        //dodanie zielonej kropki w odpowiednim miejscu 
        if(currentImageIndexInsideSkills == 0){
            document.getElementById("Circle1").style.backgroundColor = "green";
        }else if(currentImageIndexInsideSkills == 1){
            document.getElementById("Circle1").style.backgroundColor = "transparent";
            document.getElementById("Circle2").style.backgroundColor = "green";
        }else if(currentImageIndexInsideSkills == 2){
            document.getElementById("Circle2").style.backgroundColor = "transparent";
            document.getElementById("Circle3").style.backgroundColor = "green";
        }else if(currentImageIndexInsideSkills == 3){
            document.getElementById("Circle3").style.backgroundColor = "transparent";
            document.getElementById("Circle4").style.backgroundColor = "green";
        }
    }else if(currentImageIndexInsideSkills == 3){//zapobieganie przeskakiwaniu z indexu 4 na 0 tablicy
        nextButtonInsideSkills.removeEventListener;
    }else {
      currentImageIndexInsideSkills = 0;
    }

    imageInsideSkills.src = imagesInsideSkills[currentImageIndexInsideSkills];
});

var AnimationOfFirstImageInsideSkills = document.getElementById("FirstImageInsideSkills");
var CloseAnimationOfFirstImageInsideSkills = document.getElementById("FirstImageInsideSkills");

var AnimationOfSecondImageInsideSkills = document.getElementById("SecondImageInsideSkills");
var CloseAnimationOfSecondImageInsideSkills = document.getElementById("SecondImageInsideSkills");

var AnimationOfThirdImageInsideSkills = document.getElementById("ThirdImageInsideSkills");
var CloseAnimationOfThirdImageInsideSkills = document.getElementById("ThirdImageInsideSkills");

var AnimationOfFourthImageInsideSkills = document.getElementById("FourthImageInsideSkills");
var CloseAnimationOfFourthImageInsideSkills = document.getElementById("FourthImageInsideSkills");

var AnimacjaOknaWewnętrznegoUmiejetnosci = document.getElementById("FirstImageInsideSkills");
var CloseMode = document.getElementById("CloseMe");
var CloseMode1 = document.getElementById("CloseMe1");
var CloseMode2 = document.getElementById("CloseMe2");
var CloseMode3 = document.getElementById("CloseMe3");



imageInsideSkills.addEventListener("click", function(){
    document.getElementById("Circle1").style.display = "none";
    document.getElementById("Circle2").style.display = "none";
    document.getElementById("Circle3").style.display = "none";
    document.getElementById("Circle4").style.display = "none";
    if(currentImageIndexInsideSkills == 0){
        document.getElementById("FirstImageInsideSkills").style.display = "block";
        
        // Animacja otwierania Okna dla zakładki Umiejętności->Programowanie
        AnimationOfFirstImageInsideSkills.classList.add("Open-animationSideWindowSkills");
        setTimeout(function(){
            AnimationOfFirstImageInsideSkills.classList.remove("Open-animationSideWindowSkills");
        },800);

        // Animacja zamykania Okna dla zakładki Umiejętności->Programowanie
        CloseMode.addEventListener("click", function(){
            CloseAnimationOfFirstImageInsideSkills.classList.add("Close-animationSideWindowSkills");
            setTimeout(function(){
                CloseAnimationOfFirstImageInsideSkills.classList.remove("Close-animationSideWindowSkills");
                document.getElementById("FirstImageInsideSkills").style.display = "none";
                
                document.getElementById("Circle1").style.display = "block";
                document.getElementById("Circle2").style.display = "block";
                document.getElementById("Circle3").style.display = "block";
                document.getElementById("Circle4").style.display = "block";
            },800);
        });

    }else if(currentImageIndexInsideSkills == 1){
        document.getElementById("SecondImageInsideSkills").style.display = "block";

        // Animacja otwierania Okna dla zakładki Umiejętności->Jira
        AnimationOfSecondImageInsideSkills.classList.add("Open-animationSideWindowSkills");
        setTimeout(function(){
            AnimationOfSecondImageInsideSkills.classList.remove("Open-animationSideWindowSkills");
        },800);

        // Animacja zamykania Okna dla zakładki Umiejętności->Jira
        CloseMode1.addEventListener("click", function(){
            CloseAnimationOfSecondImageInsideSkills.classList.add("Close-animationSideWindowSkills");
            setTimeout(function(){
                CloseAnimationOfSecondImageInsideSkills.classList.remove("Close-animationSideWindowSkills");
                document.getElementById("SecondImageInsideSkills").style.display = "none";

                document.getElementById("Circle1").style.display = "block";
                document.getElementById("Circle2").style.display = "block";
                document.getElementById("Circle3").style.display = "block";
                document.getElementById("Circle4").style.display = "block";
            },800);
        });

    }else if(currentImageIndexInsideSkills == 2){
        document.getElementById("ThirdImageInsideSkills").style.display = "block";

        // Animacja otwierania Okna dla zakładki Umiejętności->Office 365
        AnimationOfThirdImageInsideSkills.classList.add("Open-animationSideWindowSkills");
        setTimeout(function(){
            AnimationOfThirdImageInsideSkills.classList.remove("Open-animationSideWindowSkills");
        },800);

        // Animacja zamykania Okna dla zakładki Umiejętności->Office 365
        CloseMode2.addEventListener("click", function(){
            CloseAnimationOfThirdImageInsideSkills.classList.add("Close-animationSideWindowSkills");
            setTimeout(function(){
                CloseAnimationOfThirdImageInsideSkills.classList.remove("Close-animationSideWindowSkills");
                document.getElementById("ThirdImageInsideSkills").style.display = "none";

                document.getElementById("Circle1").style.display = "block";
                document.getElementById("Circle2").style.display = "block";
                document.getElementById("Circle3").style.display = "block";
                document.getElementById("Circle4").style.display = "block";
            },800);
        });

    }else if(currentImageIndexInsideSkills == 3){
        document.getElementById("FourthImageInsideSkills").style.display = "block";

        // Animacja otwierania Okna dla zakładki Umiejętności->GitHub
        AnimationOfFourthImageInsideSkills.classList.add("Open-animationSideWindowSkills");
        setTimeout(function(){
            AnimationOfFourthImageInsideSkills.classList.remove("Open-animationSideWindowSkills");
        },800);

        // Animacja zamykania Okna dla zakładki Umiejętności->Github
        CloseMode3.addEventListener("click", function(){
            CloseAnimationOfFourthImageInsideSkills.classList.add("Close-animationSideWindowSkills");
            setTimeout(function(){
                CloseAnimationOfFourthImageInsideSkills.classList.remove("Close-animationSideWindowSkills");
                document.getElementById("FourthImageInsideSkills").style.display = "none";

                document.getElementById("Circle1").style.display = "block";
                document.getElementById("Circle2").style.display = "block";
                document.getElementById("Circle3").style.display = "block";
                document.getElementById("Circle4").style.display = "block";
            },800);
        });
   }

});

// Skreślenie tekstu po zaznaczeniu checkboxa
var checkbox1 = document.getElementById("myCheckbox");
var checkbox2 = document.getElementById("Pro2");
var checkbox3 = document.getElementById("Pro3");
var checkbox4 = document.getElementById("Pro4");
var text1 = document.getElementById("TextToStrike1");
var text2 = document.getElementById("TextToStrike2");
var text3 = document.getElementById("TextToStrike3");
var text4 = document.getElementById("TextToStrike4");


checkbox1.addEventListener("change",function(){
    if(checkbox1.checked){
        
        text1.classList.add("StrikeThrough");

        checkbox2.checked = checkbox1.checked;
        text2.classList.add("StrikeThrough");

        checkbox3.checked = checkbox1.checked;
        text3.classList.add("StrikeThrough");

        checkbox4.checked = checkbox1.checked;
        text4.classList.add("StrikeThrough");
    }else{
        
        text1.classList.remove("StrikeThrough");

        checkbox2.checked = 0;
        text2.classList.remove("StrikeThrough");

        checkbox3.checked = 0;
        text3.classList.remove("StrikeThrough");

        checkbox4.checked = 0;
        text4.classList.remove("StrikeThrough");
    }
});

checkbox2.addEventListener("change",function(){
    if(checkbox2.checked){
        text2.classList.add("StrikeThrough");
    }else{
        text2.classList.remove("StrikeThrough");
    }
});

checkbox3.addEventListener("change",function(){
    if(checkbox3.checked){
        text3.classList.add("StrikeThrough");
    }else{
        text3.classList.remove("StrikeThrough");
    }
});

checkbox4.addEventListener("change",function(){
    if(checkbox4.checked){
        text4.classList.add("StrikeThrough");
    }else{
        text4.classList.remove("StrikeThrough");
    }
});