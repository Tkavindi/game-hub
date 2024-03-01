import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'277a6e8023ee480c9ecbfb2840174e78'
    }
})

