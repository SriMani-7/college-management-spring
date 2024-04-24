import logout from "../../assets/logout_wght400.svg";

export default function SideNavigation({ menuItems = [] }) {
  const navItems = menuItems.map((item) => (
    <SideNavigationItem key={item.name} item={item} />
  ));

  return (
    <aside
      id="logo-sidebar"
      className="h-screen left-0 bottom-0 flex flex-col justify-between bg-white"
      aria-label="Sidebar"
    >
      {/** Nav items */}
      <div className="px-3 pb-4 overflow-y-auto">
        <ul className="space-y-2 font-medium">{navItems}</ul>
      </div>

      {/** Bottom slot */}
      <footer className="px-3 pb-4 bottom-0 sticky border-t-2">
        <a
          href="#"
          className="flex items-center gap-3 rounded p-3 text-slate-900 transition-colors hover:text-emerald-500 "
        >
          <div className="flex items-center self-center ">
            <img src={logout} />
          </div>
          <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm font-medium">
            Logout
          </div>
        </a>
      </footer>
    </aside>
  );
}

function SideNavigationItem({ item }) {
  return (
    <li className="px-3">
      <a
        href={item.href}
        className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-500 focus:bg-emerald-50 aria-[current=page]:bg-emerald-50 aria-[current=page]:text-emerald-500 "
      >
        <div className="flex items-center self-center">{/** icon */}</div>
        <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
          {item.name}
        </div>
      </a>
    </li>
  );
}
