const tg = window.Telegram.WebApp;


const send = () =>{
    tg.sendData(JSON.stringify({
        name:"test"
    }))

}