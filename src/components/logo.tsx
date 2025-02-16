interface LogoProps {
  name: string;
  logo: React.ElementType;
}

const Logo: React.FC<LogoProps> = (props) => {
  const { name, logo: Logo } = props;
  return (
    <div className="flex items-center justify-center gap-2 px-4">
      <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
        <Logo className="size-4" />
      </div>
      <p className="text-lg font-semibold text-center">{name}</p>
    </div>
  );
};

export default Logo;
