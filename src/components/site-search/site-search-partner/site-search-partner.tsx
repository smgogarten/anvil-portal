/*
 * The AnVIL
 * https://www.anvilproject.org
 *
 * The AnVIL site search partner component.
 */

// Core dependencies
import React from "react";

// App dependencies
import Button from "../../button/button";

// Styles
import compStyles from "./site-search-partner.module.css";

const classNames = require("classnames");

export interface Partner {
  active: boolean;
  label: string;
  value: string;
}

interface SiteSearchPartnerProps {
  onSelectSiteSearchPartner: (selectedPartner: string) => void;
  partner: Partner;
}

function SiteSearchPartner(props: SiteSearchPartnerProps): JSX.Element {
  const { onSelectSiteSearchPartner, partner } = props;
  const { active, label, value } = partner;
  const classNamesPartner = classNames(
    { [compStyles.active]: active },
    compStyles.partner
  );

  return (
    <li className={classNamesPartner}>
      <Button clickAction={() => onSelectSiteSearchPartner(value)}>
        {label}
      </Button>
    </li>
  );
}

export default SiteSearchPartner;