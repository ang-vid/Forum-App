export default function NotFound() {
  return (
    <div className="min-h-screen w-full bg-[#FEFDFA] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[36px_36px] flex items-center justify-center p-6">
      <div className="mx-auto w-full max-w-5xl border-3 border-[#2B2727] bg-white p-8 shadow-[4px_4px_0_#2B2727] text-center">
        <h1 className="text-6xl font-bold text-[#2B2727] mb-4">404</h1>
        <p className="text-2xl text-[#2B2727]">Page not found</p>
      </div>
    </div>
  );
}