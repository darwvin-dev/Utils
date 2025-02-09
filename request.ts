import axios, { AxiosRequestConfig, Method } from "axios";
import { toast } from "react-toastify";

const BASE_URL = "https://yourbackend.com/api";
const noToast = ["/cart", "/cart/clear"]; // مسیرهایی که نباید اعلان خطا نمایش دهند

/**
 * 📌 تابع ارسال درخواست به `backend`
 * @param {string} url - مسیر درخواست (مثلاً `/cart`)
 * @param {Method} method - نوع درخواست (`GET`, `POST`, `PATCH`, `DELETE`)
 * @param {any} data - داده‌های ارسالی به `backend`
 * @param {boolean} fullUrl - آیا `url` مطلق است یا نسبی؟
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
    withCredentials: true, // برای ارسال `cookie` در درخواست‌های `CORS`
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
    console.error("❌ خطا در ارتباط با `API`:", error);

    const message = error.response?.data?.message || "خطای ناشناخته‌ای رخ داده است";
    if (!noToast.includes(url)) toast.error(message);

    return {
      success: false,
      status: error.response?.status || 0,
      error: message,
    };
  }
};

export default request;
