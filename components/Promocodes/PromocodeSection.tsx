import { getAccountsByFlag } from "@/actions/account.action";
import CustomCarousel from "@/components/common/Carrousel";
import { PromocodeCard } from "./PromocodeCard";

export const PromocodeSection = async () => {
  const accounts = await getAccountsByFlag({
    haveVoucher: true,
    offset: 0,
    limit: 5,
  });

  const hasData = accounts && accounts.length > 0;

  return (
    <div className="w-full max-w-6xl mx-auto p-6 bg-gray-50">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
            Códigos de descuento
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-1">
            ¿Sos socio de Club LA NACION? Descargá tu código y disfrutá
            beneficios exclusivos en tus marcas favoritas
          </p>
        </div>
        <button className="text-blue-500 font-bold border border-blue-500 rounded-full text-xs px-4 py-1.5 hover:bg-blue-50 transition-colors whitespace-nowrap cursor-pointer">
          TODOS LOS CÓDIGOS
        </button>
      </div>
      {hasData ? (
        <CustomCarousel element={PromocodeCard} data={accounts} show={4} />
      ) : (
        <div className="text-sm text-gray-500 italic">
          No hay beneficios disponibles por el momento.
        </div>
      )}
    </div>
  );
};
