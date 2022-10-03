import { useCallback, useState } from "react";

function useInput(initial) {
  const [datas, setDatas] = useState(initial);

  const onChange = (e) => {
    const { name, value } = e.target;
    setDatas((prev) => ({ ...prev, [name]: value }));
  };

  const reset = useCallback(() => setDatas(initial), [initial]);

  return [datas, onChange, reset];
}
export default useInput;
