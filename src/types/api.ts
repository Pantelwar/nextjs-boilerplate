import type { AxiosResponse } from "axios";

export type ApiResponse<T = never> = AxiosResponse<{
  message: string;
  status: "success" | "failed";
  data: T;
}>;
