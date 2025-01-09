
export const Header = () => (
  <div className="border-b w-full z-50">
    <nav className="border-gray-200 bg-white px-2 py-2.5 sm:px-4">
      <div className="flex flex-wrap items-center justify-between mx-auto">
        <a className="flex items-center">
          <img src="/assets/images/pilar-logo.svg" alt="pilar-left-logo" />
        </a>
        <div className="w-fit">
          <button className="flex items-center">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <img
                  className="rounded-3xl w-10 h-10"
                  src="/assets/images/pilar-nav-image.png"
                  alt="pilar-right-log"
                />
              </div>
            </div>
          </button>
        </div>
      </div>
    </nav>
  </div>
)
