'use client';

import { useLocale } from 'next-intl';
import { FC, ReactNode } from 'react';

// import { getQueryClient } from '@/utils';
import { NextUIProvider } from '@nextui-org/react';

interface IProvider {
	children: ReactNode;
}

export const Providers: FC<IProvider> = ({ children }) => {
	const locale = useLocale();


	return (<NextUIProvider locale={locale} className="relative">
			{children}
		</NextUIProvider>
	);
};
