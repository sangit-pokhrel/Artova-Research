export default function Footer() {
  return (
    <footer className="border-t border-[#0B1F3A]/10 bg-[#0B1F3A] text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-semibold">Artova Research</p>

            <p className="mt-1 text-sm text-white/60">
              Research support and academic guidance.
            </p>
          </div>

          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} Artova Research. All rights reserved.{" "}
            <span className="mx-1">|</span>{" "}
            Powered by{" "}
            <a
              href="https://artovasolutions.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-white transition hover:text-[#D9A900]"
            >
              Artova Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}