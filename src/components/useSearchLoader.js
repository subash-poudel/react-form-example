import { useEffect, useState } from "react";

const SCRIPT_TAG = "vyaguta-search-script";

export function useSearchLoader(callback) {
  const [scriptState, setScriptState] = useState({
    loading: true,
    error: false,
  });
  useEffect(() => {
    const existingScript = document.getElementById(SCRIPT_TAG);
    if (!existingScript) {
      const script = document.createElement("SCRIPT");
      script.src = "widget.js";
      script.id = SCRIPT_TAG;
      script.async = true;
      script.charset = "utf-8";
      document.head.appendChild(script);
      script.onload = () => {
        setScriptState({ loading: false, error: false });
        if (callback) {
          callback();
        }
      };
      script.onerror = () => {
        setScriptState({ loading: false, error: true });
      };
    }
  }, [callback]);

  return scriptState;
}
