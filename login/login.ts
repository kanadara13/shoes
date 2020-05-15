import axios from 'axios';
import querystring from 'querystring';

const commonAxios = axios.create({
    baseURL: 'https://www.nike.com/kr/ko_kr',
    timeout: 5000,
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
});

let data = {};

export class Login {
    async login() {     
        await commonAxios.post("/login_post.htm", querystring.stringify(data))
        .then(res => { console.log(res)})
        .catch(err => console.log(err))
    }
}