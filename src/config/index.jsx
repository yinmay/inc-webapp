const ENV = process.env.NODE_ENV
const API_HOST = 'https://incindex.incex.cn' 


const EMAIL_REGEX = '^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$'
const PASSWORD_REGEX = '^[0-9A-Za-z]{6,}$' 

const LOGIN_URL = 'https://www.incid.org/#/login?appid=315787688726761472&goto=aHR0cHM6Ly93d3cudGVhbWJpdGlvbi5jb20vcHJvamVjdC81YWViYzEwZGRlNzQ2ODAwMTgzYzJhNWIvd29ya3MvNWIwNGQ1NWIyYjhmNDYwMDE4YzJhM2E0&response_type=CODE&scope=snsapi_login&state=32768&grant_type=authorization_code' 

export {
    ENV,
    API_HOST,
    EMAIL_REGEX,
    PASSWORD_REGEX,
    LOGIN_URL,
}
