"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  FaGoogle,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import CountUp from "react-countup";

export default function AuthPage()  {

  const [mode, setMode] = useState<
    "login" | "register"
  >("login");

  const [showPassword, setShowPassword] =
    useState(false);

  return (
    <main className="relative flex min-h-screen overflow-hidden bg-black text-white" dir="ltl">

      {/* Aurora */}
      <div className="absolute inset-0 -z-10">

        <div className="floating absolute left-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-3xl"></div>

        <div className="floating-slow absolute right-[-10%] top-[20%] h-[500px] w-[500px] rounded-full bg-purple-500/20 blur-3xl"></div>

        <div className="floating-fast absolute bottom-[-10%] left-[30%] h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-3xl"></div>

        {/* Grid */}
        <div dir="ltl"
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

      </div>

      {/* LEFT SIDE */}
      <section className="relative flex w-full items-center justify-center px-6 py-12 lg:w-1/2" dir="ltl">

        <motion.div dir="ltl"
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl"
        >

          {/* Logo */}
          <div className="mb-8 text-center">

            <h1 className="text-4xl font-black tracking-tight">
              EduVerse
            </h1>

            <p className="mt-3 text-gray-400">
              {mode === "login"
                ? "ورود به حساب کاربری"
                : "ساخت حساب جدید"}
            </p>

          </div>

          {/* Tabs */}
          <div
            className="relative mb-8 flex rounded-2xl bg-white/5 p-1"
            dir="ltr"
          >

            {/* Active Tab */}
            <motion.div
              layoutId="tab"
              className="absolute left-1 top-1 h-[calc(100%-8px)] w-[calc(50%-4px)] rounded-xl bg-white"
              animate={{
                x: mode === "login" ? 0 : "100%",
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
            />

            {/* Login */}
            <button
              onClick={() => setMode("login")}
              className={`relative z-10 flex-1 rounded-xl py-3 text-sm font-medium transition ${
                mode === "login"
                  ? "text-black"
                  : "text-gray-400"
              }`}
            >
              ورود
            </button>

            {/* Register */}
            <button
              onClick={() => setMode("register")}
              className={`relative z-10 flex-1 rounded-xl py-3 text-sm font-medium transition ${
                mode === "register"
                  ? "text-black"
                  : "text-gray-400"
              }`}
            >
              ثبت‌نام
            </button>

          </div>



          {/* Google */}
          <button className="flex w-full items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 py-4 transition hover:bg-white/10">

            <FaGoogle />

            ادامه با گوگل

          </button>

          {/* Divider */}
          <div className="my-6 flex items-center gap-3">

            <div className="h-px flex-1 bg-white/10"></div>

            <span className="text-sm text-gray-500">
              یا
            </span>

            <div className="h-px flex-1 bg-white/10"></div>

          </div>

          {/* Forms */}
          <AnimatePresence mode="wait">

            {mode === "login" ? (

              <motion.form
                key="login"
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: 20,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="space-y-5"
              >

                {/* Email */}
                <div>

                  <label className="mb-2 block text-sm text-gray-300">
                    ایمیل
                  </label>

                  <input
                    type="email"
                    placeholder="example@gmail.com"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 outline-none transition focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(34,211,238,0.3)]"
                  />

                </div>

                {/* Password */}
                <div>

                  <label className="mb-2 block text-sm text-gray-300">
                    رمز عبور
                  </label>

                  <div className="relative">

                    <input
                      type={
                        showPassword
                          ? "text"
                          : "password"
                      }
                      placeholder="********"
                      className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 pr-12 outline-none transition focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(34,211,238,0.3)]"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword(
                          !showPassword
                        )
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                    >

                      {showPassword ? (
                        <FaEyeSlash />
                      ) : (
                        <FaEye />
                      )}

                    </button>

                  </div>

                </div>

                <button className="w-full rounded-2xl bg-white py-4 font-semibold text-black transition duration-300 hover:scale-[1.02] hover:shadow-2xl">
                  ورود
                </button>

              </motion.form>

            ) : (

              <motion.form
                key="register"
                initial={{
                  opacity: 0,
                  x: 20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: -20,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="space-y-5"
              >

                {/* Full Name */}
                <div>

                  <label className="mb-2 block text-sm text-gray-300">
                    نام کامل
                  </label>

                  <input
                    type="text"
                    placeholder="علی محمدی"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 outline-none transition focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(34,211,238,0.3)]"
                  />

                </div>

                {/* Email */}
                <div>

                  <label className="mb-2 block text-sm text-gray-300">
                    ایمیل
                  </label>

                  <input
                    type="email"
                    placeholder="example@gmail.com"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 outline-none transition focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(34,211,238,0.3)]"/>

                </div>

                {/* Password */}
                <div>

                  <label className="mb-2 block text-sm text-gray-300">
                    رمز عبور
                  </label>

                  <div className="relative">

                    <input
                      type={
                        showPassword
                          ? "text"
                          : "password"
                      }
                      placeholder="********"
                      className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 pr-12 outline-none transition focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(34,211,238,0.3)]"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword(
                          !showPassword
                        )
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                    >

                      {showPassword ? (
                        <FaEyeSlash />
                      ) : (
                        <FaEye />
                      )}

                    </button>

                  </div>

                </div>

                <button className="w-full rounded-2xl bg-white py-4 font-semibold text-black transition duration-300 hover:scale-[1.02] hover:shadow-2xl">
                  ساخت حساب
                </button>

              </motion.form>

            )}

          </AnimatePresence>

        </motion.div>

      </section>

      {/* RIGHT SIDE */}
      <section className="relative hidden lg:flex lg:w-1/2 flex-col justify-center px-16">

        <motion.div
          initial={{
            opacity: 0,
            x: 40,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
          }}
        >

          {/* Badge */}
          <div className="mb-6 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-sm text-cyan-300 backdrop-blur-xl">
            نسل جدید آموزش آنلاین
          </div>

          {/* Title */}
          <h2 className="max-w-xl text-6xl font-black leading-[1.1] tracking-tight">

            آینده یادگیری
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              {" "}
              اینجاست
            </span>

          </h2>

          {/* Description */}
          <p className="mt-8 max-w-lg text-lg leading-8 text-gray-400">

            آموزش حرفه‌ای، آزمون هوشمند و تحلیل عملکرد
            در یک پلتفرم مدرن برای دانش‌آموزهای نسل جدید.

          </p>

          {/* Stats */}
          <div className="mt-14 grid max-w-lg grid-cols-3 gap-6">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl">

              <h3 className="text-4xl font-black text-cyan-400">

                <CountUp
                  end={12000}
                  duration={3}
                />
                +

              </h3>

              <p className="mt-2 text-sm text-gray-400">
                دانش‌آموز
              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl">

              <h3 className="text-4xl font-black text-purple-400">

                <CountUp
                  end={350}
                  duration={3}
                />
                +

              </h3>

              <p className="mt-2 text-sm text-gray-400">
                دوره
              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl">

              <h3 className="text-4xl font-black text-blue-400">

                <CountUp
                  end={98}
                  duration={3}
                />
                %

              </h3>

              <p className="mt-2 text-sm text-gray-400">رضایت
              </p>

            </div>

          </div>

        </motion.div>

      </section>

    </main>
  );
}