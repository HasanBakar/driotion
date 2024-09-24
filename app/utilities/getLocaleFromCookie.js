import Cookies from 'js-cookie';

export const getLocaleFromCookie = () => {
	return Cookies.get('NEXT_LOCALE') || 'en';
};

export const setLocaleCookie = (locale) => {
	Cookies.set('NEXT_LOCALE', locale, { expires: 365 });
};
