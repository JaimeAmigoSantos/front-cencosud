import '../assets/css/App.css'
import MenuComponent from './menu/menu.component';
import UsersComponent from './users/users.component';
import FeedsComponent from './feeds/feeds.component';
import SearchComponent from './search/search.component';
import NotificationsComponent from './notifications/notifications.component';
import UploadComponent from './upload/upload.component';
import SuggestionsComponent from './suggestions/suggestions.component';
import PostsComponent from './posts/posts.component';

function App() {
    return (
        <div className="main-container">
            <MenuComponent />
            <div className="feeds-users-container">
                <UsersComponent />
                <FeedsComponent />
            </div>
            <div className="search-post-suggestions-container">
                <div className="search-notif-upload-container">
                    <SearchComponent />
                    <NotificationsComponent />
                    <UploadComponent />
                </div>
                <SuggestionsComponent />
                <PostsComponent />
            </div>
        </div>
    );
  }
  
  export default App;