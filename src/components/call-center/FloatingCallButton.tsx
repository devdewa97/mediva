"use client";

import { useState } from "react";
import {
  Headphones,
  Phone,
  MessageCircle,
  Mail,
  Calendar,
  X,
  LucideIcon
} from "lucide-react";
import {
  callCenterConfig,
  contactServices,
  advancedConfig
} from "./call-center-config";

// Mapping icon name ke komponen
const iconMap: Record<string, LucideIcon> = {
  Phone,
  MessageCircle,
  Mail,
  Calendar,
};

export default function FloatingCallButton() {
  const [isOpen, setIsOpen] = useState(false);
  const { primaryColor, solidColor, panelTitle, panelSubtitle, footerNote, pingAnimation } = callCenterConfig;
  const { panelWidth, offset, zIndex } = advancedConfig;

  // Posisi
  const isBottomRight = callCenterConfig.position === "bottom-right";
  const horizontalPos = isBottomRight ? "right" : "left";

  // Responsive hide
  const hideClass = advancedConfig.hideOnMobile
    ? {
        sm: "hidden sm:block",
        md: "hidden md:block",
        lg: "hidden lg:block",
      }[advancedConfig.mobileBreakpoint]
    : "";

  return (
    <div
      className={`fixed ${horizontalPos}-[${offset.x}px] bottom-[${offset.y}px] z-${zIndex} ${hideClass}`}
      style={{
        [horizontalPos]: `${offset.x}px`,
        bottom: `${offset.y}px`,
        zIndex: zIndex,
      }}
    >
      {/* Contact Options Panel */}
      <div
        className={`absolute ${horizontalPos}-0 ${isBottomRight ? "bottom-16" : "bottom-16"} ${panelWidth} transition-all duration-${advancedConfig.animationDuration} ease-${advancedConfig.animationEasing} ${
          isOpen
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-4 scale-95 pointer-events-none"
        }`}
        style={{ bottom: `${advancedConfig.buttonSize + 8}px` }}
      >
        <div className="bg-white rounded-2xl shadow-2xl border border-slate-200/50 overflow-hidden">
          {/* Header */}
          <div className={`bg-gradient-to-r ${primaryColor} px-4 py-3`}>
            <div className="flex items-center gap-2">
              <Headphones className="w-5 h-5 text-white" />
              <span className="text-white font-semibold">{panelTitle}</span>
            </div>
            <p className="text-white/80 text-xs mt-0.5">{panelSubtitle}</p>
          </div>

          {/* Contact Options */}
          <div className="p-2 space-y-1">
            {contactServices.map((service, index) => {
              const IconComponent = iconMap[service.icon];
              return (
                <a
                  key={index}
                  href={service.href}
                  target={service.href.startsWith("http") ? "_blank" : undefined}
                  rel={service.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                >
                  <div
                    className={`w-10 h-10 ${service.color} ${service.hoverColor} rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110`}
                  >
                    {IconComponent && <IconComponent className="w-5 h-5 text-white" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-slate-800 truncate">
                      {service.title}
                    </p>
                    <p className="text-xs text-slate-500 truncate">
                      {service.description}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Footer Note */}
          <div className="px-4 pb-3 pt-2 bg-slate-50 border-t border-slate-100">
            <p className="text-xs text-slate-400 text-center">{footerNote}</p>
          </div>
        </div>
      </div>

      {/* Main Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`relative w-14 h-14 bg-gradient-to-r ${primaryColor} rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:shadow-2xl hover:scale-110 active:scale-95`}
        style={{ width: advancedConfig.buttonSize, height: advancedConfig.buttonSize }}
      >
        {/* Pulse Animation */}
        {pingAnimation && (
          <span
            className="absolute inset-0 rounded-full animate-ping opacity-75"
            style={{ backgroundColor: solidColor }}
          />
        )}

        {/* Icon */}
        {isOpen ? (
          <X className="w-6 h-6 text-white relative z-10" />
        ) : (
          <Headphones className="w-6 h-6 text-white relative z-10" />
        )}
      </button>
    </div>
  );
}