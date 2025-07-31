import { Link, useLocation } from 'react-router-dom';
interface TabProps {
  data: { id: number; name: string; href: string }[];
}

interface TabMenuProp {
  label: string;
  href: string;
}

const RoutesTabMenu: React.FC<TabMenuProp> = ({ label, href }) => {
  const location = useLocation();

  const currentLocation = location?.pathname;

  return (
    <span
      className={`capitalize lg:block text-sm lg:px-4 p-[.8rem]  text-white hover:text-white hover:border-r-[.2rem] hover:border-r-primary rounded-lg hover:transition-all hover:ease-in ease-out transition-all cursor-pointer ${currentLocation === href && 'bg-primary border-primary font-[500]'
        }`}
    >
      <Link to={href}>{label}</Link>
    </span>
  );
};

export const RoutesTab: React.FC<TabProps> = ({ data }) => {
  return (
    <>
      <nav className="flex flex-start w-full bg-tifi-dark p-2 rounded-lg">
        {data &&
          data.map((item: any) => (
            <div className={`${item.id !== 1 ? 'ml-5' : null}`} key={item.id}>
              <RoutesTabMenu href={item.href} label={item.name} />
            </div>
          ))}
      </nav>
    </>
  );
};
