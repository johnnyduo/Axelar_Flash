import Link from "next/dist/client/link";
import { FC, useState } from "react";
import UseClickOutside from "../../components/UseClickOutside";

const NotificationToggle: FC = () => {
  const [toggle, setToggle] = useState(false);
  let domNode = UseClickOutside(() => {
    setToggle(false);
  });
  return (
    <div className="notification dropdown" ref={domNode}>
      <div
        className="notify-bell"
        data-toggle="dropdown"
        onClick={() => setToggle(!toggle)}
      >
        <span>
          <i className="bi bi-bell"></i>
        </span>
      </div>
      <div
        className={`dropdown-menu dropdown-menu-right notification-list ${
          toggle ? "show" : ""
        }`}
      >
        <h4>Announcements</h4>
        <div className="lists">
          <a href="#" className="">
            <div className="d-flex align-items-center">
              <span className="me-3 icon success">
                <i className="bi bi-check"></i>
              </span>
              <div>
                <p>Account created successfully</p>
                <span>2020-11-04 12:00:23</span>
              </div>
            </div>
          </a>
          <a href="#" className="">
            <div className="d-flex align-items-center">
              <span className="me-3 icon fail">
                <i className="bi bi-x"></i>
              </span>
              <div>
                <p>2FA verification failed</p>
                <span>2020-11-04 12:00:23</span>
              </div>
            </div>
          </a>
          <a href="#" className="">
            <div className="d-flex align-items-center">
              <span className="me-3 icon success">
                <i className="bi bi-check"></i>
              </span>
              <div>
                <p>Device confirmation completed</p>
                <span>2020-11-04 12:00:23</span>
              </div>
            </div>
          </a>
          <a href="#" className="">
            <div className="d-flex align-items-center">
              <span className="me-3 icon pending">
                <i className="bi bi-exclamation-triangle"></i>
              </span>
              <div>
                <p>Phone verification pending</p>
                <span>2020-11-04 12:00:23</span>
              </div>
            </div>
          </a>

          <Link href="/./settings-activity">
            <a>
              More <i className="icofont-simple-right"></i>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotificationToggle;
