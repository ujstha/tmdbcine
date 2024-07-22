import { Icon } from "@iconify/react";

export const CustomIcon = ({ icon, ...props }) => {
  return <Icon icon={icon} height={16} {...props} />;
};
