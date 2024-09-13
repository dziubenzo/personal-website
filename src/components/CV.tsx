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
            <FormattedMessage id="cvDownloadPDF" />
          </h1>
          <a href={getTranslation(intl, 'cvDownloadPDFLink')} download={true}>
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
          >
            <FaRegFileImage />
          </a>
        </div>
      </div>
    </StyledCV>
  );
}
