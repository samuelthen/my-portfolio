export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-[#f7f7f5] py-8 text-slate-500">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-5 text-xs sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>© {new Date().getFullYear()} Samuel Then</p>
        <a href="mailto:samuel.then@u.nus.edu" className="hover:text-slate-950">samuel.then@u.nus.edu</a>
      </div>
    </footer>
  )
}
