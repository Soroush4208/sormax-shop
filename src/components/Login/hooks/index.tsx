import { signInUser, signUpUser } from "@/components/login/services/index";
import { useMutation } from "@tanstack/react-query";

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
