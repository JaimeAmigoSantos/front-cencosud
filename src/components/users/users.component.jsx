import './users.component.scss';

function UsersComponent() {
  return (
    <div className="users-container">
        <div className="circular-square-container">
            <img className="circular-square" src="https://imagenes.20minutos.es/files/image_656_370/files/fp/uploads/imagenes/2018/09/14/781666.r_d.262-231-6949.jpg" alt="Bono" /><br />
            <span>Bono</span>
        </div>
        <div className="circular-square-container">
            <img className="circular-square" src="https://www.nacionrock.com/wp-content/uploads/Bruce-Dickinson.jpg" alt="Bruce Dickinson" /><br />
            <span>Bruce Dickinson</span>
        </div>
        <div className="circular-square-container">
            <img className="circular-square" src="https://rockfm-cdnmed.agilecontent.com/resources/jpg/8/5/1618402797758.jpg" alt="Mick Jagger" /><br />
            <span>Mick Jagger</span>
        </div>
        <div className="circular-square-container">
            <img className="circular-square" src="https://www.latercera.com/resizer/qlGeqSAe_lPKG7USCGNKtcOIz5k=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/5WUIKULC3JC5XI4TACN4M7VQYY.jpg" alt="Ozzy Osbourne" /><br />
            <span>Ozzy Osbourne</span>
        </div>
        <div className="circular-square-container">
            <img className="circular-square" src="https://imagenes.elpais.com/resizer/1t-Ib49oAR3_NLhacKUqg-3nDf0=/1960x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/7Q3X6BNLGBF7PEDPXT3Y7BKOAQ.jpg" alt="Cristiano Ronaldo" /><br />
            <span>Cristiano Ronaldo</span>
        </div>
        <div className="circular-square-container">
            <img className="circular-square" src="https://www.atptour.com/es/players/novak-djokovic/d643/www.atptour.com/-/media/tennis/players/head-shot/2019/djokovic_head_ao19.png" alt="Novak Djokovic" /><br />
            <span>Novak Djokovic</span>
        </div>
    </div>
  );
}

export default UsersComponent;
