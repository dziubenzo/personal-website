import { IntlShape } from 'react-intl';
import { LanguageKeys } from '../languages/messages';
// Get translation
// Only allow defined language object keys as second argument
export const getTranslation = (
  intlObject: IntlShape,
  languageKey: LanguageKeys,
) => {
  return intlObject.formatMessage({ id: languageKey });
};
