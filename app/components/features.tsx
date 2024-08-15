export default function Features() {
  return (
    <div className="py-20 ">
      <div className="text-center ">
        <h1 className="text-2xl">Features</h1>
      </div>
      <div>
        <div className="flex justify-center">
          <div className=" pt-5 text-center">
            <h3 className="text-4xl font-semibold">
              Grow your brand & improve workflows
            </h3>
            <p className="my-10">
              Get branding & tracking opportunities anytime you share a link
              online.
            </p>
            <div className="w-[700px] flex justify-center gap-6 flex-wrap">
              <button className="px-2 py-2 bg-blue-900 text-slate-100 rounded-2xl">
                Short Link
              </button>

              <button className="px-2 py-2 bg-blue-900 text-slate-100 rounded-2xl">
                Link Management
              </button>

              <button className="px-2 py-2 bg-blue-900 text-slate-100 rounded-2xl">
                Link Tracking
              </button>

              <button className="px-2 py-2 bg-blue-900 text-slate-100 rounded-2xl">
                Branded Links
              </button>

              <button className="px-2 py-2 bg-blue-900 text-slate-100 rounded-2xl">
                Custom Domains
              </button>

              <button className="px-2 py-2 bg-blue-900 text-slate-100 rounded-2xl">
                Click Tracking
              </button>

              <button className="px-2 py-2 bg-blue-900 text-slate-100 rounded-2xl">
                Link in Bio
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
