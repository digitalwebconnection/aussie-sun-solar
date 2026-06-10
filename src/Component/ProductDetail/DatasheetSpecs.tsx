import React, { useState } from "react";
import { FileText, Download, Check, ChevronDown } from "lucide-react";
import type { ProductData } from "../../data/products";

interface DatasheetSpecsProps {
  product: ProductData;
}

/* ── Mobile accordion item ─────────────────────────── */
function MobileModelAccordion({ model }: { model: { name: string; watts: string; efficiency: string; type: string } }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      {/* Title row — always visible, tap to toggle */}
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between px-4 py-3.5 bg-white hover:bg-[#004093]/5 transition-colors text-left"
      >
        <span className="text-sm font-black text-[#004093]">{model.name}</span>
        <ChevronDown
          size={16}
          className={`text-[#004093] shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Collapsible details */}
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-60" : "max-h-0"}`}
      >
        <div className="divide-y divide-slate-100 bg-slate-50/60">
          <div className="flex justify-between items-center px-4 py-2.5">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Power Output</span>
            <span className="text-sm font-semibold text-slate-700">{model.watts}</span>
          </div>
          <div className="flex justify-between items-center px-4 py-2.5">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Efficiency</span>
            <span className="text-sm font-bold text-green-600">{model.efficiency}</span>
          </div>
          <div className="flex justify-between items-center px-4 py-2.5">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Type</span>
            <span className="text-sm font-semibold text-slate-500">{model.type}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export const DatasheetSpecs: React.FC<DatasheetSpecsProps> = ({ product }) => {
  // Graceful fallback technical parameters if extra is not provided
  const fallbackSpecs = product.category === "Solar Panels" ? [
    { label: "Cell Type", value: "High Efficiency Monocrystalline" },
    { label: "Module Efficiency", value: "Up to 22.5%" },
    { label: "Max Power Output", value: "440W" },
    { label: "Dimensions", value: "1722 x 1134 x 30 mm" },
    { label: "Weight", value: "21.5 - 22.0 kg" },
    { label: "Frame", value: "Anodized Aluminium Alloy" },
    { label: "Glass Type", value: "3.2mm tempered anti-reflective glass" },
    { label: "Junction Box", value: "IP68 Rated (3 bypass diodes)" },
  ] : product.category === "Solar Inverters" ? [
    { label: "Max Efficiency", value: "98.4%" },
    { label: "MPPT Trackers", value: "2 Trackers" },
    { label: "Protection Rating", value: "IP65 / IP66 (Outdoor)" },
    { label: "Backup Output", value: "Continuous power backup ready" },
    { label: "Cooling Method", value: "Natural Convection cooling" },
    { label: "Grid Standard", value: "AS/NZS 4777.2 compliant" },
  ] : [
    { label: "Battery Chemistry", value: "LiFePO4 (Lithium Iron Phosphate)" },
    { label: "Stackability", value: "Modular expandable stacking" },
    { label: "Depth of Discharge", value: "90% - 100% Usable" },
    { label: "Roundtrip Efficiency", value: "97.0% - 98.0%" },
    { label: "Protection Class", value: "IP65 Rated Casing" },
    { label: "Cooling Type", value: "Natural Passive Cooling" },
  ];

  const specs = product.datasheetSpecs && product.datasheetSpecs.length > 0
    ? product.datasheetSpecs
    : fallbackSpecs;

  const fallbackModels = [
    { name: `${product.brand} Standard Option 1`, watts: "5kW / 415W", efficiency: "21.5%", type: "Standard" },
    { name: `${product.brand} Premium Option 2`, watts: "6kW / 440W", efficiency: "22.3%", type: "Premium" },
  ];

  const modelsList = product.models && product.models.length > 0
    ? product.models
    : fallbackModels;

  const hasPdfs = product.pdfUrls && product.pdfUrls.length > 0;

  return (
    <div className="bg-white mx-auto max-w-7xl py-4 md:py-16" id="datasheet-section py-2">
      <h3 className="text-3xl md:text-5xl font-serif font-bold text-[#004093] mb-6 flex items-center gap-2">
        <span className="w-1.5 h-10 bg-[#FE9900] rounded-full inline-block" />
        Technical Datasheet & Specifications
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-4 md:mb-8">
        {/* Technical Param List */}
        <div className={hasPdfs ? "lg:col-span-7" : "lg:col-span-12"}>
          <h4 className="text-sm font-bold text-[#004093] uppercase tracking-wider mb-4">
            Technical Parameters
          </h4>
          <div className="border border-slate-300 rounded-lg overflow-hidden divide-y divide-slate-100">
            {specs.map((item, idx) => (
              <div key={idx} className="grid grid-cols-1 sm:grid-cols-12 p-4 bg-white hover:bg-slate-300/50 transition">
                <span className="sm:col-span-5 text-sm font-black text-[#004093]/80">
                  {item.label}
                </span>
                <span className="sm:col-span-7 text-sm font-semibold text-slate-900 mt-1 sm:mt-0">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* PDF Datasheet Download Box */}
        {hasPdfs && (
          <div className="lg:col-span-5 flex flex-col">
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 flex flex-col justify-between h-full">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#004093] flex items-center justify-center text-white mb-4">
                  <FileText size={24} />
                </div>
                <h4 className="text-xl md:text-2xl font-serif font-semibold text-[#004093] mb-2">
                  Download Official PDF
                </h4>
                <p className="text-slate-900 text-xs font-semibold leading-relaxed mb-6">
                  Get the full technical specifications sheet, safety guides, and installation standards directly from the manufacturer.
                </p>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                    <Check size={16} className="text-green-500 shrink-0" />
                    <span>Verified SAA Specifications</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                    <Check size={16} className="text-green-500 shrink-0" />
                    <span>Installation dimensions included</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                    <Check size={16} className="text-green-500 shrink-0" />
                    <span>Warranty claim details</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                {product.pdfUrls?.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#FE9900] hover:bg-[#e08600] text-white px-6 py-4 rounded-xl font-black transition duration-300 shadow-md shadow-[#FE9900]/15 hover:scale-[1.02]"
                  >
                    <Download size={18} />
                    Download {item.label} Datasheet
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Available Models Options */}
      <div>
        <h4 className="text-sm font-bold text-[#004093] uppercase tracking-wider mb-4">
          Available Product Models
        </h4>

        {/* ── MOBILE: accordion (FAQ style) ── */}
        <div className="flex flex-col divide-y divide-slate-200 border border-slate-200 rounded-xl overflow-hidden md:hidden">
          {modelsList.map((model, idx) => (
            <MobileModelAccordion key={idx} model={model} />
          ))}
        </div>

        {/* ── DESKTOP: full table ── */}
        <div className="hidden md:block overflow-x-auto border border-slate-100 rounded-lg shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-300">
                <th className="p-4 text-xs font-black text-[#004093] uppercase tracking-wider">Model Name</th>
                <th className="p-4 text-xs font-black text-[#004093] uppercase tracking-wider">Power Output / Capacity</th>
                <th className="p-4 text-xs font-black text-[#004093] uppercase tracking-wider">Efficiency Rating</th>
                <th className="p-4 text-xs font-black text-[#004093] uppercase tracking-wider">Cell / System Type</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {modelsList.map((model, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50 transition">
                  <td className="p-4 text-sm font-black text-slate-800">{model.name}</td>
                  <td className="p-4 text-sm font-semibold text-slate-600">{model.watts}</td>
                  <td className="p-4 text-sm font-bold text-green-600">{model.efficiency}</td>
                  <td className="p-4 text-sm font-semibold text-slate-500">{model.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};
