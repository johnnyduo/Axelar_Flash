import Link from "next/dist/client/link";
import { FC, useEffect } from "react";
import { dashboardMenuActive } from "../../utils/utils";

const DashboardSidebar: FC = () => {
  useEffect(() => {
    dashboardMenuActive();
  }, []);
  return (
    <div className="sidebar">
      <div className="brand-logo">
        <Link href="/">
          <a>
            <img src="/images/logo_square.svg" alt="" width="30" height="30" />
          </a>
        </Link>
      </div>
      <div className="menu" id="d_menu">
        <ul>
          <li>
            <Link href="/dashboard">
              <a>
                <span>
                  <i className="bi bi-wallet2"></i>
                </span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/invest">
              <a>
                <span>
                  <i className="bi bi-bar-chart-line"></i>
                </span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <a>
                <span>
                  <i className="bi bi-briefcase"></i>
                </span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/history">
              <a>
                <span>
                  <i className="bi bi-journal-text"></i>
                </span>
              </a>
            </Link>
          </li>
          
          {/* <li>
            <Link href="/wallet">
              <a>
                <span>
                  <i className="bi bi-wallet2"></i>
                </span>
              </a>
            </Link>
          </li> */}
          {/* <li>
            <Link href="/settings-profile">
              <a id="settings__mainMenu">
                <span>
                  <i className="bi bi-gear"></i>
                </span>
              </a>
            </Link>
          </li> */}
          <li className="logout">
            <Link href="/signin">
              <a>
                <span>
                  <i className="bi bi-power"></i>
                </span>
              </a>
            </Link>
          </li>
        </ul>

        <p className="copyright">
          &#169; <a href="#">Qkit</a>
        </p>
      </div>
    </div>
  );
};

export default DashboardSidebar;
