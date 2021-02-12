import Header from "../components/Header"
import Statistics from "../components/Statistics"
import {
    useAuthUser,
    withAuthUser,
    withAuthUserTokenSSR,
    AuthAction,
  } from 'next-firebase-auth'

  function userStatistics() {

    const AuthUser = useAuthUser()

    return (
        <div className="bg-gray-900 relative h-full">
            <Header email={AuthUser.email} signOut={AuthUser.signOut} />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 bg-gray-900">
            <Statistics />
            </div>
        </div>
    )

  }

export const getServerSideProps = withAuthUserTokenSSR()()
export default withAuthUser({whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN})(userStatistics)