import './menu.component.scss';

function MenuComponent() {
  const strUrlImg = "https://previews.123rf.com/images/ylivdesign/ylivdesign1810/ylivdesign181001516/108969727-j-letter-in-isometric-3d-style-with-shadow-violet-j-letter-illustration.jpg";
  return (
    <aside className="sidebar">
        <div>Cofeed</div>
        <header>Menu</header>
        <nav className="sidebar-nav">
          <ul>
            <li>
              <a href="#"><i className="fas fa-home menu-icon-active"></i><span className="">Home</span></a>
            </li>
            <li>
              <a href="#"><i className="fab fa-facebook-messenger menu-icon"></i><span className="">Messasges</span></a>
            </li>
            <li>
              <a href="#"><i className="fas fa-user menu-icon"></i><span className="">Profile</span></a>
            </li>
            <li>
              <a href="#"><i className="fas fa-bookmark menu-icon"></i><span className="">Saved Post</span></a>
            </li>
            <li>
              <a href="#"><i className="fas fa-cog menu-icon"></i><span className="">Configuration</span></a>
            </li>
          </ul>
        </nav>
    </aside>
  );
}

export default MenuComponent;
