import { type ReactElement } from 'react';

import s from './styles.module.css';
import { cn } from '~/els/@common/cn';
import { WeCanName } from '~/const';

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
			></div>
			<p className={s.weCanName}>{name}</p>
			<a className={s.weCanLink} href="#contacts">
				Подробнее
			</a>
		</div>
	);
};
