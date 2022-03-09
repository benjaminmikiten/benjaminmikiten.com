import React from 'react';
import Link from 'next/link';
import { FaGithub, FaKeybase } from 'react-icons/fa';
import Text from '../Text';
import PropTypes from 'prop-types';

export function SocialItem({ icon, href, label }) {
  return (
    <li>
      <Link passHref={href}>
        <span className="flex gap-2 align-middle group hover:cursor-pointer">
          {React.cloneElement(icon, { className: 'fill-dracula-light group-hover:fill-dracula-light-200' })}
          <Text className="text-dracula-light group-hover:text-dracula-light-200">{label}</Text>
        </span>
      </Link>
    </li>
  );
}

SocialItem.propTypes = {
  icon: PropTypes.node,
  href: PropTypes.string,
  label: PropTypes.string,
}

function SocialList() {
  const items = [{
    icon: <FaGithub />,
    href: 'https://github.com/benjaminmikiten',
    label: 'Github',
  }, {
    icon: <FaKeybase />,
    href: 'https://keybase.io/benjaminmikiten',
    label: 'Keybase',
  }];

  return (
    <ul className="flex gap-1 flex-col">
      {items.map(({icon, href, label}) => <SocialItem icon={icon} href={href} label={label} key={href} />)}
    </ul>
  );
}

SocialList.propTypes = {};

export default SocialList;
