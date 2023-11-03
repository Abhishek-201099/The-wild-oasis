import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCurrentUser } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: () => {
      toast.success("User account updated successfully !");
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: () =>
      toast.error("There was a problem while updating user Account"),
  });

  return { updateUser, isUpdating };
}
