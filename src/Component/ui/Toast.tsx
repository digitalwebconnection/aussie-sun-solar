import { createContext, useContext, useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle,
  Info,
  AlertCircle,
  AlertTriangle,
  X,
} from "lucide-react";

/* ─────────────────────────────────────────────────────────
   TYPES
───────────────────────────────────────────────────────── */
export type ToastType = "success" | "error" | "info" | "warning";

interface ToastItem {
  id: number;
  message: string;
  type: ToastType;
  title?: string;
}

export interface ToastContextValue {
  success: (msg: string, title?: string) => void;
  error:   (msg: string, title?: string) => void;
  info:    (msg: string, title?: string) => void;
  warning: (msg: string, title?: string) => void;
}

/* ─────────────────────────────────────────────────────────
   STYLE CONFIG  — matches the pastel card style in the ref
───────────────────────────────────────────────────────── */
const CONFIG: Record<
  ToastType,
  {
    wrapper: string;     // card background + border
    iconWrap: string;    // icon circle background
    iconColor: string;   // icon color
    titleColor: string;  // title text color
    msgColor: string;    // message text color
    closeColor: string;  // close button color
    bar: string;         // progress bar color
    icon: React.ReactNode;
    defaultTitle: string;
  }
> = {
  success: {
    wrapper:    "bg-green-50 border border-green-200",
    iconWrap:   "bg-green-500",
    iconColor:  "text-white",
    titleColor: "text-green-800",
    msgColor:   "text-green-700",
    closeColor: "text-green-400 hover:text-green-700",
    bar:        "bg-green-400",
    icon:       <CheckCircle  size={18} />,
    defaultTitle: "Success",
  },
  error: {
    wrapper:    "bg-red-50 border border-red-200",
    iconWrap:   "bg-red-500",
    iconColor:  "text-white",
    titleColor: "text-red-800",
    msgColor:   "text-red-700",
    closeColor: "text-red-400 hover:text-red-700",
    bar:        "bg-red-400",
    icon:       <AlertCircle  size={18} />,
    defaultTitle: "Error",
  },
  info: {
    wrapper:    "bg-blue-50 border border-blue-200",
    iconWrap:   "bg-blue-500",
    iconColor:  "text-white",
    titleColor: "text-blue-800",
    msgColor:   "text-blue-700",
    closeColor: "text-blue-400 hover:text-blue-700",
    bar:        "bg-blue-400",
    icon:       <Info         size={18} />,
    defaultTitle: "Info",
  },
  warning: {
    wrapper:    "bg-orange-50 border border-orange-200",
    iconWrap:   "bg-orange-400",
    iconColor:  "text-white",
    titleColor: "text-orange-800",
    msgColor:   "text-orange-700",
    closeColor: "text-orange-400 hover:text-orange-700",
    bar:        "bg-orange-400",
    icon:       <AlertTriangle size={18} />,
    defaultTitle: "Warning",
  },
};

const DURATION = 4500; // ms

/* ─────────────────────────────────────────────────────────
   SINGLE TOAST CARD
───────────────────────────────────────────────────────── */
function ToastCard({
  toast,
  onDismiss,
}: {
  toast: ToastItem;
  onDismiss: (id: number) => void;
}) {
  const cfg = CONFIG[toast.type];
  const [progress, setProgress] = useState(100);

  /* Animate shrinking progress bar */
  useEffect(() => {
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const elapsed = now - start;
      const pct = Math.max(0, 100 - (elapsed / DURATION) * 100);
      setProgress(pct);
      if (pct > 0) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: 60, scale: 0.94 }}
      animate={{ opacity: 1, x: 0,  scale: 1    }}
      exit={{   opacity: 0, x: 60, scale: 0.94, transition: { duration: 0.2 } }}
      transition={{ type: "spring", stiffness: 340, damping: 30 }}
      className={`pointer-events-auto w-full overflow-hidden rounded-2xl shadow-lg ${cfg.wrapper}`}
      role="alert"
      aria-live="assertive"
    >
      {/* Main row */}
      <div className="flex items-start gap-3 px-4 pt-4 pb-3">

        {/* Icon circle */}
        <div className={`shrink-0 w-9 h-9 rounded-xl flex items-center justify-center ${cfg.iconWrap} ${cfg.iconColor} shadow-sm`}>
          {cfg.icon}
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0 pt-0.5">
          <p className={`text-sm font-black leading-tight ${cfg.titleColor}`}>
            {toast.title ?? cfg.defaultTitle}
          </p>
          <p className={`text-xs font-medium mt-0.5 leading-relaxed ${cfg.msgColor}`}>
            {toast.message}
          </p>
        </div>

        {/* Close */}
        <button
          onClick={() => onDismiss(toast.id)}
          className={`shrink-0 mt-0.5 p-1 rounded-lg transition-colors ${cfg.closeColor}`}
          aria-label="Dismiss"
        >
          <X size={14} />
        </button>
      </div>

      {/* Progress bar */}
      <div className="h-[3px] bg-black/5 mx-4 mb-3 rounded-full overflow-hidden">
        <motion.div
          className={`h-full rounded-full ${cfg.bar}`}
          style={{ width: `${progress}%` }}
          transition={{ ease: "linear" }}
        />
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────
   CONTEXT
───────────────────────────────────────────────────────── */
const ToastContext = createContext<ToastContextValue | null>(null);

let _id = 0;

/* ─────────────────────────────────────────────────────────
   PROVIDER
───────────────────────────────────────────────────────── */
export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const push = useCallback((message: string, type: ToastType, title?: string) => {
    const id = ++_id;
    setToasts((prev) => [...prev, { id, message, type, title }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, DURATION + 300); // slightly longer than animation
  }, []);

  const dismiss = useCallback((id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const ctx: ToastContextValue = {
    success: (msg, title) => push(msg, "success", title),
    error:   (msg, title) => push(msg, "error",   title),
    info:    (msg, title) => push(msg, "info",     title),
    warning: (msg, title) => push(msg, "warning",  title),
  };

  return (
    <ToastContext.Provider value={ctx}>
      {children}

      {/* ── Container — bottom-right, stacked ── */}
      <div
        aria-live="polite"
        className="fixed bottom-6 right-4 z-9999 flex flex-col gap-2.5 pointer-events-none"
        style={{ width: "min(360px, calc(100vw - 2rem))" }}
      >
        <AnimatePresence mode="popLayout">
          {toasts.map((toast) => (
            <ToastCard key={toast.id} toast={toast} onDismiss={dismiss} />
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

/* ─────────────────────────────────────────────────────────
   HOOK
───────────────────────────────────────────────────────── */
export function useToast(): ToastContextValue {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used inside <ToastProvider>");
  return ctx;
}
