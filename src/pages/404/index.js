import Link from "next/link";
import Head from "next/head";
import { Fragment } from "react";

const Page404 = () => {
  return (
    <Fragment>
      <Head>
        <title>404 ERROR - Хуудас олдсонгүй!</title>
      </Head>

      <div className="tt-offset-0 container-indent">
        <div className="tt-page404">
          <div className="tt-page404-content">
            <img
              src="/assets/images/no-placeholder/error.png"
              alt="404 not found error"
            />
            <h1 className="tt-title">Хуудас олдсонгүй.</h1>
            <p>
              Манай дэлгүүрт зөвхөн брэндийн баталгаажсан бараа зарагддаг тул та
              барааны чанарт итгэж болно..
            </p>
            <Link href="/">
              <a className="btn">Нүүр хуудас руу буцах</a>
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Page404;
