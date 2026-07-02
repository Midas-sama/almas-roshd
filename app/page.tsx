"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaChartLine, FaVideo, FaBookOpen, FaBrain, FaUsers, FaLaptopCode, } from "react-icons/fa";
import Navbar from "./components/Navbar";
import ParticleBackground from "./components/ParticleBackground";

export default function HomePage() {
  return (

    <main className="relative min-h-screen overflow-hidden text-white">
    <Navbar />
      {/* Aurora Background */}
      <div className="absolute inset-0 -z-10">

        <div className="absolute left-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-3xl"></div>

        <div className="absolute slow-[-10%] top-[20%] h-[400px] w-[400px] rounded-full bg-purple-500/20 blur-3xl"></div>

        <div className="absolute fast-[-10%] left-[30%] h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-3xl"></div>

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center px-6 py-36 text-center">

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="mb-6 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-sm text-cyan-300 backdrop-blur-xl"
        >
          آینده آموزش از اینجا شروع میشه
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="max-w-5xl text-6xl font-black leading-[1.1] tracking-tight md:text-7xl"
        >
          آموزش آنلاین
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            {" "}
            نسل جدید
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 max-w-2xl text-lg leading-8 text-gray-400"
        >
          یادگیری حرفه‌ای، آزمون هوشمند، تحلیل عملکرد و تجربه‌ای
          متفاوت برای دانش‌آموزهای نسل جدید.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-5"
        >
          <button className="rounded-2xl bg-white px-8 py-4 font-semibold text-black transition duration-300 hover:scale-105 hover:shadow-2xl">
            شروع یادگیری
          </button>

          <button className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 backdrop-blur-xl transition hover:bg-white/10">
            مشاهده دوره‌ها
          </button>
        </motion.div>

      </section>

      

      {/* FEATURES SECTION */}

      <section className="relative px-6 py-32">

        {/* Background Glow */}
        <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl"></div>

        {/* Heading */}
        <div className="relative mx-auto max-w-3xl text-center">

          <div className="mb-4 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-sm text-cyan-300 backdrop-blur-xl">
            امکانات پلتفرم
          </div>

          <h2 className="text-5xl font-black leading-tight tracking-tight text-white">

            همه چیز برای
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              {" "}
              یادگیری حرفه‌ای
            </span>

          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">

            یک پلتفرم مدرن برای آموزش، آزمون، تحلیل عملکرد
            و مدیریت کامل مسیر یادگیری دانش‌آموزها.

          </p>

        </div>

        {/* Cards */}
        <div className="relative mx-auto mt-20 grid max-w-7xl gap-8 md:grid-cols-2 xl:grid-cols-3">

          {/* Card */}
          <div className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl transition duration-500 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-white/10">

            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-400/10 text-2xl text-cyan-400">

              <FaChartLine />

            </div>

            <h3 className="text-2xl font-bold text-white">
              تحلیل پیشرفت
            </h3>

            <p className="mt-4 leading-7 text-gray-400">

              مشاهده روند یادگیری، عملکرد آزمون‌ها
              و میزان پیشرفت دانش‌آموزها.

            </p>

          </div>

          {/* Card */}
          <div className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl transition duration-500 hover:-translate-y-2 hover:border-purple-400/30 hover:bg-white/10">

            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-400/10 text-2xl text-purple-400">

              <FaVideo />

            </div>

            <h3 className="text-2xl font-bold text-white">
              ویدیوهای آموزشی
            </h3>

            <p className="mt-4 leading-7 text-gray-400">

              دسترسی آسان به دوره‌ها و ویدیوهای آموزشی
              با کیفیت بالا و طراحی مدرن.

            </p>

          </div>

          {/* Card */}
          <div className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl transition duration-500 hover:-translate-y-2 hover:border-blue-400/30 hover:bg-white/10">

            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-400/10 text-2xl text-blue-400">

              <FaBookOpen />

            </div>

            <h3 className="text-2xl font-bold text-white">
              آزمون آنلاین
            </h3>

            <p className="mt-4 leading-7 text-gray-400">

              برگزاری آزمون‌های آنلاین با تحلیل نتایج
              و بررسی نقاط ضعف و قوت.

            </p>

          </div>

          {/* Card */}
          <div className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl transition duration-500 hover:-translate-y-2 hover:border-pink-400/30 hover:bg-white/10">

            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-pink-400/10 text-2xl text-pink-400">

              <FaBrain />

            </div>

            <h3 className="text-2xl font-bold text-white">
              یادگیری هوشمند
            </h3>

            <p className="mt-4 leading-7 text-gray-400">

              طراحی مسیر آموزشی برای یادگیری سریع‌تر
              و هدفمندتر دانش‌آموزها.

            </p>

          </div>

          {/* Card */}
          <div className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl transition duration-500 hover:-translate-y-2 hover:border-green-400/30 hover:bg-white/10">

            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-400/10 text-2xl text-green-400">

              <FaUsers />

            </div>

            <h3 className="text-2xl font-bold text-white">
              ارتباط با مدرس
            </h3>

            <p className="mt-4 leading-7 text-gray-400">

              تعامل مستقیم دانش‌آموزها با مدرس‌ها
              و دریافت پشتیبانی آموزشی.

            </p>

          </div>

          {/* Card */}
          <div className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl transition duration-500 hover:-translate-y-2 hover:border-orange-400/30 hover:bg-white/10">

            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-400/10 text-2xl text-orange-400">

              <FaLaptopCode />

            </div>

            <h3 className="text-2xl font-bold text-white">
              پلتفرم مدرن
            </h3>

            <p className="mt-4 leading-7 text-gray-400">

              طراحی شده با تکنولوژی‌های مدرن برای
              سرعت، امنیت و تجربه کاربری بهتر.

            </p>

          </div>

        </div>

      </section>


      {/* Statistics */}
      <section className="mx-auto max-w-7xl px-6 pb-24">

        <div className="grid gap-6 md:grid-cols-4">

          {/* Item */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-2xl">

            <h3 className="text-5xl font-black text-cyan-400">
              <CountUp end={12000} duration={3} separator="," />
              +
            </h3>

            <p className="mt-4 text-gray-400">
              دانش‌آموز فعال
            </p>

          </div>

          {/* Item */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-2xl">

            <h3 className="text-5xl font-black text-purple-400">
              <CountUp end={350} duration={3} />
              +
            </h3>

            <p className="mt-4 text-gray-400">
              دوره تخصصی
            </p>

          </div>

          {/* Item */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-2xl">

            <h3 className="text-5xl font-black text-blue-400">
              <CountUp end={98} duration={3} />
              %
            </h3>

            <p className="mt-4 text-gray-400">
              رضایت کاربران
            </p>

          </div>

          {/* Item */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-2xl">

            <h3 className="text-5xl font-black text-pink-400">
              <CountUp end={85} duration={3} />
              نفر
            </h3>

            <p className="mt-4 text-gray-400">
              مدرس حرفه‌ای
            </p>

          </div>

        </div>

      </section>
      {/* Premium Cards */}
      <section className="mx-auto grid max-w-7xl gap-8 px-6 pb-32 md:grid-cols-3">

        {[1, 2, 3].map((item) => (
          <motion.div
            key={item}
            whileHover={{
              y: -10,
              scale: 1.02,
            }}
            transition={{ type: "spring", stiffness: 200 }}
            className="floating group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 transition duration-500 group-hover:opacity-100"></div>

            <div className="relative z-10">

              <div className="mb-6 h-52 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20"></div>

              <h3 className="text-2xl font-bold">
                دوره حرفه‌ای کنکور
              </h3>

              <p className="mt-3 text-gray-400 leading-7">
                آموزش کامل همراه آزمون، تحلیل و برنامه‌ریزی هوشمند.
              </p>

              <button className="mt-6 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm transition hover:bg-white/10">
                مشاهده دوره
              </button>

            </div>
          </motion.div>
        ))}

      </section>

    </main>
  );
}