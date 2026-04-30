import Image from "next/image";

export default function MindSection() {
  return (
    <section id="about" className="w-full bg-white py-10 sm:py-14 scroll-mt-24">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-8 px-5 sm:px-8 md:flex-row md:items-center md:justify-center md:gap-20 lg:px-12">
        <div className="w-full max-w-xl md:w-104 md:max-w-none lg:w-md">
          <Image
            src="/worker.png"
            alt="Thinker immunizer cap visual"
            width={900}
            height={620}
            className="h-auto w-full rounded-[1.75rem]"
            priority={false}
          />
        </div>

        <div className="w-full max-w-xl md:w-104 md:max-w-none lg:w-xl">
          <h2 className="max-w-3xl text-balance text-3xl leading-[1.05] font-extrabold uppercase tracking-tight text-neutral-900 sm:text-[2.55rem]">
          1 material for all products (non-edible)
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-neutral-700 md:text-[1.05rem]">
          One Material is a revolutionary, all-in-one solution designed to adapt across multiple industries and everyday applications. From textiles, furniture, and home essentials to construction materials, tools, electronics, and even vehicles, this single material delivers unmatched versatility and efficiency. Engineered for durability, adaptability, and performance, it simplifies production while opening new possibilities for innovation—making it a universal building block for modern living.
          </p>
        </div>
      </div>
    </section>
  );
}