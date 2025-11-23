import { Component, ErrorInfo, ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
          <div className="max-w-md w-full text-center p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <div className="text-6xl mb-6">🚨</div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Oups ! Une erreur est survenue
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Désolé, une erreur inattendue s'est produite. Veuillez réessayer plus tard.
            </p>
            <div className="bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 p-4 rounded-lg mb-6 text-left text-sm">
              <p className="font-medium">Détails de l'erreur :</p>
              <p className="mt-1 font-mono text-xs break-words">
                {this.state.error?.message || 'Erreur inconnue'}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors"
              >
                Retour à l'accueil
              </Link>
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white font-medium rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                Recharger la page
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export function ErrorPage({ error }: { error?: Error }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <div className="max-w-md w-full text-center p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
        <div className="text-6xl mb-6">🚨</div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Page non trouvée
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          La page que vous recherchez semble avoir été déplacée ou n'existe pas.
        </p>
        {error && (
          <div className="bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 p-4 rounded-lg mb-6 text-left text-sm">
            <p className="font-medium">Détails de l'erreur :</p>
            <p className="mt-1 font-mono text-xs break-words">
              {error.message}
            </p>
          </div>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors"
          >
            Retour à l'accueil
          </Link>
          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white font-medium rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            Retour en arrière
          </button>
        </div>
      </div>
    </div>
  );
}
