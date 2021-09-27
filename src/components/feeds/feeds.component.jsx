import './feeds.component.scss';
import CardsComponent from '../cards/cards.component';

function FeedsComponent() {
  return (
    <div className="feeds-container">
        <span>Feeds</span>
        <div className="feeds-menu">
            <span><a href="#">All</a></span>
            <span><a href="#">Following</a></span>
            <span><a href="#">Newest</a></span>
            <span><a href="#">Popular</a></span>
        </div>
        <CardsComponent />
    </div>
  );
}

export default FeedsComponent;
