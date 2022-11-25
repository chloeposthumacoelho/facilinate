var audio = new Audio('assets/sentmessage.mp3');
var contactString = "<div class='mapview'><iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229447.73751886215!2d-80.42837356718745!3d26.029600000000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9abac07f3d495%3A0x7f3e907cb2846414!2sJubilee%20Center%20of%20South%20Broward!5e0!3m2!1sen!2sus!4v1662820412228!5m2!1sen!2sus' class='map'></iframe></div><label class='add'><address>    The closest social services organization in your area (based on your zip code) and accepting your donation preferences for hygiene/toiletry materials(lotions, diapers) is the  'Jubilee Center of South Broward'  <br>located in<br>2201 2020 Scott St, Hollywood, FL 33020</address>";
var resumeString ="<div class='mapview'><iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229995.5015515912!2d-80.56536032356229!3d25.748103403121267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b156784362f3%3A0xa98277f04464ddb9!2sFood%20For%20Life%20Network!5e0!3m2!1sen!2sus!4v1662820071692!5m2!1sen!2sus' class='map'></iframe></div><label class='add'><address>    The closest food banks based on your zip code and accepting your donation preferences(non perishable goods): canned foods and packaged grains (oatmeals, baby foods) is the  'Food For Life Network'  <br>in<br>2201 3510 Biscayne Blvd, Miami, FL 33137</address>";
var addressString = "<div class='mapview'><iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57498.84092774178!2d-80.46029294179688!3d25.748174599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9bf1523c05e13%3A0x456833e0354a7eb2!2sGoodwill%20Donation%20Trailer!5e0!3m2!1sen!2sus!4v1662819903944!5m2!1sen!2sus' class='map'></iframe></div><label class='add'><address>    The closest place to donate blankets based on your location (greater Miami-Dade) is the  'Goodwill donation trailer'  <br>in<br>2201 SW 122nd Ave, Miami, FL 33175</address>";
function startFunction() {
    setLastSeen();
    waitAndResponce("intro");
}

function setLastSeen() {
    var date = new Date();
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "last seen today at " + date.getHours() + ":" + date.getMinutes()
}


function closeFullDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}

function openFullScreenDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}


function isEnter(event) {
    if (event.keyCode == 13) {
        sendMsg();
    }
}

function sendMsg() {
    var input = document.getElementById("inputMSG");
    var ti = input.value;
    if (input.value == "") {
        return;
    }
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "sent");
    greendiv.setAttribute("class", "green");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = input.value;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    setTimeout(function () { waitAndResponce(ti) }, 1500);
    input.value = "";
    playSound();
}

function waitAndResponce(inputText) {
    var lastSeen =document.getElementById("lastseen");
    lastSeen.innerText = "typing...";
    switch (inputText.toLowerCase().trim()) {
        case "intro":
            setTimeout(() => {
                sendTextMessage("Hello there!  <br><br>welcome! I am Chloe from <span class='bold'><a class='alink'>facilinate.</a>.</span><br><br><br><br>Type<span class='bold'> 'donate'</span> to know more about an easier, more personalized donation experience here at facilinate.<br>");
            }, 2000);
            break;
        case "donate":
            sendTextMessage("<span class='sk'>Sounds good! First off, what would you like to donate?.. <br> Type:<br><span class='bold'>'food'</span> - if you would like to donate canned or non perishable food options. Based on your zip code provided, donation centers within 10 mile radius are looking for non perishable food options the most.<br><span class='bold'>type 'hygiene'</span> - if you would like to donate toiletries, female hygiene products, or diapers.<br><span class='bold'>type 'blankets'</span> - to donate blankets, jackets, and more.</span>");



        
            break;
        case "food":
            sendTextMessage(foodString);
            break;
        case "food":
            sendTextMessage("<span class='sk'>Donation centers nearby are currently accepting non perishable and canned foods..<br><br>please head over to :                                  class='alink' target='_blank' href='https://cpc.chloeposthumaco.repl.co/starters.html/'>                                                       class='bold'>Java<br>C++<br>C<br>PHP<br>Kotlin<br>Dart<br>Python<br>CSS<br>HTML</span><br><br>I've experiance with following frameworks :<span class='bold'><br>Android<br>Flutter<br>ReactJs<br>GTK</span><br><br>I use <span class='bold'>Arch Linux</span> as daily driver on my HP Pavilion 15-ec0xxx<br>OS:Arch Linux<br>DE:Gnome(More often) Kde(often)<br>Favourite IDE:VSCode</span>");
            break;

        case "hygiene":
        sendTextMessage(hygString);
            break;
            sendTextMessage(" if you would like to donate toiletries, female hygiene products, or diapers.");
            break;

        case "blankets":
            sendTextMessage(blanketString);
            break;
            sendTextMessage(" to donate blankets, jackets, and more.");
        case "clear":
            clearChat();
            break;
        default:
            setTimeout(() => {
                sendTextMessage("please either type food, hygiene, or blankets in order to gather the best centers based off your preferences.");
            }, 2000);
            break;
    }



}

function clearChat() {
    document.getElementById("listUL").innerHTML = "";
    waitAndResponce('intro');
}



