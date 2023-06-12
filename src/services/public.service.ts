import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Todo } from "types/todos";

export const publicService = createApi({
  reducerPath: "public",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  }),
  tagTypes: ["Todos"],
  endpoints(build) {
    return {
      getTodos: build.query<Todo[], Record<string, any>>({
        query: (params) => ({ url: "/todos", params }),
        providesTags: ["Todos"],
      }),
    };
  },
});
