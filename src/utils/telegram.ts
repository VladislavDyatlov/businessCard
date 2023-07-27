import axios from "axios";

export const telegram = async (name: string, phone: string) =>{
    const TOKEN = "6333204633:AAFeczQysHP5LE46d01dhwWWpCLXQg37kag";
    const CHAT_ID = "-1001977522760";
    const URL_API = `https://api.telegram.org/bot${ TOKEN }/sendmessage`;

    let message = ``;
    message += `<b>Отправитель: </b> ${name.length > 1 ? name : "Неизвестно"} \n`;
    message += `<b>Номер: </b> ${phone} \n`;

    await axios.post(URL_API,{
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message
    })
}