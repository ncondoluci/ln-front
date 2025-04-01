import { getAccountsByTag } from "@/actions/account.action";
import { BenefitCard } from "./BenefitCard";
import CustomCarousel from "../common/Carrousel";

export const BenefitsSection = async () => {
  const accounts = await getAccountsByTag({
    tag: "turismoenbuenosaires",
    offset: 0,
    limit: 5,
  });

  const hasData = accounts && accounts.length > 0;

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      {/* Header section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
            Turismo en Buenos Aires
          </h2>
        </div>
        <button className="text-blue-500 font-bold border border-blue-500 rounded-full text-xs px-4 py-1.5 hover:bg-blue-50 transition-colors whitespace-nowrap cursor-pointer">
          TODOS LOS BENEFICIOS
        </button>
      </div>
      {hasData ? (
        <CustomCarousel element={BenefitCard} data={accounts} show={4} />
      ) : (
        <div className="text-sm text-gray-500 italic">
          No hay beneficios disponibles por el momento.
        </div>
      )}
    </div>
  );
};
