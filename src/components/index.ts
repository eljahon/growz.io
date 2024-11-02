import {createSharedPathnamesNavigation} from 'next-intl/navigation';

import {locales} from "@/constants";

export const {
  Link,
  useRouter,
  usePathname,
} = createSharedPathnamesNavigation({locales});

export {BaseLayout} from './layout';
export {LocaleSwitcher} from './locale-switcher';
