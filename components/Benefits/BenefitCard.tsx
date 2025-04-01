"use client";
import { AccountTagged } from "@/interfaces/account.interface";
import { Card, CardContent, CardHeader } from "../common/Card";
import Image from "next/image";
import React from "react";
import { MapPin } from "lucide-react";

export const BenefitCard = (benefitData: AccountTagged, priority?: boolean) => {
  return (
    <div className="pr-4">
      <Card>
        {/* Card top section with image */}
        <CardHeader className="relative h-28 bg-blue-200">
          <a href={benefitData.url} target="_blank">
            <Image
              src={benefitData.image.url || "/placeholder.svg"}
              alt={`${benefitData.name} location`}
              fill={true}
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              style={{ objectFit: "cover" }}
              priority={priority || false}
            />
          </a>
        </CardHeader>

        {/* Card bottom section (white with discounts) */}
        <CardContent className="bg-white p-4">
          <div className="font-bold text-gray-800 mb-2">
            <a href={benefitData.url}>{benefitData.name}</a>
          </div>
          <div className="flex space-x-2 mb-2">
            {benefitData.type_benefit.map((benefit, index) => (
              <span
                key={index}
                className={`font-bold
            ${
              benefit.program_name === "Club La Nación Black"
                ? "text-gray-800"
                : benefit.program_name === "Club La Nación Premium"
                ? "text-blue-600"
                : "text-blue-400"
            }`}
              >
                {benefit.value}%
              </span>
            ))}
          </div>
          <div className="flex items-center text-xs text-gray-500">
            <MapPin size={12} className="mr-1" />
            <span>
              {benefitData.location != null && (
                <>
                  {(benefitData.location >= 1000
                    ? benefitData.location / 1000
                    : benefitData.location
                  ).toLocaleString("es-AR", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}{" "}
                  {benefitData.location >= 1000 ? "km" : "m"}
                </>
              )}
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export const BenefitCardSkeleton = () => {
  return (
    <div className="overflow-hidden rounded shadow-sm">
      <div className="h-28 bg-gray-200 animate-pulse"></div>

      <div className="bg-white p-4">
        <div className="h-5 w-20 bg-gray-200 rounded animate-pulse mb-2"></div>

        <div className="flex space-x-2 mb-2">
          <div className="h-5 w-10 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-5 w-10 bg-gray-300 rounded animate-pulse"></div>
          <div className="h-5 w-10 bg-gray-200 rounded animate-pulse"></div>
        </div>

        <div className="flex items-center">
          <div className="h-4 w-16 bg-gray-200 rounded animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};
