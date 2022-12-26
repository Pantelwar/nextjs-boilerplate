import type { AxiosError } from "axios";
import axios from "axios";
import toast from "react-hot-toast";

export default function handleError(err: unknown) {
  const error = err as Error & AxiosError<{ error: string }>;
  let toastMessage = "Something went wrong";

  if (axios.isAxiosError(err)) {
    toastMessage = error.response?.data?.error || "Something went wrong";
  } else if (err instanceof Error) {
    toastMessage = error.message || "Network Error";
  }

  toast.error(toastMessage, { id: "ERROR" });
}
