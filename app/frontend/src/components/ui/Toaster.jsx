import { useEffect, useState } from "react";

let listeners = [];
let toastId = 0;

const notify = (message) => {
  toastId++;
  listeners.forEach((l) =>
    l({ id: toastId, message })
  );
};

export const toast = (message) => notify(message);

export const Toaster = () => {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    const listener = (toast) => {
      setToasts((prev) => [...prev, toast]);

      setTimeout(() => {
        setToasts((prev) =>
          prev.filter((t) => t.id !== toast.id)
        );
      }, 3000);
    };

    listeners.push(listener);
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  }, []);

  return (
    <div className="fixed top-5 right-5 z-50 space-y-3">
      {toasts.map((t) => (
        <div
          key={t.id}
          className="px-4 py-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/10 text-white shadow-lg animate-fadeIn"
        >
          {t.message}
        </div>
      ))}
    </div>
  );
};