import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AdminSidebarItems from './AdminSidebarItems';

interface SidebarProps {
  mobileOpen: boolean;
  setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsClosing: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AdminSidebar({ mobileOpen, setMobileOpen, setIsClosing }: SidebarProps) {
  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  return (
    <Box
      component='nav'
      width={{ lg: 300 }}
      flexShrink={{ lg: 0 }}
      display={{ xs: 'none', lg: 'block' }}
    >
      <Drawer
        variant='temporary'
        open={mobileOpen}
        onTransitionEnd={handleDrawerTransitionEnd}
        onClose={handleDrawerClose}
        ModalProps={{ keepMounted: true }}
        sx={{ display: { xs: 'block', lg: 'none' } }}
      >
        <AdminSidebarItems />
      </Drawer>

      <Drawer variant='permanent' sx={{ display: { xs: 'none', lg: 'block' } }} open>
        <AdminSidebarItems />
      </Drawer>
    </Box>
  );
}
