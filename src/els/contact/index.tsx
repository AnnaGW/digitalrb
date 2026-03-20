import { type ReactElement, type ReactNode } from 'react';

import s from './styles.module.css';
import { Contact, type ContactType } from '~/const';
import { cn } from '~/els/@common/cn';
import { Location2Ico } from '../icons/location2-ico';
import { EmailIco } from '../icons/email-ico';
import { HomeIco } from '../icons/home-ico';
import { PartnerCardIco } from '../icons/partner-card';

type ContactProps = {
	data: ContactType;
	node?: ReactNode;
};
export const ContactItem = ({ data, node }: ContactProps): ReactElement => {
	return (
		<div className={s.contactWrap}>
			<div
				className={cn(s.contactIcon, {
					[s.contactIcon1]: data.name === Contact.office.name,
					[s.contactIcon2]: data.name === Contact.write.name,
					[s.contactIcon3]: data.name === Contact.time.name,
					[s.contactIcon4]: data.name === Contact.partnerCard.name,
				})}
			>
				{
					{
						[Contact.office.name]: <Location2Ico width={48} height={48} />,
						[Contact.write.name]: <EmailIco width={48} height={48} />,
						[Contact.time.name]: <HomeIco width={48} height={48} />,
						[Contact.partnerCard.name]: (
							<PartnerCardIco width={48} height={48} />
						),
					}[data.name]
				}
			</div>
			<p className={s.contactName}>{data.name}</p>
			<p className={s.contactDesc1}>{data.desc1}</p>
			<p className={s.contactDesc1}>{data.desc2}</p>
			<p className={s.contactDesc1}>{node}</p>
		</div>
	);
};
