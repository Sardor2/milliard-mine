import { useState } from "react";
import api from "./api";
import axios from "axios";

const TELEGRAM_BOT_API =
  "https://api.telegram.org/bot5070661761:AAG-KxrO76Obu4mF2h0UXw-s_cpFDWEBvEs/sendMessage?chat_id=-1001523666405&text=${botMessege}";

const sendMessageToTelegram = async (name, email, message) => {
  let botMessege = `
Salom, Yangi Xabar!😊%0A

Ismi 👤: ${name}%0A
Email 💬: ${email}%0A
${message ? "Xabar: " + message : ""}
  `;
  const url = `https://api.telegram.org/bot5070661761:AAG-KxrO76Obu4mF2h0UXw-s_cpFDWEBvEs/sendMessage?chat_id=-1001523666405&text=${botMessege}`;

  return await axios(url).then((res) => res.data);
};

const useSubmitFeedback = ({ onSuccess } = { onSuccess() {} }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);

  const mutate = async (data) => {
    setLoading(true);
    let res;
    try {
      res = await Promise.all([
        api.post("feedback", data),
        sendMessageToTelegram(data.full_name, data.email, data.message),
      ]);
      onSuccess(res);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }

    return error ? error : res;
  };

  return { loading, error, mutate };
};

export default useSubmitFeedback;
