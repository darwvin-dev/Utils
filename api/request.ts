import axios, { AxiosRequestConfig, Method } from "axios";
import { toast } from "react-toastify";

const BASE_URL = "https://yourbackend.com/api";
const noToast = ["/cart", "/cart/clear"]; 

/**
 * 📌 API request wrapper using Axios
 *
 * @param {string} url - The request endpoint (e.g., `/cart`)
 * @param {Method} method - HTTP method (`GET`, `POST`, `PATCH`, `DELETE`, etc.)
 * @param {any} data - Payload to send to the backend
 * @param {boolean} fullUrl - Whether the URL is absolute or relative
 * @returns {Promise<{success: boolean, status: number, message?: string, data?: any, error?: string}>}
 */
const request = async (
  url: string,
  method: Method = "GET",
  data?: any,
  fullUrl: boolean = false
) => {
  const finalUrl = fullUrl ? url : `${BASE_URL}${url}`;

  const config: AxiosRequestConfig = {
    url: finalUrl,
    method,
    headers: {
      "Content-Type": data instanceof FormData ? "multipart/form-data" : "application/json",
    },
    withCredentials: true, 
  };

  if (method !== "GET" && data) {
    config.data = data instanceof FormData ? data : JSON.stringify(data);
  }

  try {
    const response = await axios(config);

    if (response.status >= 200 && response.status < 300) {
      return {
        success: true,
        status: response.status,
        message: response?.data?.message || "",
        data: response.data.data,
      };
    }
  } catch (error: any) {
    console.error("❌ API request error:", error);

    const message = error.response?.data?.message || "An unknown error occurred";
    if (!noToast.includes(url)) toast.error(message);

    return {
      success: false,
      status: error.response?.status || 0,
      error: message,
    };
  }
};

export default request;
