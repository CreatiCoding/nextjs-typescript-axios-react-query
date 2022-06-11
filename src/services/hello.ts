import { get } from "./api";

export async function hello({ code }: { code: string }) {
  return await get("/api/hello", { code });
}
