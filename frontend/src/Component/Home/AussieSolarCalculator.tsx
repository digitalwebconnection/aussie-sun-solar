import  { useState } from "react";
import {
    Sun,
    DollarSign,
    BatteryCharging,
    Zap,
    Leaf,
    ArrowRight,
} from "lucide-react";
import { usePopup } from "../../context/PopupContext";
import BlurText from "../BlurText";

export default function PremiumSolarCalculator() {
    const { openPopup } = usePopup();
    const [bill, setBill] = useState(250);
    const [systemSize, setSystemSize] = useState(6.6);

    // Solar Logic
    const yearlyBill = bill * 12;
    const yearlyGeneration = systemSize * 4.5 * 365;
    const yearlySavings = yearlyGeneration * 0.32;
    const monthlySavings = yearlySavings / 12;
    const co2Reduction = yearlyGeneration * 0.85;
    const payback = (systemSize * 950) / yearlySavings;

    return (
        <div className="min-h-screen bg-[#ffffff] px-4 overflow-hidden relative">


            <div className="max-w-7xl mx-auto bg-white   overflow-hidden grid lg:grid-cols-2 relative z-10">

                {/* LEFT SECTION */}
                <div className="bg-[#004093] relative shadow-xl shadow-black p-5 lg:p-10 overflow-hidden">


                    <div className="relative z-10">

                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 px-5 py-2 rounded-full text-white mb-4">
                            <Sun size={18} className="text-[#FE9900]" />
                            Australia's Smart Solar Calculator
                        </div>

                        {/* Heading */}
                        <h2 className="text-3xl md:text-5xl leading-tight font-serif font-bold text-white mb-4 flex flex-col items-start">
                            <BlurText
                                text="Calculate Your"
                                delay={80}
                                animateBy="words"
                                direction="top"
                            />
                            <BlurText
                                text="Solar Savings"
                                delay={80}
                                animateBy="words"
                                direction="bottom"
                                className="text-[#FE9900]"
                            />
                        </h2>

                        <p className="text-white/90 text-lg leading-relaxed mb-8 max-w-lg">
                            Discover how much you can save every year with a premium solar
                            system designed for Aussie homes.
                        </p>


                        {/* Monthly Bill Input */}
                        <div className="mb-10">
                            <div className="flex justify-between items-center mb-4">
                                <label className="text-white font-semibold text-lg">
                                    Monthly Electricity Bill
                                </label>

                                <div className="bg-[#FE9900] text-[#004093] px-4 py-2 rounded-2xl text-2xl font-black">
                                    ${bill}
                                </div>
                            </div>

                            {/* Input Box */}
                            <div className="relative mb-5">
                                <span className="absolute left-5 top-1/2 -translate-y-1/2 text-[#004093] font-bold text-xl">
                                    $
                                </span>

                                <input
                                    type="number"
                                    value={bill}
                                    onChange={(e) => setBill(Number(e.target.value))}
                                    placeholder="Enter your monthly bill"
                                    className="w-full h-16 rounded-2xl bg-white text-[#004093] text-xl font-bold pl-12 pr-5 outline-none border-4 border-transparent focus:border-[#FE9900] shadow-lg"
                                />
                            </div>


                        </div>

                        {/* Solar Size */}
                        <div className="mb-6">
                            <div className="flex justify-between items-center mb-4">
                                <label className="text-white font-semibold text-lg">
                                    Solar System Size
                                </label>

                                <div className="bg-[#FE9900] text-[#004093] px-4 py-2 rounded-2xl text-2xl font-black">
                                    {systemSize} kW
                                </div>
                            </div>

                            <input
                                type="range"
                                min="1"
                                max="15"
                                step="0.1"
                                value={systemSize}
                                onChange={(e) =>
                                    setSystemSize(Number(e.target.value))
                                }
                                className="w-full accent-[#FE9900] h-2"
                            />
                        </div>

                        {/* Savings Highlight */}
                        <div className="bg-white/10 border border-white/10 backdrop-blur-md rounded-3xl p-6 mb-10">
                            <p className="text-white/70 mb-2">
                                Estimated Monthly Savings
                            </p>

                            <h3 className="text-3xl md:text-5xl font-serif font-bold text-[#FE9900]">
                                ${monthlySavings.toFixed(0)}
                            </h3>

                            <p className="text-white/60 mt-2">
                                Per month on electricity bills
                            </p>
                        </div>

                        {/* CTA */}
                        <button onClick={openPopup} className="group w-full bg-[#FE9900] hover:bg-orange-500 transition-all duration-300 py-5 rounded-3xl text-[#004093] text-lg font-black flex items-center justify-center gap-3 shadow-2xl">
                            Get Free Solar Quote

                            <ArrowRight
                                className="group-hover:translate-x-1 transition-all"
                                size={22}
                            />
                        </button>
                    </div>
                </div>

                {/* RIGHT SECTION */}
                <div className="p-5 lg:p-10 bg-linear-to-b from-white to-[#f7faff]">

                    <div className="flex items-center gap-3 mb-10">
                        <div className="w-14 h-14 rounded-lg bg-[#FE9900] flex items-center justify-center">
                            <Zap className="text-white" size={28} />
                        </div>

                        <div>
                            <p className="text-[#004093] font-semibold">
                                Solar Performance
                            </p>

                            <h3 className="text-xl md:text-2xl font-serif font-semibold text-[#004093]">
                                Estimated Benefits
                            </h3>
                        </div>
                    </div>

                    {/* Cards */}
                    <div className="grid sm:grid-cols-2 gap-6">

                        {/* Card */}
                        <div className="group bg-white rounded-lg  shadow-black p-7 border border-gray-100 shadow-lg hover:-translate-y-2 transition-all duration-300">
                            <div className="w-14 h-14 rounded-2xl bg-[#004093] flex items-center justify-center mb-5">
                                <DollarSign className="text-white" />
                            </div>

                            <p className="text-gray-500 mb-2">
                                Annual Bill
                            </p>

                            <h3 className="text-4xl font-black text-[#004093]">
                                ${yearlyBill.toFixed(0)}
                            </h3>
                        </div>

                        {/* Card */}
                        <div className="group bg-white rounded-lg p-4  md:p-7 border border-gray-100 shadow-lg  shadow-black hover:-translate-y-2 transition-all duration-300">
                            <div className="w-14 h-14 rounded-2xl bg-[#FE9900] flex items-center justify-center mb-5">
                                <Sun className="text-white" />
                            </div>

                            <p className="text-gray-500 mb-2">
                                Solar Generation
                            </p>

                            <h3 className="text-4xl font-black text-[#FE9900]">
                                {yearlyGeneration.toFixed(0)}
                            </h3>

                            <span className="text-gray-400 text-sm">
                                kWh / Year
                            </span>
                        </div>

                        {/* Card */}
                        <div className="group bg-white rounded-lg p-7 border border-gray-100 shadow-lg  shadow-black hover:-translate-y-2 transition-all duration-300">
                            <div className="w-14 h-14 rounded-2xl bg-[#004093] flex items-center justify-center mb-5">
                                <BatteryCharging className="text-white" />
                            </div>

                            <p className="text-gray-500 mb-2">
                                Yearly Savings
                            </p>

                            <h3 className="text-4xl font-black text-[#004093]">
                                ${yearlySavings.toFixed(0)}
                            </h3>
                        </div>

                        {/* Card */}
                        <div className="group bg-white rounded-lg p-7 border border-gray-100 shadow-lg  shadow-black hover:-translate-y-2 transition-all duration-300">
                            <div className="w-14 h-14 rounded-2xl bg-[#FE9900] flex items-center justify-center mb-5">
                                <Leaf className="text-white" />
                            </div>

                            <p className="text-gray-500 mb-2">
                                CO₂ Reduction
                            </p>

                            <h3 className="text-4xl font-black text-[#FE9900]">
                                {co2Reduction.toFixed(0)}
                            </h3>

                            <span className="text-gray-400 text-sm">
                                kg / Year
                            </span>
                        </div>
                    </div>

                    {/* Bottom Card */}
                    <div className="mt-8 bg-[#004093] rounded-lg shadow-lg  shadow-black md:p-8 p-4 relative overflow-hidden">

                        <div className="absolute top-0 right-0 w-52 h-52 bg-[#FE9900]/20 rounded-full blur-[100px]"></div>

                        <div className="relative z-10">
                            <p className="text-white/90 text-lg mb-3">
                                Estimated Payback Period
                            </p>

                            <h2 className="text-7xl font-black text-[#FE9900] leading-none">
                                {payback.toFixed(1)}
                            </h2>

                            <p className="text-white text-xl mt-2">
                                Years
                            </p>

                            <div className="mt-6 bg-white/10 rounded-2xl p-4 border border-white/10">
                                <p className="text-white/70">
                                    Most Australian homeowners recover their solar investment faster with rising electricity prices.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}