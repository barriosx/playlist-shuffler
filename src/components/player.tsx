export default function Player() {
  

  return (
    <div className="bg-white border-slate-100 dark:bg-slate-800 dark:border-slate-500 border rounded-xl p-4 pb-6 sm:p-10 sm:pb-8 lg:p-6 xl:p-10 xl:pb-8 space-y-6 sm:space-y-8 lg:space-y-6 xl:space-y-8">
      <div className="flex items-center space-x-4">
          <img src="" alt="" width="88" height="88" className="flex-none rounded-lg bg-slate-100" loading="lazy" />
          <div className="min-w-0 flex-auto space-y-1 font-semibold">
          <p className="text-green-500 dark:text-green-400 text-sm leading-6">
              Playlist Name
          </p>
          <h2 className="text-slate-500 dark:text-slate-400 text-sm leading-6 truncate">
              Song Name
          </h2>
          <p className="text-slate-900 dark:text-slate-50 text-lg">
              Artist
          </p>
          </div>
      </div>
      <div className="space-y-2">
          <div className="relative">
            <div className="bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                <div className="bg-green-500 dark:bg-green-400 w-1/2 h-2" role="progressbar" aria-label="music progress"></div>
            </div>
            <div className="ring-green-500 dark:ring-green-400 ring-2 absolute left-1/2 top-1/2 w-4 h-4 -mt-2 -ml-2 flex items-center justify-center bg-white rounded-full shadow">
                <div className="w-1.5 h-1.5 bg-green-500 dark:bg-green-400 rounded-full ring-1 ring-inset ring-slate-900/5"></div>
            </div>
            </div>
            <div className="flex justify-between text-sm leading-6 font-medium tabular-nums">
            <div className="text-green-500 dark:text-slate-100">0:00</div>
            <div className="text-slate-500 dark:text-slate-400">02:50</div>
          </div>
      </div>
      <div className="flex-auto flex items-center justify-evenly">
        <div className="text-slate-500 dark:bg-slate-600 dark:text-slate-200 rounded-b-xl flex items-center">
          <button type="button" className="hidden sm:block lg:hidden xl:block" aria-label="Previous">
            <svg width="24" height="24" fill="none">
                <path d="m10 12 8-6v12l-8-6Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6 6v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
        <button type="button" className="bg-white text-slate-900 dark:bg-slate-100 dark:text-slate-700 flex-none -my-2 mx-auto w-20 h-20 rounded-full ring-1 ring-slate-900/5 shadow-md flex items-center justify-center" aria-label="Pause">
          <svg width="30" height="32" fill="currentColor">
            <rect x="6" y="4" width="4" height="24" rx="2" />
            <rect x="20" y="4" width="4" height="24" rx="2" />
          </svg>
        </button>
        <button type="button" className="hidden sm:block lg:hidden xl:block" aria-label="Next">
          <svg width="24" height="24" fill="none">
              <path d="M14 12 6 6v12l8-6Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M18 6v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>        
  )
}