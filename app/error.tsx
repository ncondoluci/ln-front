"use client";

"use client";

import { useEffect } from "react";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import Link from "next/link";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md text-center">
        <div className="flex justify-center mb-6">
          <AlertTriangle size={64} className="text-red-500" />
        </div>

        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          ¡Algo salió mal!
        </h1>

        <p className="text-gray-600 mb-6">
          Lo sentimos, ha ocurrido un error inesperado. Por favor, intenta
          nuevamente o vuelve a la página principal.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            <RefreshCw size={18} />
            Intentar nuevamente
          </button>

          <Link
            href="/"
            className="flex items-center justify-center gap-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-100 transition-colors"
          >
            <Home size={18} />
            Ir al inicio
          </Link>
        </div>

        {error.digest && (
          <p className="mt-6 text-xs text-gray-500">
            Código de error: {error.digest}
          </p>
        )}
      </div>
    </div>
  );
}
