import './cards.component.scss';

function CardsComponent() {
  return (
    <div className="feeds-cards-container">
        <div className="feeds-card">
            <img className="feeds-square" src="https://cultura-informatica.com/wp-content/uploads/2021/06/Fondos-de-pantalla-de-teclado-tactil-3-scaled.jpg" alt="Feeds 1" />
            <div className="feeds-icons-container-left">
                <div className="circular-user-icon-container">
                    <img className="circular-user-icon" src="https://www.atptour.com/es/players/novak-djokovic/d643/www.atptour.com/-/media/tennis/players/head-shot/2019/djokovic_head_ao19.png" alt="Novak Djokovic" />
                </div>
                <div className="circular-user-text-container-left">Novak Djokovic</div>
            </div>
            <div className="feeds-icons-container-right">
                <div className="circular-user-text-container-right">
                    <a href="#"><i className="fas fa-heart fa-lg feeds-icon-like-active"></i><span className="">&nbsp;&nbsp;632</span></a>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="#"><i className="fab fa-facebook-messenger menu-icon"></i><span className="">&nbsp;&nbsp;215</span></a>
                </div>
            </div>
        </div>
        <div className="feeds-card">
        <img className="feeds-square" src="https://cultura-informatica.com/wp-content/uploads/2021/06/Fondos-de-pantalla-de-teclado-tactil-6-scaled.jpg" alt="Feeds 2" />
            <div className="feeds-icons-container-left">
                <div className="circular-user-icon-container">
                <img className="circular-user-icon" src="https://rockfm-cdnmed.agilecontent.com/resources/jpg/8/5/1618402797758.jpg" alt="Mick Jagger" />
                </div>
                <div className="circular-user-text-container-left">Mick Jagger</div>
            </div>
            <div className="feeds-icons-container-right">
                <div className="circular-user-text-container-right">
                    <a href="#"><i className="fas fa-heart fa-lg"></i><span className="">&nbsp;&nbsp;632</span></a>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="#"><i className="fab fa-facebook-messenger menu-icon"></i><span className="">&nbsp;&nbsp;215</span></a>
                </div>
            </div>
        </div>
    </div>
  );
}
export default CardsComponent;
