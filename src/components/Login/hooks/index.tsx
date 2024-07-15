import { useMutation } from "@tanstack/react-query";
import { signInUser, signUpUser } from "@/components/Login/services/index";

export const usePostData = () => {
  return useMutation({
    mutationKey: ["users"],
    mutationFn: signUpUser,
  });
};

export const useSignInUser = () => {
  return useMutation({
    mutationFn: signInUser,
  });
};
