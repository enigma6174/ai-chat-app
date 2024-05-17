import axios from "axios";

export interface Message {
  role: "user" | "ai";
  content: string;
}

// export async function getAnswer(payload: any, conversation: any) {
//   "use server";
//
//   const { data } = await axios.post("http://127.0.0.1:8001/api/chat", payload);
//   return {
//     messages: [
//       ...conversation,
//       {
//         role: "ai" as const,
//         content: data,
//       },
//     ],
//   };
// }

export async function getAnswer(payload: Object) {
  const { data } = await axios.post("http://127.0.0.1:8001/api/chat", payload);
  return data;
}
