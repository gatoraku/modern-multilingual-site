import React from 'react';
import { useTranslation } from 'react-i18next';
import { Menu } from '@headlessui/react';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'de', name: 'Deutsch' },
  { code: 'es', name: 'Español' },
  { code: 'lv', name: 'Latviešu' }
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <Menu as="div" className="relative">
      <Menu.Button className="inline-flex items-center px-4 py-2 border rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
        {languages.find(lang => lang.code === i18n.language)?.name || 'Language'}
      </Menu.Button>
      <Menu.Items className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
        {languages.map((language) => (
          <Menu.Item key={language.code}>
            {({ active }) => (
              <button
                className={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-sm text-gray-700 w-full text-left`}
                onClick={() => i18n.changeLanguage(language.code)}
              >
                {language.name}
              </button>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
}