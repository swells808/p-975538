import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="flex-1 border border-gray-100 shadow-[0px_2px_4px_rgba(0,0,0,0.1),0px_4px_6px_rgba(0,0,0,0.1)] bg-white p-[25px] rounded-xl border-solid max-md:flex-[calc(50%_-_16px)] max-sm:w-full">
      <div className="mb-4">{icon}</div>
      <div>
        <div className="font-semibold text-xl text-black mb-3.5">{title}</div>
        <div className="text-base text-gray-600 leading-normal">
          {description}
        </div>
      </div>
    </div>
  );
};
