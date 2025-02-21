import { FeatureCard } from "@/components/ui/FeatureCard";
import {
  TimeTrackingIcon,
  ProjectLoggingIcon,
  PhotoCaptureIcon,
} from "@/lib/icons";

export const Features = () => {
  return (
    <section className="pt-[132px] pb-7 px-20">
      <div className="max-w-screen-xl flex gap-8 mx-auto my-0 max-md:flex-wrap max-md:px-10 max-md:py-0 max-sm:flex-col max-sm:px-5 max-sm:py-0">
        <FeatureCard
          icon={<TimeTrackingIcon />}
          title="Time Tracking"
          description="One-tap clock-in/out with secure authentication for seamless time tracking."
        />
        <FeatureCard
          icon={<ProjectLoggingIcon />}
          title="Project-Based Logging"
          description="Assign time entries to specific projects for accurate billing and tracking."
        />
        <FeatureCard
          icon={<PhotoCaptureIcon />}
          title="Photo Capture & Geolocation"
          description="Prevent time fraud with identity verification and location tracking."
        />
      </div>
    </section>
  );
};
