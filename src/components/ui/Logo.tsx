import { LogoIcon } from "@/lib/icons";

export const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <LogoIcon />
      <div className="flex items-center font-bold text-2xl leading-6">
        <span className="text-[#008000]">CICO</span>
        <span className="text-[#4BA0F4] ml-2">Timeclock</span>
      </div>
    </div>
  );
};
