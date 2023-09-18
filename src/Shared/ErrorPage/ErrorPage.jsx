
import { Link, useRouteError } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import errorImg from "../../assets/other/error page.png"
import { BiSolidHomeHeart } from 'react-icons/bi';

const ErrorPage = () => {

  const { error, status } = useRouteError()

  return (
    <section className='flex items-center h-screen p-16 bg-[#ffd1ca] text-gray-900'>

      {/* Title */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>Soulmate | Error Page</title>
      </Helmet>

      <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
        <img src={errorImg} className='w-80' alt="" />
        <div className='max-w-md text-center'>
          <h2 className='mb-8 font-extrabold text-9xl text-red-600'>
            <span className='sr-only'>Error</span> {status || 404}
          </h2>
          <p className='text-lg font-semibold md:text-lg mb-8'>Go BACK<br />
            {error?.message}
          </p>
          <Link
            to="/"
            className="px-2 py-3 font-semibold rounded bg-[#fa604c] text-white flex items-center justify-center"
          >
            <BiSolidHomeHeart className="mr-2 text-xl" /> Back to homepage
          </Link>

        </div>
      </div>
    </section>
  );
};

export default ErrorPage;