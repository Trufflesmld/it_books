import { Fragment } from "react";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { StyledLink } from "../../../../pages/Home/components/NewBookComponent/styles";
import { breadCrumbCongig } from "../../../../Router/breadCrumb";
import { Marquee } from "../Marquee/Marquee";
import * as s from "./styles";
export const BreadCrumb = () => {
  const breadcrumbs = useBreadcrumbs(breadCrumbCongig, {
    disableDefaults: true,
  });
  const currentRoute = breadcrumbs.slice(-1)[0].breadcrumb;
  return (
    <>
      <s.Container>
        {breadcrumbs.map(({ match, breadcrumb, key }, index) => (
          <Fragment key={index}>
            <s.LinkContainer key={match.pathname}>
              <StyledLink to={match.pathname}>{breadcrumb}</StyledLink>
            </s.LinkContainer>
            {index !== breadcrumbs.length - 1 && <s.CrumbArrow />}
          </Fragment>
        ))}
      </s.Container>
      <s.TitleContainer>
        <s.Title>{currentRoute}</s.Title>
        <Marquee text={currentRoute} />
      </s.TitleContainer>
    </>
  );
};
