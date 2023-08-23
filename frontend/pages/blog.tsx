import { NextPage } from "next";
import Link from "next/dist/client/link";
import BlogRight from "../src/components/BlogRight";
import LandingLayout from "../src/layouts/landing/LandingLayout";

const Blog: NextPage = () => {
  return (
    <LandingLayout>
      <div className="blog section-padding border-0">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-9">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="blog-grid">
                    <div className="card">
                      <img
                        className="img-fluid card-img-top"
                        src="/images/blog/1.jpg"
                        alt=""
                      />
                      <div className="card-body">
                        <Link href="/blog-details">
                          <a>
                            <h4 className="card-title">
                              Why does Litecoin need MimbleWimble?
                            </h4>
                          </a>
                        </Link>
                        <Link href="/blog-details">Read More</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="blog-grid">
                    <div className="card">
                      <img
                        className="img-fluid card-img-top"
                        src="/images/blog/2.jpg"
                        alt=""
                      />
                      <div className="card-body">
                        <Link href="/blog-details">
                          <a>
                            <h4 className="card-title">
                              How to securely store your HD wallet seeds?
                            </h4>
                          </a>
                        </Link>
                        <Link href="/blog-details">Read More</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="blog-grid">
                    <div className="card">
                      <img
                        className="img-fluid card-img-top"
                        src="/images/blog/3.jpg"
                        alt=""
                      />
                      <div className="card-body">
                        <Link href="/blog-details">
                          <a>
                            <h4 className="card-title">
                              Exclusive Interview With Xinxi Wang Of Litecoin
                            </h4>
                          </a>
                        </Link>
                        <Link href="/blog-details">Read More</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="blog-grid">
                    <div className="card">
                      <img
                        className="img-fluid card-img-top"
                        src="/images/blog/4.jpg"
                        alt=""
                      />
                      <div className="card-body">
                        <Link href="/blog-details">
                          <a>
                            <h4 className="card-title">
                              Exclusive Interview With Xinxi Wang Of Litecoin
                            </h4>
                          </a>
                        </Link>
                        <Link href="/blog-details">Read More</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <BlogRight />
          </div>
        </div>
      </div>
    </LandingLayout>
  );
};

export default Blog;
