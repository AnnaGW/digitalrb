import { type ReactElement } from 'react';

import s from './styles.module.css';
import { Contact, type ContactType } from '~/const';
import { cn } from '~/els/@common/cn';
import { Location2Ico } from '../icons/location2-ico';
import { EmailIco } from '../icons/email-ico';
import { HomeIco } from '../icons/home-ico';

type ContactProps = {
	data: ContactType;
};
export const ContactItem = ({ data }: ContactProps): ReactElement => {
	return (
		<div className={s.contactWrap}>
			<div
				className={cn(s.contactIcon, {
					[s.contactIcon1]: data.name === Contact.office.name,
					[s.contactIcon2]: data.name === Contact.write.name,
					[s.contactIcon3]: data.name === Contact.time.name,
				})}
			>
				{
					{
						[Contact.office.name]: <Location2Ico width={48} height={48} />,
						[Contact.write.name]: <EmailIco width={48} height={48} />,
						[Contact.time.name]: <HomeIco width={48} height={48} />,
					}[data.name]
				}
			</div>
			<p className={s.contactName}>{data.name}</p>
			<p className={s.contactDesc1}>{data.desc1}</p>
			<p className={s.contactDesc1}>{data.desc2}</p>
		</div>
	);
};
