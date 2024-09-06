import { useState } from 'react';
import AdminSidebar from '../container/AdminSidebar';
import AdminHeader from '../header/AdminHeader';

interface Props {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  return (
    <>
      <AdminSidebar
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        setIsClosing={setIsClosing}
      />
      <AdminHeader />
      {children}
    </>
  );
}
