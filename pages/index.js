
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
            <div className=" mx-auto md:mx-10">
                <Header email={AuthUser.email} signOut={AuthUser.signOut} />
                <div className="flex my-40 justify-center">
                    <div className="">
                        <div className="flex"><span className=" text-5xl sm:text-7xl lg:text-8xl xl:text-9xl leading-none font-serif font-extrabold gradient-text">LIFELOGGING</span></div>
                        <div className="flex justify-end"><span className="gradient-text text-base sm:text-2xl lg:text-3xl xl:text-4xl leading-2 font-serif font-semibold">use data to understand your body</span></div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export const getServerSideProps = withAuthUserTokenSSR()()

export default withAuthUser()(HomePage)