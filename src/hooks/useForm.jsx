import { useState } from "react";

export const useForm = () => {
  const [isSaving, setIsSaving] = useState(false);

  const startSaving = () => setIsSaving(true);
  const stopSaving = () => setIsSaving(false);


  return { isSaving, startSaving, stopSaving};
}
