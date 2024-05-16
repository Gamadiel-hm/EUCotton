import { ErrorSvg } from '../../../assets/svgIcons/errorSvg';
import { InfoSvg } from '../../../assets/svgIcons/infoSvg';
import { SuccessSvg } from '../../../assets/svgIcons/successSvg';
import { WarningSvg } from '../../../assets/svgIcons/warningSvg';
import { notificationType } from '../types/notification';
import { TYPE_NOTIFICATION } from '../types/notification.const';

interface Props {
  nameIcon: notificationType;
}

export const NotificationIcon: React.FC<Props> = ({ nameIcon }) => {
  return (
    <>
      {nameIcon === TYPE_NOTIFICATION.SUCCESS && <SuccessSvg />}
      {nameIcon === TYPE_NOTIFICATION.ERROR && <ErrorSvg />}
      {nameIcon === TYPE_NOTIFICATION.WARNING && <WarningSvg />}
      {nameIcon === TYPE_NOTIFICATION.INFO && <InfoSvg />}
    </>
  );
};
