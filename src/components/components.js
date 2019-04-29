import Page from "./layout/page"
import Layout from "./layout/page-layout"
import LayoutHeader from "./layout/header"
import LayoutFooter from "./layout/footer"

import ElementColumn from "./elements/element-column"
import ElementGrid from "./elements/element-grid"
import ElementSection from "./elements/element-section"
import ElementHeading from "./elements/element-title"
import ElementCta from "./elements/element-cta"
import ElementText from "./elements/element-text";
import ElementImage from "./elements/element-image";

import HeaderLinkGroup from "./elements/header-link-group"
import HeaderLinkItem from "./elements/header-link-item"
import FooterLinkGroup from "./elements/footer-link-group"
import FooterLinkItem from "./elements/footer-link-item"

import SectionHero from "./section/hero";

export default {
  page: Page,
  layout: Layout,
  layoutHeader: LayoutHeader,
  layoutFooter: LayoutFooter,

  elementColumn: ElementColumn,
  elementGrid: ElementGrid,
  elementSection: ElementSection,
  elementHeading: ElementHeading,
  elementCta: ElementCta,
  elementText: ElementText,
  elementImage: ElementImage,

  headerLinkGroup: HeaderLinkGroup,
  headerLinkItem: HeaderLinkItem,

  footerLinkGroup: FooterLinkGroup,
  footerLinkItem: FooterLinkItem,

  sectionHero: SectionHero
}
