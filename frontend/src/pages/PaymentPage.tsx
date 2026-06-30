import React, { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  CreditCard,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
  Printer,
  RefreshCw,
  Sparkles,
  ArrowLeft,
} from "lucide-react";
import SEO from "../Component/SEO";
import { useToast } from "../Component/ui/Toast";
import { apiUrl } from "../lib/api";
import bgImage from "../assets/downloaded-images/solar-cta-bg.jpg";

interface VerificationData {
  success: boolean;
  paymentStatus: string;
  customerDetails: {
    name: string;
    email: string;
  };
  invoiceRef: string;
  description: string;
  amountTotal: number;
  currency: string;
  transactionId: string;
}

const PaymentPage = () => {
  const [searchParams] = useSearchParams();
  const toast = useToast();
  
  const status = searchParams.get("status");
  const sessionId = searchParams.get("session_id");

  // Form state
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    invoiceRef: "",
    amount: "",
    description: "",
  });
  const [focusedFields, setFocusedFields] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Success state verification
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationError, setVerificationError] = useState<string | null>(null);
  const [paymentDetails, setPaymentDetails] = useState<VerificationData | null>(null);

  // Verify Stripe payment session on success
  useEffect(() => {
    if (status === "success" && sessionId) {
      setIsVerifying(true);
      setVerificationError(null);
      
      fetch(apiUrl(`/api/payment/verify-session/${sessionId}`))
        .then((res) => {
          if (!res.ok) {
            throw new Error("Failed to verify transaction status.");
          }
          return res.json();
        })
        .then((data) => {
          if (data.success) {
            setPaymentDetails(data);
          } else {
            setVerificationError(data.message || "Payment verification failed.");
          }
        })
        .catch((err) => {
          console.error(err);
          setVerificationError("An error occurred while verifying your payment. Please contact support.");
        })
        .finally(() => {
          setIsVerifying(false);
        });
    }
  }, [status, sessionId]);

  const handleFocus = (field: string) => {
    setFocusedFields((prev) => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field: string) => {
    setFocusedFields((prev) => ({ ...prev, [field]: false }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  // Submit and create Stripe checkout session
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Client-side validations
    if (!formValues.name.trim()) return toast.error("Please enter your name.");
    if (!formValues.email.trim()) return toast.error("Please enter your email.");
    if (!formValues.invoiceRef.trim()) return toast.error("Please enter your invoice or reference number.");
    
    const parsedAmount = parseFloat(formValues.amount);
    if (isNaN(parsedAmount) || parsedAmount <= 0) {
      return toast.error("Please enter a valid positive payment amount.");
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(apiUrl("/api/payment/create-checkout-session"), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formValues.name,
          email: formValues.email,
          invoiceRef: formValues.invoiceRef,
          amount: parsedAmount,
          description: formValues.description,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Failed to initialize secure checkout session.");
      }

      // Redirect user to Stripe Checkout
      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error("Checkout session URL not returned from backend.");
      }
    } catch (error: any) {
      console.error(error);
      toast.error(error.message || "Something went wrong. Please try again.");
      setIsSubmitting(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      <SEO
        title="Secure Online Payment | Aussie Sun Solar"
        description="Make secure online payments for your Aussie Sun Solar system deposits, solar installations, and electrical services."
      />

      {/* Cinematic Hero */}
      <section className="relative overflow-hidden pt-36 pb-28">
        <div className="absolute inset-0">
          <img
            src={bgImage}
            alt="Solar rooftop background"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-linear-to-r from-[#004093] via-black/40 to-black/20" />
        </div>
        
        {/* Glow Effects */}
        <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-[#FE9900]/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#004093]/30 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4 flex items-center gap-4"
            >
              <div className="h-[2px] w-14 bg-[#FE9900]" />
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#FE9900]">
                Secure Billing
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-serif font-bold leading-tight text-white md:text-6xl"
            >
              Secure Online
              <span className="block text-[#FE9900]">Payment Portal</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="mt-4 max-w-2xl text-lg leading-relaxed text-white/80"
            >
              Pay deposits, installations, or invoices safely and quickly. We accept all major credit cards powered securely by Stripe.
            </motion.p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 h-22 w-full bg-linear-to-t from-slate-50 to-transparent" />
      </section>

      {/* Main Content Area */}
      <section className="relative z-10 mx-auto -mt-10 max-w-4xl px-4 md:px-6">
        <AnimatePresence mode="wait">
          
          {/* 1. SUCCESS STATE VERIFYING */}
          {status === "success" && isVerifying && (
            <motion.div
              key="verifying"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="rounded-3xl bg-white p-12 text-center shadow-xl border border-gray-100 flex flex-col items-center justify-center min-h-[400px]"
            >
              <RefreshCw className="h-12 w-12 text-[#004093] animate-spin mb-4" />
              <h2 className="text-2xl font-bold text-gray-800">Verifying Your Payment</h2>
              <p className="text-gray-500 mt-2">
                We are securely confirming your transaction details with Stripe. Please do not close or refresh this page.
              </p>
            </motion.div>
          )}

          {/* 2. SUCCESS STATE COMPLETED */}
          {status === "success" && !isVerifying && paymentDetails && (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="rounded-3xl bg-white p-8 md:p-12 shadow-2xl border border-green-50 overflow-hidden relative print:border-none print:shadow-none print:p-0"
            >
              <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-green-500/5 blur-3xl pointer-events-none" />
              
              <div className="flex flex-col items-center text-center pb-8 border-b border-gray-100">
                <div className="h-20 w-20 rounded-full bg-green-50 flex items-center justify-center mb-6">
                  <CheckCircle2 className="h-12 w-12 text-green-500 animate-bounce" />
                </div>
                <h2 className="text-3xl font-serif font-bold text-gray-900">Payment Successful!</h2>
                <p className="text-gray-500 mt-2">
                  Thank you for your business. Your payment has been securely processed.
                </p>
                <div className="mt-4 inline-flex items-center gap-1.5 px-4 py-1.5 bg-green-50 rounded-full text-xs font-bold uppercase tracking-wider text-green-700">
                  <ShieldCheck size={14} /> Stripe Confirmed
                </div>
              </div>

              {/* Receipt Body */}
              <div className="py-8 space-y-6">
                <h3 className="text-lg font-bold text-gray-900">Transaction Receipt</h3>
                
                <div className="grid gap-x-6 gap-y-4 md:grid-cols-2 bg-gray-50/50 p-6 rounded-2xl border border-gray-100/80 text-sm">
                  <div>
                    <span className="text-gray-400 block mb-1">Customer Name</span>
                    <span className="font-semibold text-gray-800">{paymentDetails.customerDetails.name}</span>
                  </div>
                  
                  <div>
                    <span className="text-gray-400 block mb-1">Customer Email</span>
                    <span className="font-semibold text-gray-800">{paymentDetails.customerDetails.email}</span>
                  </div>

                  <div>
                    <span className="text-gray-400 block mb-1">Invoice / Reference</span>
                    <span className="font-semibold text-[#004093]">{paymentDetails.invoiceRef}</span>
                  </div>

                  <div>
                    <span className="text-gray-400 block mb-1">Transaction ID</span>
                    <span className="font-mono text-xs text-gray-600 block truncate" title={paymentDetails.transactionId}>
                      {paymentDetails.transactionId}
                    </span>
                  </div>

                  {paymentDetails.description && (
                    <div className="md:col-span-2">
                      <span className="text-gray-400 block mb-1">Payment Purpose</span>
                      <span className="font-semibold text-gray-700">{paymentDetails.description}</span>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between p-6 bg-[#004093]/5 rounded-2xl border border-[#004093]/10">
                  <div>
                    <span className="text-[#004093]/70 font-semibold block text-sm">Total Paid</span>
                    <span className="text-xs text-gray-500">Includes all processing fees</span>
                  </div>
                  <div className="text-right">
                    <span className="text-3xl font-black text-[#004093]">
                      ${paymentDetails.amountTotal.toFixed(2)}
                    </span>
                    <span className="text-xs font-bold text-gray-400 block">{paymentDetails.currency}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-100 print:hidden justify-center">
                <button
                  onClick={handlePrint}
                  className="flex items-center justify-center gap-2 border border-gray-300 hover:border-gray-400 bg-white hover:bg-gray-50 text-gray-700 px-6 py-3.5 rounded-xl font-bold transition-all text-sm shadow-sm"
                >
                  <Printer size={16} /> Print Receipt
                </button>
                <Link
                  to="/"
                  className="flex items-center justify-center gap-2 bg-[#004093] hover:bg-[#003070] text-white px-8 py-3.5 rounded-xl font-bold transition-all text-sm shadow-lg shadow-blue-100"
                >
                  Go To Home Page
                </Link>
              </div>
            </motion.div>
          )}

          {/* 3. SUCCESS STATE ERROR */}
          {status === "success" && !isVerifying && verificationError && (
            <motion.div
              key="verification-error"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="rounded-3xl bg-white p-12 text-center shadow-xl border border-red-100 flex flex-col items-center justify-center"
            >
              <div className="h-16 w-16 rounded-full bg-red-50 flex items-center justify-center mb-6">
                <AlertTriangle className="h-10 w-10 text-red-500" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Verification Pending</h2>
              <p className="text-gray-500 mt-2 max-w-md">
                {verificationError}
              </p>
              <div className="flex gap-4 mt-8">
                <button 
                  onClick={() => window.location.reload()} 
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold px-6 py-3.5 rounded-xl text-sm transition"
                >
                  Retry Verification
                </button>
                <Link 
                  to="/payment" 
                  className="bg-[#004093] hover:bg-[#003070] text-white font-bold px-6 py-3.5 rounded-xl text-sm transition shadow-md"
                >
                  Back to Payment
                </Link>
              </div>
            </motion.div>
          )}

          {/* 4. CANCEL STATE */}
          {status === "cancel" && (
            <motion.div
              key="cancel"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="rounded-3xl bg-white p-8 md:p-12 text-center shadow-xl border border-amber-100 flex flex-col items-center justify-center"
            >
              <div className="h-16 w-16 rounded-full bg-amber-50 flex items-center justify-center mb-6">
                <AlertTriangle className="h-10 w-10 text-amber-500" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Payment Canceled</h2>
              <p className="text-gray-500 mt-3 max-w-md">
                Your transaction has been canceled. No funds have been deducted from your account. If you experienced an issue, feel free to try again.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full max-w-xs sm:max-w-none justify-center">
                <Link
                  to="/payment"
                  className="flex items-center justify-center gap-2 bg-[#FE9900] hover:bg-[#e88a00] text-black px-6 py-3.5 rounded-xl font-bold transition text-sm shadow-md"
                >
                  <ArrowLeft size={16} /> Return to Payment Form
                </Link>
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 border border-gray-300 hover:border-gray-400 bg-white hover:bg-gray-50 text-gray-700 px-6 py-3.5 rounded-xl font-bold transition text-sm"
                >
                  Contact Support
                </Link>
              </div>
            </motion.div>
          )}

          {/* 5. DEFAULT STATE: FORM */}
          {!status && (
            <motion.div
              key="payment-form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="grid gap-8 lg:grid-cols-5"
            >
              {/* Left Column: Form */}
              <div className="relative overflow-hidden rounded-3xl bg-[#004093] p-6 md:p-8 shadow-2xl border border-blue-900/50 lg:col-span-3">
                <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#FE9900]/15 blur-[80px]" />
                
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute right-8 top-8 text-white/5 pointer-events-none"
                >
                  <Sparkles size={80} />
                </motion.div>

                <div className="relative z-10 mb-8">
                  <h2 className="text-2xl font-serif font-bold text-white flex items-center gap-2.5">
                    <CreditCard className="text-[#FE9900] h-6 w-6" /> Payment Details
                  </h2>
                  <p className="mt-2 text-white/70 text-sm">
                    Provide invoice particulars to redirect to secure card entry.
                  </p>
                </div>

                <form className="relative z-10 space-y-5" onSubmit={handleSubmit}>
                  
                  {/* Name Input */}
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      required
                      value={formValues.name}
                      onFocus={() => handleFocus("name")}
                      onBlur={() => handleBlur("name")}
                      onChange={handleChange}
                      className={`h-14 w-full rounded-xl border bg-white px-5 pt-5 pb-1 font-semibold text-[#004093] outline-hidden transition-all duration-200 ${
                        focusedFields.name ? "border-[#FE9900] ring-2 ring-[#FE9900]/30" : "border-white/10"
                      }`}
                    />
                    <span
                      className={`absolute left-5 transition-all duration-200 pointer-events-none ${
                        focusedFields.name || formValues.name
                          ? "top-1.5 text-[10px] font-bold uppercase tracking-wider text-gray-400"
                          : "top-1/2 -translate-y-1/2 text-sm text-gray-500 font-medium"
                      }`}
                    >
                      Customer Name
                    </span>
                  </div>

                  {/* Email Input */}
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      required
                      value={formValues.email}
                      onFocus={() => handleFocus("email")}
                      onBlur={() => handleBlur("email")}
                      onChange={handleChange}
                      className={`h-14 w-full rounded-xl border bg-white px-5 pt-5 pb-1 font-semibold text-[#004093] outline-hidden transition-all duration-200 ${
                        focusedFields.email ? "border-[#FE9900] ring-2 ring-[#FE9900]/30" : "border-white/10"
                      }`}
                    />
                    <span
                      className={`absolute left-5 transition-all duration-200 pointer-events-none ${
                        focusedFields.email || formValues.email
                          ? "top-1.5 text-[10px] font-bold uppercase tracking-wider text-gray-400"
                          : "top-1/2 -translate-y-1/2 text-sm text-gray-500 font-medium"
                      }`}
                    >
                      Customer Email
                    </span>
                  </div>

                  {/* Invoice / Reference */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="relative">
                      <input
                        type="text"
                        name="invoiceRef"
                        required
                        placeholder={focusedFields.invoiceRef ? "e.g. INV-1234" : ""}
                        value={formValues.invoiceRef}
                        onFocus={() => handleFocus("invoiceRef")}
                        onBlur={() => handleBlur("invoiceRef")}
                        onChange={handleChange}
                        className={`h-14 w-full rounded-xl border bg-white px-5 pt-5 pb-1 font-semibold text-[#004093] outline-hidden transition-all duration-200 ${
                          focusedFields.invoiceRef ? "border-[#FE9900] ring-2 ring-[#FE9900]/30" : "border-white/10"
                        }`}
                      />
                      <span
                        className={`absolute left-5 transition-all duration-200 pointer-events-none ${
                          focusedFields.invoiceRef || formValues.invoiceRef
                            ? "top-1.5 text-[10px] font-bold uppercase tracking-wider text-gray-400"
                            : "top-1/2 -translate-y-1/2 text-sm text-gray-500 font-medium"
                        }`}
                      >
                        Invoice / Reference
                      </span>
                    </div>

                    {/* Amount Input */}
                    <div className="relative">
                      <input
                        type="number"
                        name="amount"
                        required
                        step="0.01"
                        min="1"
                        placeholder={focusedFields.amount ? "0.00" : ""}
                        value={formValues.amount}
                        onFocus={() => handleFocus("amount")}
                        onBlur={() => handleBlur("amount")}
                        onChange={handleChange}
                        className={`h-14 w-full rounded-xl border bg-white pr-5 pt-5 pb-1 font-semibold text-[#004093] outline-hidden transition-all duration-200 ${
                          focusedFields.amount || formValues.amount ? "pl-10" : "pl-5"
                        } ${
                          focusedFields.amount ? "border-[#FE9900] ring-2 ring-[#FE9900]/30" : "border-white/10"
                        }`}
                      />
                      {(focusedFields.amount || formValues.amount) && (
                        <span className="absolute left-5 top-1/2 -translate-y-1/2 text-sm font-bold text-gray-500 mt-2">
                          $
                        </span>
                      )}
                      <span
                        className={`absolute left-5 transition-all duration-200 pointer-events-none ${
                          focusedFields.amount || formValues.amount
                            ? "top-1.5 text-[10px] font-bold uppercase tracking-wider text-gray-400"
                            : "top-1/2 -translate-y-1/2 text-sm text-gray-500 font-medium"
                        }`}
                      >
                        Amount (AUD)
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="relative">
                    <textarea
                      name="description"
                      rows={3}
                      value={formValues.description}
                      onFocus={() => handleFocus("description")}
                      onBlur={() => handleBlur("description")}
                      onChange={handleChange}
                      className={`w-full rounded-xl border bg-white pt-6 pb-2 px-5 font-semibold text-[#004093] outline-hidden transition-all duration-200 resize-none ${
                        focusedFields.description ? "border-[#FE9900] ring-2 ring-[#FE9900]/30" : "border-white/10"
                      }`}
                    />
                    <span
                      className={`absolute left-5 transition-all duration-200 pointer-events-none ${
                        focusedFields.description || formValues.description
                          ? "top-1.5 text-[10px] font-bold uppercase tracking-wider text-gray-400"
                          : "top-4 text-sm text-gray-500 font-medium"
                      }`}
                    >
                      Payment Description / Notes
                    </span>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.99 }}
                    className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#FE9900] px-8 py-4.5 text-sm font-black uppercase tracking-[0.2em] text-black transition-all duration-300 hover:bg-white disabled:opacity-75 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <RefreshCw className="animate-spin h-4 w-4" /> Preparing Checkout...
                      </>
                    ) : (
                      <>
                        Proceed to Payment <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                      </>
                    )}
                  </motion.button>
                </form>

                {/* Footer security badge */}
                <div className="mt-6 flex items-center justify-center gap-2 border-t border-white/5 pt-4 text-xs text-white/50 font-semibold tracking-wider uppercase">
                  <ShieldCheck size={14} className="text-[#FE9900]" /> 256-bit SSL Secure Card Checkout
                </div>
              </div>

              {/* Right Column: Portal Info & Content */}
              <div className="flex flex-col justify-between space-y-6 lg:col-span-2">
                <div className="rounded-3xl bg-white border border-gray-100 p-6 md:p-8 shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 font-serif">Payment Information</h3>
                  <div className="space-y-4 text-sm leading-relaxed text-gray-600">
                    <p>
                      Welcome to the **Aussie Sun Solar** secure online checkout. This portal allows you to easily process credit or debit card payments for:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-[#004093] font-semibold">
                      <li>Project Deposits</li>
                      <li>Final Solar Installation Invoices</li>
                      <li>Battery Storage Solutions</li>
                      <li>Commercial Project milestones</li>
                    </ul>
                    <p className="text-xs text-gray-500">
                      We accept Visa, Mastercard, and American Express. Processing is securely completed via Stripe, ensuring your bank card data is encrypted and never stored on our servers.
                    </p>
                  </div>
                </div>

                <div className="rounded-3xl bg-[#FE9900]/10 border border-[#FE9900]/20 p-6 md:p-8">
                  <h4 className="font-bold text-[#004093] text-base mb-2">Need Payment Assistance?</h4>
                  <p className="text-sm text-gray-700 leading-relaxed mb-4">
                    If you have questions about your invoice, want to pay via direct bank transfer, or need support with your online payment, please contact our accounts division.
                  </p>
                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Accounts Support Email</span>
                    <a href="mailto:info@aussiesunsolar.com.au" className="font-black text-gray-900 text-[15px] hover:text-[#004093] transition">
                      info@aussiesunsolar.com.au
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </main>
  );
};

export default PaymentPage;
