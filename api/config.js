import axios from "axios";
//引入element-ui
import ElementUI from 'element-ui';
import router from "../src/router"

axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? "/api" : "http://www.chst.vip"

axios.defaults.withCredentials = true;//允许请求携带认证

// 创建axios请求拦截器
axios.interceptors.request.use(config => {
    //登入、注册是不需要携带token的
    if(config.url == "/users/login"){
        return config
    }else{
        let token = localStorage.getItem("login-token")
        //config的值是每个请求对象
        config.headers["authorization"] = token;
        //放行
        return config
    }
})

//相应拦截
axios.interceptors.response.use(config=>{
    let {data} = config
    console.log(data)
    if(data.code === '10022' || data.code === '1004'){
        // console.log(ElementUI)
        //在当前的后台app中，1004代表token校验失败，提示登录过期并且跳转到登录页
        alert("登入信息失败")
        router.push("/")
    }
    return config
})

axios.create({  
    timeout:4000
})
export default axios