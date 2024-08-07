import { getIdCookie } from "@/components/login/services";
import axios from "@/utils/axiosConfig";

export async function getUserInfo() {
  const userId = getIdCookie();
  const { data } = await axios.get(`/users/${userId}`);
  console.log(data.data.user);
  return data.data.user;
}
