const tg = window.Telegram.WebApp;

const btn = document.querySelector(".submit-btn");
const send = () =>{
    tg.sendData(JSON.stringify({
        name:"test"
    }))

}
btn.addEventListener("click", () =>{
    send()
})
