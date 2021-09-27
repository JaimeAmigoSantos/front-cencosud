import './search.component.scss';

function UsersComponent() {
  return (
    <div className="input-container">
        <div className="input-wrapper">
            <input id="stuff" placeholder="Search" />
            <label for="stuff" className="fa fa-search input-icon"></label>
        </div>
    </div>
  );
}

export default UsersComponent;
