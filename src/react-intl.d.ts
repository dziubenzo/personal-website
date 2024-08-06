import { LanguageKeys } from './languages/messages';

// Add autocomplete to ids
declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: LanguageKeys;
    }
  }
}
