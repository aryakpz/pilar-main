
import { MainBody, Header, Greetings } from "../components";

export const Portfolio: React.FC = () => {
    return (
        <div >
            <Header />
            <main className="w-full h-full overflow-y-auto pt-10 bg-gray-100">
                <div className="px-12 pb-5 sm:px-24 md:px-28 lg:px-36">
                    <Greetings />
                    <MainBody/>
                </div>
            </main>
        </div>
    )
}

