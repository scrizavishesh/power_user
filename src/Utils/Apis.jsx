import axios from "axios";

export const API_URL = "https://auth2.upicollect.com";

var bearerToken = `Token 50bac6ff4fc2d47fa778c6005d547a526a1d827d`


export const createFund = async ( orderId, sign) => {
  axios.defaults.headers.common["Authorization"] = "";
  var response = await axios.get(`${API_URL}/api/payments/create?order_id=${orderId}&signature=${sign}`);
  if (response) {
    return response;
  } else {
    return [];
  }
}

export const createOrder = async (requestData, hmac) => {
  axios.defaults.headers.common["Authorization"] = bearerToken;
  axios.defaults.headers.common["Sign"] = hmac; 
  const response = await axios.post(`${API_URL}/api/orders/`, requestData);
  return response;
};