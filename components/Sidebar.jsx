import Link from 'next/link';
import React from 'react';
import SocialList from './home/SocialList';
import Text from './Text';

function Sidebar() {
  return (
    <header className="p-4 h-screen flex grow-0 shrink-0 w-auto bg-dracula-darker flex-col justify-between">
      {/* Top */}
      <div>
        <Text tag="h1" className="font-serif text-2xl font-bold text-dracula-pink-300">
          Benjamin Mikiten
        </Text>
        <Text className="font-sans text-sm font-bold text-dracula-cyan">
          Engineer at
          {' '}
          <Link href="https://www.storable.com/">
            Storable
          </Link>
        </Text>
      </div>
      {/* Bottom */}

      <div>
        <SocialList />
      </div>
    </header>
  );
}

export default Sidebar;
