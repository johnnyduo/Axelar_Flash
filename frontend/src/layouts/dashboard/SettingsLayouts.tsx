import Link from "next/dist/client/link";
import { FC, useEffect } from "react";
import { settingMenuActive } from "../../utils/utils";
import DashboardLayout from "./DashboardLayout";

const SettingsLayouts: FC<{ name?: string }> = ({ children, name }) => {
  useEffect(() => {
    settingMenuActive(name);
  }, []);
  return (
    <DashboardLayout>
      <div className="content-body">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12 col-xl-12">
              <div className="page-title">
                <h4>{name}</h4>
              </div>
              <div className="card h-unset">
                <div className="card-header">
                  <div className="settings-menu" id="settings_menus______">
                    <Link href="/settings-profile">Profile</Link>
                    <Link href="/settings-application">Application</Link>
                    <Link href="/settings-security">Security</Link>
                    <Link href="/settings-activity">Activity</Link>
                    <Link href="/settings-privacy">Privacy</Link>
                    <Link href="/settings-payment-method">Payment Method</Link>
                    <Link href="/settings-api">API</Link>
                  </div>
                </div>
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SettingsLayouts;
