import { useEffect, useState } from "react";

const ID = "manning-bingo";

const useCompleted = (): {
  items: string[];
  updateCompleted: (id: string, value: boolean) => void;
} => {
  const [completed, setCompleted] = useState<string[]>([]);

  useEffect(() => {
    const data = localStorage.getItem(ID);
    if (!data) return;
    const completed_: string[] = JSON.parse(data);
    setCompleted(completed_);
  }, []);

  const updateCompleted = (id: string, value: boolean) => {
    let newCompleted = [...completed];

    // If we want to complete it
    if (value) {
      // It's already completed
      if (newCompleted.includes(id)) return;

      // Adding it
      newCompleted.push(id);
    }

    // If we don't want to complete it
    else {
      const index = newCompleted.indexOf(id);

      // It's not completed
      if (index === -1) return;

      newCompleted = newCompleted.filter((id_: string) => id_ !== id);
    }

    localStorage.setItem(ID, JSON.stringify(newCompleted));
    setCompleted(newCompleted);
  };

  return { items: completed, updateCompleted };
};

export default useCompleted;
