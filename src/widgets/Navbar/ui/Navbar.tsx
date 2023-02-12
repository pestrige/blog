import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib';
import { AppLink, AppLinkTheme } from 'shared/ui';
import cls from './Navbar.module.scss';

interface Props {
	className?: string
}

export const Navbar = ({ className }: Props): JSX.Element => {
	const { t } = useTranslation();

	return (
		<nav className={classNames(cls.wrapper, className)}>
			<ul className={cls.links}>
				<li className={cls.mainLink}>
					<AppLink to="/" theme={AppLinkTheme.SECONDARY}>{t('Главная')}</AppLink>
				</li>
				<li>
					<AppLink to="/about" theme={AppLinkTheme.SECONDARY}>{t('О сайте')}</AppLink>
				</li>
			</ul>
		</nav>
	);
};
