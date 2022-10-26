import DesktopPro from "@components/profile/DesktopPro";
import { PropTypes } from "prop-types";
import MobilePro from "@components/profile/MobilePro";
import Email from "@components/profile/Email";

const Profi = ({ className, hoverStyleClass }) => {
  return (
    <div>
      <DesktopPro />
      {/* <MobilePro/> */}
      {/* <Email /> */}
    </div>
  );
};
Profi.propTypes = {
  className: PropTypes.string,
  hoverStyleClass: PropTypes.string,
};
export { Profi };
