import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID HO5Pp8-Syb0_NVbv3fbVJk_6YJs70pcqc1Tp8IK8_4s",
  },
});
