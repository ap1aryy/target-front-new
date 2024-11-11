import axios from "axios";

const BASE_URL = "https://mini-app-back.friendsdao.com/dev";

// Helper to get User from Telegram WebApp
const getInitData = () => {
  const initData = window.Telegram?.WebApp?.initData || "";
  return btoa(initData);
};

export const getAllCourses = async (userId) => {
  try {
    const response = await axios.post(`${BASE_URL}/courses`, null, {
      params: { user_id: userId },
      headers: { User: getInitData() },
    });
    return response.data;
  } catch (error) {
    console.error("Ошибка при получении списка курсов:", error);
    throw error;
  }
};

export const saveSource = async (userId, source) => {
  try {
    const response = await axios.post(`${BASE_URL}/source`, null, {
      params: { user_id: userId, source: source },
      headers: { User: getInitData() },
    });
    return response.data;
  } catch (error) {
    console.error("Ошибка при получении списка курсов:", error);
    throw error;
  }
};

export const getCourseDetails = async (userId, courseId) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/courses/${courseId}`,
      {
        app_id: courseId,
        user_id: userId,
      },
      {
        headers: { User: getInitData() },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Ошибка при получении данных курса:", error);
    throw error;
  }
};

export const generateInvoice = async (
  userId,
  appId,
  count,
  setInvoiceGenerated,
  type,
  onSuccess
) => {
  if (setInvoiceGenerated.current) return;

  try {
    const response = await axios.post(
      `${BASE_URL}/generate-invoice`,
      {
        app_id: appId,
        user_id: userId,
        count: count,
      },
      {
        headers: { User: getInitData() },
      }
    );

    const invoiceLink = response.data;

    // Открытие инвойса в Telegram
    window.Telegram.WebApp.openInvoice(invoiceLink, async (status) => {
      if (status === "paid") {
        if (onSuccess) {
          onSuccess();
        }
        const response = await axios.post(
          `${BASE_URL}/enroll`,
          {
            user_id: userId,
            app_id: appId,
            count: count,
          },
          {
            params: {
              type: type,
            },
            headers: { User: getInitData() },
          }
        );
      }

      setInvoiceGenerated.current = true;
      return invoiceLink;
    });
  } catch (e) {
    console.error("Ошибка при получении линка курса:", e);
    throw e;
  }
};

export const getAllChapters = async (app_id, user_id) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/chapters`,
      {
        user_id: user_id,
        app_id: app_id,
      },
      {
        headers: { User: getInitData() },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Ошибка при получении списка уроков:", error);
    throw error;
  }
};
