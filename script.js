const tg = window.Telegram.WebApp;

tg.ready();

const btn = document.querySelector(".submit-btn");
const send = () =>{
    console.log("clicked")
    tg.sendData(JSON.stringify({
        name:"test"
    }))

}
btn.addEventListener("click", () =>{
    send()
})
