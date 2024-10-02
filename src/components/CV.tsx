import { FaFilePdf, FaRegFileImage } from 'react-icons/fa';
import { FormattedMessage, useIntl } from 'react-intl';
import { StyledHeading } from '../styles/App.styled';
import { StyledCV } from '../styles/CV.styled';
import { getTranslation } from '../utils/helpers';

export default function CV() {
  const intl = useIntl();

  return (
    <StyledCV id="CV">
      <StyledHeading>
        <FormattedMessage id="cvCV" />
      </StyledHeading>
      <div className="cv-wrapper">
        <div className="download-cv-wrapper">
          <h1 className="download-cv-heading">
            <FormattedMessage id="cvPDF" />
          </h1>
          <a
            href={getTranslation(intl, 'cvPDFLink')}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={getTranslation(intl, 'cvPDFLabel')}
            title={getTranslation(intl, 'cvPDFLabel')}
          >
            <FaFilePdf />
          </a>
        </div>
        <div className="download-cv-wrapper">
          <h1 className="download-cv-heading">
            <FormattedMessage id="cvImage" />
          </h1>
          <a
            href={getTranslation(intl, 'cvImageLink')}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={getTranslation(intl, 'cvImageLabel')}
            title={getTranslation(intl, 'cvImageLabel')}
          >
            <FaRegFileImage />
          </a>
        </div>
      </div>
    </StyledCV>
  );
}
