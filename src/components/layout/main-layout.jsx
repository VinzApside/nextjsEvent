import FooterComponent from '@/components/footer/footer';
import HeaderComponent from '@/components/header/header';

const MainLayout = ({ children }) => {
  return (
    <>
      <HeaderComponent />
      {children}
      <FooterComponent />
    </>
  );
};

export default MainLayout;
