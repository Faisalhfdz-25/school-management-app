import DashNav from "../Partials/DashNav"
import HeadDash from "../Partials/HeadDash"

const DashLayout = ({ children }) => {
  return (
    <>
        <div className="min-h-full">
            {/* Dash Nav */}
                <DashNav />
            {/* End Dash Nav */}

        {/* Header */}
            <HeadDash />
        {/* End Header */}

        {/* Main */}
        <main>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            {children}
        </div>
        </main>
        {/* End Main */}
      </div>
    </>
  )
}

export default DashLayout