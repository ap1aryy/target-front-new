import axios from "axios";

const BASE_URL = "https://mini-app-back.friendsdao.com/dev";

const courses_data = [
  {
    id: 2925675,
    title: "Курс по TON блокчейну и Телеграм",
    description:
      "Курс предназначен для разработчиков и IT-специалистов. Он даёт теоретические и практические знания о технологиях и концепциях блокчейна TON, включая язык программирования FunC, смарт-контракты и их тестирование, а также создание мини-приложений.",
    slug: "my-course",
  },
  {
    id: 2930629,
    title: "Product Analytics for Beginners",
    description:
      "Получите фундаментальное понимание аналитики продукта и ее роли в бизнесе. К концу этой главы студенты узнают, что такое продуктовая аналитика, поймут, почему она имеет решающее значение для успеха продукта, и познакомятся с ключевыми показателями и терминами в этой области.",
    slug: "ai-placeholder",
  },
  {
    id: 2930630,
    title: "Introduction to UX Research",
    description:
      "В этой главе вы получите глубокое представление об UX-исследованиях, важности UX в дизайне и основных концепциях UX-исследований. После завершения этой главы вы поймете основную роль UX-исследований в разработке продукта, как они формируют пользовательский опыт, а также основные концепции, которые лежат в основе работы UX-исследователей.",
  },
  {
    id: 2930631,
    title: "Data Science for Beginners",
    description:
      "Этот курс для начинающих знакомит с основными понятиями, инструментами и методами data science. Благодаря практическим занятиям учащиеся получат прочную основу для работы с данными, их анализа, визуализации и основ машинного обучения. К концу курса студенты будут обладать навыками анализа данных, раскрытия сути и построения простых прогностических моделей.",
  },
  {
    id: 2930632,
    title: "Telegram Mini Apps. First Steps.",
    avatar:
      "https://cdn.thinkific.com/55/20240401/8b770df91347206eb0f1cd5657ee3a82.png",
  },
];

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

    window.Telegram.WebApp.openInvoice(invoiceLink, async (status) => {
      if (status === "paid") {
        const courseData = courses_data.find((item) => item.id === appId);
        const purchaseDetails = {
          event_type: "purchase",
          user_id: userId,
          price: count,
          course: {
            course_id: appId,
            type: type,
            name: courseData.title,
          },
        };

        amplitude.getInstance().logEvent("purchase", purchaseDetails);
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
