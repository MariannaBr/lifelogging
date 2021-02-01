
import Header from "../components/Header"
import {
    useAuthUser,
    withAuthUser,
    withAuthUserTokenSSR,
  } from 'next-firebase-auth'

function HomePage() {

    const AuthUser = useAuthUser()

    return (
        <div className="bg-gray-900 h-screen">
            <Header email={AuthUser.email} signOut={AuthUser.signOut} />
            <div className="my-32 max-w-7xl mx-auto px-4 sm:px-6 flex justify-start">
                <div className="">
                    <div className="block"><span className="text-9xl leading-none font-serif font-extrabold gradient-text">LIFELOGGING</span></div>
                    <div className="flex justify-end"><span className="gradient-text text-4xl leading-none font-serif font-semibold">use data to understand your body</span></div>
                </div>
            </div>
        </div>
    )
}
export const getServerSideProps = withAuthUserTokenSSR()()

export default withAuthUser()(HomePage)