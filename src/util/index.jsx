import {API_HOST} from '../config'
import base64 from 'base-64'
import utf8 from 'utf8'

const UA = window.navigator.userAgent

/* detecting wechat */
export function isWechat() {
    if (UA.includes('micromessenger')) {
        return true
    }
    return false
}

export function cutString(s, n) {
    if (s.length > n) {
        return s.slice(0, n) + '...'
    } else {
        return s
    }
}
// 判断是否是JSON对象
export function isJson(obj) {
	var isJson = typeof(obj) === "object" && Object.prototype.toString.call(obj).toLowerCase() === "[object object]" && !obj.length;
	return isJson;
}
export function json2Form(json) {
    if (!json) {
        return ''
    }
    if(isJson(json)){
        let str = []
        for (let p in json) {
            if (json.hasOwnProperty(p) && json[p]) {
                str.push(encodeURIComponent(p) + '=' + encodeURIComponent(json[p]))
            }
        }
        return str.join('&')
    } else {
        return json
    }
}

export async function ajax(url='/', method='GET', payload={}) {
    let init = {}
    const auth = localStorage.getItem('token') ? ('JWT ' + localStorage.getItem('token')) : ''

    if (method === 'GET' || method === 'get') {
        if (typeof payload === 'string' || typeof payload === 'number') {
            url = url + '/' + payload
        }

        if (isJson(payload) && json2Form(payload)) {
            url = url + '?' + json2Form(payload)
        }

        init = {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Authorization': auth
            },
        }
    } else if (method === 'POST' || method === 'post' || method === 'PUT' || method === 'put') {
        init = {
            method: method,
            credentials: 'include',
            headers: {
                'Content-type': 'application/json',
                'Authorization': auth
            },
            body: JSON.stringify(payload)
        }
    } else {
        return
    }

    if (process.env.NODE_ENV === 'production') {
        url = API_HOST + url
    }

    try {
        const response = await fetch(url, init)
        if (
            response.status === 500 ||
            response.status === 404
        ) {
            return Object.assign({}, {error: response.statusText}, {hasError: true})
        }

        /*
        if (response.status === 401) {
            toLogin()
            return
        }
        */

        const responseJson = await response.json()

        if (response.status.toString()[0] !== '2') {
            return {error: responseJson, hasError: true}
        } else {
            return responseJson
        }
    } catch (error) {
        return error.statusText
    }
}

export function toInt(num) {
    if (typeof num === 'number') {
        num = num.toString()
    }

    if (num) {
        return parseInt(num, 10)
    }

    return 0
}

export function getCookies() {
    let cookies = {
        token: ''
    }
    for (let cookie of document.cookie.split('; ')) {
        let [name, value] = cookie.split('=')
        cookies[name] = decodeURIComponent(value)
    }
    return cookies
}

export function createCookie(name, value, days) {
    let expires
    if (days) {
        let date = new Date()
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000))
        expires = '; expires=' + date.toUTCString()
    } else {
        expires = ''
    }
    document.cookie = name + '=' + encodeURIComponent(value) + expires + '; path=/'
}

export function clearCookieByName(name) {
    createCookie(name, '', -1)
}

export function checkRegex(regex, s) {
    const re = new RegExp(regex)
    return re.test(s)
}

export function cloneObject(obj) {
    return JSON.parse(JSON.stringify(obj))
}

export function toLogin() {
    const url = 'https://www.incid.org/#/login?appid=315787688726761472'
                + '&response_type=CODE&scope=snsapi_login&state=32768&grant_type=authorization_code' 
                + '&goto=' + base64.encode(utf8.encode(window.location.origin + '/inc/inc_auth_callback'))

    window.location.href = url 
}