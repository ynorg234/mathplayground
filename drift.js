var win=window.open("about:blank","_blank");let score=win.document.createElement("input");score.setAttribute("placeholder","Enter score"),score.setAttribute("id","highScore"),win.document.body.appendChild(score);let br=win.document.createElement("br");win.document.body.appendChild(br);let coins=win.document.createElement("input");coins.setAttribute("placeholder","Enter amount of coins"),coins.setAttribute("id","collectedCoins"),win.document.body.appendChild(coins);let br2=win.document.createElement("br");win.document.body.appendChild(br2);let boost1=win.document.createElement("input");boost1.setAttribute("placeholder","Enter amount of double scores"),boost1.setAttribute("id","booster1"),win.document.body.appendChild(boost1);let br3=win.document.createElement("br");win.document.body.appendChild(br3);let boost2=win.document.createElement("input");boost2.setAttribute("placeholder","Enter amount of car insurances"),boost2.setAttribute("id","booster2"),win.document.body.appendChild(boost2);let br4=win.document.createElement("br");win.document.body.appendChild(br4);let boost3=win.document.createElement("input");boost3.setAttribute("placeholder","Enter amount of coin rush powerups"),boost3.setAttribute("id","booster3"),win.document.body.appendChild(boost3);let br5=win.document.createElement("br");win.document.body.appendChild(br5),win.send=function(){new BroadcastChannel("hack").postMessage('{"sound":0.7,"music":0.3,"score":'+win.document.getElementById("highScore").value+',"hasShownTutorial":true,"collectedCoin":'+win.document.getElementById("collectedCoins").value+',"cars":[0],"currentCar":0,"currentTip":0,"booster1":'+win.document.getElementById("booster1").value+',"booster2":'+win.document.getElementById("booster2").value+',"booster3":'+win.document.getElementById("booster3").value+',"ko":0,"hasShownBoosterTutorial":true}'),win.window.alert("Payload sent")};let button=win.document.createElement("button");button.setAttribute("onclick","send();"),button.innerHTML="Send!",win.document.body.appendChild(button);let b=new BroadcastChannel("hack");b.onmessage=function(e){localStorage.setItem("mjs-drift-boss-game-v1.0.1-dailyreward",e.data.toString()),console.log(e.data),window.location.reload()};