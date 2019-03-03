import styled from 'styled-components';
import { spacers, colors } from '../../../../styles/settings';
import { media } from '../../../../styles/mixins';
import { rem } from '../../../../styles/utils';

export const StyledListItem = styled.li`
  position: relative;
  margin-bottom: ${spacers[6]};
  background-color: ${colors.greyB};

  a {
    position: relative;
    display: block;
    padding: ${spacers[3]};
    color: ${colors.greyC};
    opacity: 0.8;
    z-index: 10;

    &:hover,
    &:focus {
      opacity: 1;

      h3 {
        color: ${colors.orange};
      }
    }
  }

  ${media[15]`
      width: calc(50% - 30px);

      &:nth-child(2n) {
        margin-left: auto;

        &:after {
          left: -40px;
        }
      }

      &:after {
        content: '';
        position: absolute;
        top: 50%;
        right: -40px;
        transform: translateY(-50%);
        width: 20px;
        height: 20px;
        background: ${colors.greyA};
        border-radius: 50%;
      }
    `}
`;

export const StyledArticle = styled.article`
  position: relative;
  border: 4px solid ${colors.greyA};
  overflow: hidden;
  z-index: 10;

  &:before {
    content: '';
    width: 120px;
    height: 260px;
    position: absolute;
    top: -105px;
    right: 0;
    background-color: ${colors.greyA};
    transform: rotate(-50deg);
    z-index: 0;
  }
`;

export const StyledHeader = styled.header`
  display: flex;
  margin-bottom: ${spacers[3]};

  h3 {
    font-size: ${rem(20)};
    color: #e8e8e8;
  }

  img {
    position: relative;
    margin-left: auto;
    z-index: 10;
  }
`;

export const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  p:last-child {
    font-size: ${rem(14)};
  }
`;
