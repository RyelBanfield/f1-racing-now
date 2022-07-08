import { createContext } from 'react';

const PreferencesContext = createContext({
  toggleTheme: () => {},
  isThemeDark: false,
});

export default PreferencesContext;
