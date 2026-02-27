import { useEffect } from "react";

const useTitle = (title: string) => {
  useEffect(() => {
    document.title = `Apna Ashiana | ${title}`;
  }, [title]);
};

export default useTitle;