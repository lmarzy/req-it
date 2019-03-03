import * as React from 'react';
import { StyledListItem, StyledArticle, StyledHeader, StyledBody } from './styled';
import { Link } from 'react-router-dom';
import { formatImageSrc } from '../../../../utils/format-image-string';
import { ExperienceListModel } from '../../experience.model';

interface ListItemProps {
  ex: ExperienceListModel;
}

export const ListItem: React.FunctionComponent<ListItemProps> = ({ ex }) => (
  <StyledListItem>
    <StyledArticle>
      <Link to={`/experience/${ex.id}`}>
        <StyledHeader>
          <h3>{ex.company}</h3>
          <img src={`/images/${formatImageSrc(ex.company)}.svg`} alt={ex.company} height="30" />
        </StyledHeader>
        <StyledBody>
          <p>{ex.position}</p>
          <p>
            {ex.from} - {ex.to}
          </p>
        </StyledBody>
      </Link>
    </StyledArticle>
  </StyledListItem>
);
