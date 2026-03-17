import { useState, type ReactElement } from 'react';

import s from './styles.module.css';
import { cn } from '~/els/@common/cn';
import { CompetenceDesc, CompetenceName } from '~/const';
import { SafetyIco } from '../icons/safety-ico';
import { InstallIco } from '../icons/install-ico';
import { SurveillanceIco } from '../icons/surveillance-ico';
import { AccessIco } from '../icons/access-ico';
import { CablingIco } from '../icons/cabling-ico';
import { NotificationIco } from '../icons/notification-ico';

type CompetenceProps = {
	name: string;
};
export const CompetenceItem = ({ name }: CompetenceProps): ReactElement => {
	const [isDescOpen, setIsDEskOpen] = useState<boolean>(false);
	const openDescToggle = () => {
		setIsDEskOpen(!isDescOpen);
	};
	return (
		<div className={s.competenceWrap}>
			<div className={s.competenceInnerWrap}>
				<div
					className={cn(s.competenceIconWrap, {
						[s.competenceIcon1]: name === CompetenceName.Safety,
						[s.competenceIcon2]: name === CompetenceName.Electrical,
						[s.competenceIcon3]: name === CompetenceName.Surveillance,
						[s.competenceIcon4]: name === CompetenceName.Access,
						[s.competenceIcon5]: name === CompetenceName.Cabling,
						[s.competenceIcon6]: name === CompetenceName.Notification,
					})}
				>
					{
						{
							[CompetenceName.Safety]: <SafetyIco width={64} height={64} />,
							[CompetenceName.Electrical]: (
								<InstallIco width={64} height={64} />
							),
							[CompetenceName.Surveillance]: (
								<SurveillanceIco width={64} height={64} />
							),
							[CompetenceName.Access]: <AccessIco width={64} height={64} />,
							[CompetenceName.Cabling]: <CablingIco width={64} height={64} />,
							[CompetenceName.Notification]: (
								<NotificationIco width={64} height={64} />
							),
						}[name]
					}
				</div>
				<p className={s.competenceName}>{name}</p>
			</div>
			<p className={s.competenceLink} onClick={openDescToggle}>
				Подробнее
			</p>
			<div
				className={cn(s.competenceDescWrap, {
					[s.competenceDescWrap1]: name === CompetenceName.Safety,
					[s.competenceDescWrap2]: name === CompetenceName.Electrical,
					[s.competenceDescWrap3]: name === CompetenceName.Surveillance,
					[s.competenceDescWrap4]: name === CompetenceName.Access,
					[s.competenceDescWrap5]: name === CompetenceName.Cabling,
					[s.competenceDescWrap6]: name === CompetenceName.Notification,
					[s.displayNone]: !isDescOpen,
				})}
			>
				<p className={s.competenceDesc}>
					{
						{
							[CompetenceName.Safety]: CompetenceDesc.Safety,
							[CompetenceName.Electrical]: CompetenceDesc.Electrical,
							[CompetenceName.Surveillance]: CompetenceDesc.Surveillance,
							[CompetenceName.Access]: CompetenceDesc.Access,
							[CompetenceName.Cabling]: CompetenceDesc.Cabling,
							[CompetenceName.Notification]: CompetenceDesc.Notification,
						}[name]
					}
				</p>
			</div>
		</div>
	);
};
