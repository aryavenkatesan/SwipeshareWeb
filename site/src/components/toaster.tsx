import { useToast } from "../Toast.ts"

export function Toaster() {
    const { toasts, dismiss } = useToast()

    return (
        <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
            {toasts.map((toast) => (
                <div
                    key={toast.id}
                    className={`
            relative overflow-hidden rounded-lg p-4 pr-8 shadow-lg
            transform transition-all duration-300 ease-in-out
            ${toast.open
                            ? 'opacity-100'
                            : 'opacity-0'
                        }
            ${toast.variant === 'destructive'
                            ? 'bg-red-600 text-white'
                            : 'bg-white text-gray-900 border border-gray-200'
                        }
          `}
                >
                    {toast.title && (
                        <div className="text-sm font-semibold">{toast.title}</div>
                    )}
                    {toast.description && (
                        <div className="mt-1 text-sm opacity-90">{toast.description}</div>
                    )}
                    {toast.action}

                    <button
                        onClick={() => dismiss(toast.id)}
                        className="absolute right-2 top-2 rounded-md p-1 opacity-70 hover:opacity-100"
                    >
                        <svg
                            className="h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                        </svg>
                    </button>
                </div>
            ))}
        </div>
    )
}