function sendTextMessage(textToSend) {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.setAttribute("id", "sentlabel");
    dateLabel.id = "sentlabel";
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    greendiv.innerHTML = textToSend;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}


function sendResponse() {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    dateLabel.setAttribute("class", "dateLabel");
  
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}

function playSound() {
    audio.play();
}
    </span>

    <nav>

        <div class="navbar">
           
            <div class="personalInfo">
                <label id="name"Facilinate Support Team</label>
                <label id="lastseen">Facilinate Support Team</label>
            </div>
        </div>

    </nav>


    <div class="scrollable" id="myScrollable">

        <div class="fullScreenDP" id="fullScreenDP">
            <div class="insideDP">
                <img class="dp" src="images/chloesheaderpic2.png" alt="">
               
                        
                   
                </svg>
            </div>
        </div>

        <div id="chatting" class="chatting">
            <ul id="listUL">
            </ul>
        </div>
    </div>


    <footer>
        <div class="sendBar">
            <input id="inputMSG" onkeypress="isEnter(event)" type="text" placeholder="Type a message" autofocus>
            <svg onclick="sendMsg()" viewBox="0 0 24 24" width="24" height="24" class="">
                <path fill="currentColor"
                    d="M1.101 21.757 23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z"></path>
            </svg>
        </div>
    </footer>

        <!-- Link our CSS file -->
   
</head>

<body>
    <!-- Navbar Section Starts Here -->
    <section class="navbar">
        <div class="container">
            <div class="logo">
                <a href="#" title="Logo">
                    <img src="images/facilinate-3.png" alt="Restaurant Logo" class="img-responsive">
                </a>
            </div>

            <div class="menu text-right">
                <ul>
                    <li>
                        <a href="mainpage.html">Home</a>
                    </li>
                    <li>
                        <a href="foods.html">Filter by donation category</a>
                    </li>
                    <li>
                       
                </ul>
            </div>

            <div class="clearfix"></div>
        </div>
    </section>
    <!-- Navbar Section Ends Here -->
    <section class="heading">
    <center>
    <div class="text text-1">Facilinate</div><div class="text text-2">.</div>
    </section>
 
        </div>
    </footer>
    <section class="abproject">
        <p>Based on your provided donation preferences and zip code, Facilinate has found the following additional locations nearby (within 10 miles) urgently needing what you are offering to donate:</p>
  </section>
    <section class="Timings">
        <h2>Timings</h2>
     <center><p>Category:
        Food (non perishable and canned preferred by center below)
        <h2>Timings</h2>
     <center><p>Donation preferences (specific):
      dried, canned beans, legumes, dairy, and grains
        </section>
     <section class="Timings">
        <h2>Coconut Grove Crisis Food Program - Food Distribution Center</h2>
        <center><p>Food bank
Located in:
         <center>
           - Christ Episcopal Church
<center>
  Address: 
           <center>
          - 3481 Hibiscus St, Miami, FL 33133
          <center>
            
            </section>
     <section class="Timings">
        Center hours:
         
        <p> Tuesday : 9:00 A.M - 9:00 P.M</p><br/>
        <p> Wednesday : 9:00 A.M - 10:00 P.M</p><br/>
        <p> Thursday : 9:00 A.M - 9:00 P.M</p><br/>
        <p> Friday : 9:00 A.M - 10:00 P.M</p><br/>
        <p> Saturday : 10:00 A.M - 10:00 P.M</p><br/>
        <p> Sunday : 10:00 A.M - 11:00 P.M</p></center>
            
    </section>
    <section class="map">
     <center><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57509.37373557684!2d-80.31518016874995!3d25.726404599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b7c350a502b9%3A0x6d5896af6c6f58e6!2sCoconut%20Grove%20Crisis%20Food%20Program%20-%20Food%20Distribution%20Center!5e0!3m2!1sen!2sus!4v1662648854989!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></center>
 
    <section class="Timings">
        <h2>Timings</h2>
     <center><p>Category:
   
        Clothing and blankets.
        <h2>Timings</h2>
     <center><p>
       Specific Donation preferences:
     <center><p>
      jackets and blankets as well as bedsheets are preferred.
        </section>
     <section class="Timings">
        <h2>The Salvation Army Family Store & Donation Center</h2>
        <center><p>
Located in:
      
<center>
  Address: 
              <center>
           9790 Bird Rd, Miami, FL 33165
          <center>
             
            </section>
     <section class="Timings">
          Hours:
      
        <p> Thursday : 9:00 A.M - 9:00 P.M</p><br/>
        <p> Friday : 9:00 A.M - 10:00 P.M</p><br/>
        <p> Saturday : 10:00 A.M - 10:00 P.M</p><br/>
       </center>
            
    </section>
    <section class="map">
     <center><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230026.42888871534!2d-80.61682887499998!3d25.7321243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b8a54ce37183%3A0x156e7d836f60f86b!2sThe%20Salvation%20Army%20Family%20Store%20%26%20Donation%20Center!5e0!3m2!1sen!2sus!4v1662650043755!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></center>
 </section></center>
 
    <hr>
   
</body>
</html>                

</body>

</html>
