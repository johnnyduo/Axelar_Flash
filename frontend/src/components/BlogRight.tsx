import Link from "next/dist/client/link";
import { FC } from "react";

const BlogRight: FC = () => {
  return (
    <div className="col-xl-4 col-lg-3">
      <div className="blog-sidebar">
        <div className="widget-search">
          <form action="#" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              className="form-control"
              placeholder="Subscribe Now"
            />
            <span>
              <i className="la la-search"></i>
            </span>
          </form>
        </div>
        <div className="widget-recent-post">
          <h3 className="post-title">Recent Post</h3>
          <ul className="list-unstyled">
            <li className="media d-flex">
              <img src="/images/blog/post_1.jpg" className="me-3" alt="..." />
              <div className="media-body ms-1">
                <h5 className="mt-0 mb-1">List-based media object</h5>
                <div className="meta-info">
                  <Link href="/blog">
                    <a>
                      <i className="la la-user"></i> Admin
                    </a>
                  </Link>
                  <Link href="/blog">
                    <a>
                      <i className="la la-calendar"></i> 31 July,
                      <span id="year"></span>
                    </a>
                  </Link>
                </div>
              </div>
            </li>
            <li className="media d-flex my-4">
              <img src="/images/blog/post_2.jpg" className="me-3" alt="..." />
              <div className="media-body ms-1">
                <h5 className="mt-0 mb-1">List-based media object</h5>
                <div className="meta-info">
                  <Link href="/blog">
                    <a>
                      <i className="la la-user"></i> Admin
                    </a>
                  </Link>
                  <Link href="/blog">
                    <a>
                      <i className="la la-calendar"></i> 31 July,
                      <span id="year"></span>
                    </a>
                  </Link>
                </div>
              </div>
            </li>
            <li className="media d-flex">
              <img src="/images/blog/post_3.jpg" className="me-3" alt="..." />
              <div className="media-body ms-1">
                <h5 className="mt-0 mb-1">List-based media object</h5>
                <div className="meta-info">
                  <Link href="/blog">
                    <a>
                      <i className="la la-user"></i> Admin
                    </a>
                  </Link>
                  <Link href="/blog">
                    <a>
                      <i className="la la-calendar"></i> 31 July,
                      <span id="year"></span>
                    </a>
                  </Link>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="widget-category">
          <h3 className="widget-title">Categories</h3>
          <ul className="list-group">
            <li
              className="
                        list-group-item
                        d-flex
                        justify-content-between
                        align-items-center
                      "
            >
              Cras justo odio
              <span className="badge badge-primary badge-pill">14</span>
            </li>
            <li
              className="
                        list-group-item
                        d-flex
                        justify-content-between
                        align-items-center
                      "
            >
              Dapibus ac facilisis in
              <span className="badge badge-primary badge-pill">2</span>
            </li>
            <li
              className="
                        list-group-item
                        d-flex
                        justify-content-between
                        align-items-center
                      "
            >
              Morbi leo risus
              <span className="badge badge-primary badge-pill">1</span>
            </li>
          </ul>
        </div>
        <div className="widget-tag">
          <h3 className="widget-title">Tags</h3>
          <div className="tag-group">
            <Link href="/blog">
              <a>Tendex</a>
            </Link>
            <Link href="/blog">
              <a>Tendex</a>
            </Link>
            <Link href="/blog">
              <a>Tendex</a>
            </Link>
            <Link href="/blog">
              <a>Tendex</a>
            </Link>
            <Link href="/blog">
              <a>Tendex</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogRight;
