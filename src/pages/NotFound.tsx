import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useLocalization } from "@/hooks/useLocalization";
import { t } from "@/localization/translations";

const NotFound = () => {
  const location = useLocation();
  const { language } = useLocalization();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">{t(language, 'notFound.title')}</h1>
        <p className="text-xl text-gray-600 mb-4">{t(language, 'notFound.subtitle')}</p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          {t(language, 'notFound.returnHome')}
        </a>
      </div>
    </div>
  );
};

export default NotFound;
