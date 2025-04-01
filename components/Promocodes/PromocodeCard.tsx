"use client";
import { AccountFlaged } from "@/interfaces/account.interface";
import { Card, CardContent, CardHeader } from "@/components/common/Card";
import Image from "next/image";
export const PromocodeCard = (promoData: AccountFlaged, priority?: boolean) => {
  return (
    <div className="pr-4">
      <Card>
        <CardHeader className="relative h-28 bg-blue-200">
          <Image
            src={promoData.image || "/placeholder.svg"}
            alt={`${promoData.name} logo`}
            fill={true}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            style={{ objectFit: "cover" }}
            priority={priority || false}
          />
        </CardHeader>

        <CardContent className="bg-blue-600 text-white">
          <div className="font-bold mb-2">{promoData.name}</div>
          <button className="w-fit py-1 px-2 text-xs text-white border border-white rounded hover:bg-blue-700 transition-colors cursor-pointer uppercase">
            <a href={promoData.url} target="_blank">
              Quiero mi código
            </a>
          </button>
        </CardContent>
      </Card>
    </div>
  );
};

export const DiscountCardSkeleton = () => {
  return (
    <div className="overflow-hidden rounded shadow-sm">
      <div className="h-28 bg-gray-200 animate-pulse"></div>

      <div className="bg-blue-600 p-4">
        <div className="h-5 w-20 bg-blue-500 rounded animate-pulse mb-2"></div>

        <div className="h-7 w-full bg-blue-500 rounded animate-pulse"></div>
      </div>
    </div>
  );
};
