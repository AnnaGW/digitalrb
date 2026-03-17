import { type ReactElement } from 'react';

import s from './styles.module.css';
import { cn } from '~/els/@common/cn';
import { WeCanName } from '~/const';
import { ConsultIco } from '../icons/consult-ico';
import { ProjectIco } from '../icons/project-ico';
import { InstallIco } from '../icons/install-ico';
import { ServiceIco } from '../icons/service-ico';

type WeCanItemProps = {
	name: string;
};
export const WeCanItem = ({ name }: WeCanItemProps): ReactElement => {
	return (
		<div className={s.weCanItemWrap}>
			<div
				className={cn(s.weCanIconWrap, {
					[s.weCanIcon1]: name === WeCanName.Consult,
					[s.weCanIcon2]: name === WeCanName.Project,
					[s.weCanIcon3]: name === WeCanName.Install,
					[s.weCanIcon4]: name === WeCanName.Service,
				})}
			>
				{
					{
						[WeCanName.Consult]: <ConsultIco width={36} height={36} />,
						[WeCanName.Project]: <ProjectIco width={36} height={36} />,
						[WeCanName.Install]: <InstallIco width={36} height={36} />,
						[WeCanName.Service]: <ServiceIco width={36} height={36} />,
					}[name]
				}
			</div>
			<p className={s.weCanName}>{name}</p>
			<a className={s.weCanLink} href="#contacts">
				Подробнее
			</a>
		</div>
	);
};
