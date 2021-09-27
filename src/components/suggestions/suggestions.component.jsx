import './suggestions.component.scss';

function SuggestionsComponent() {
    return (
        <div className="suggestions-container">
            <div className="suggestions-container-menu-item">
                <span>Suggestions for you</span>
                <div className="suggestions-menu">
                    <span><a href="#">See All</a></span>
                </div>
            </div>

            <div className="suggestions-container-menu-item">
                <div className="suggestions-circular-container">
                    <img className="suggestions-icon" src="https://imagenes.elpais.com/resizer/1t-Ib49oAR3_NLhacKUqg-3nDf0=/1960x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/7Q3X6BNLGBF7PEDPXT3Y7BKOAQ.jpg" alt="Cristiano Ronaldo" />
                </div>
                <div className="suggestions-text">
                    Cristiano Ronaldo<br/>
                    <span>Futbolista Engreído</span>
                </div>
                <div className="suggestions-input">
                    <button type="button" className="suggestions-button-follow">Follow</button>
                </div>
            </div>

            <div className="suggestions-container-menu-item">
                <div className="suggestions-circular-container">
                    <img className="suggestions-icon" src="https://imagenes.20minutos.es/files/image_656_370/files/fp/uploads/imagenes/2018/09/14/781666.r_d.262-231-6949.jpg" alt="Bono" />
                </div>
                <div className="suggestions-text">
                    Bono<br/>
                    <span>Vocalista U2</span>
                </div>
                <div className="suggestions-input">
                    <button type="button" className="suggestions-button-follow">Follow</button>
                </div>
            </div>

            <div className="suggestions-container-menu-item">
                <div className="suggestions-circular-container">
                    <img className="suggestions-icon" src="https://www.latercera.com/resizer/qlGeqSAe_lPKG7USCGNKtcOIz5k=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/5WUIKULC3JC5XI4TACN4M7VQYY.jpg" alt="Ozzy Osbourne" />
                </div>
                <div className="suggestions-text">
                    Ozzy Osbourne<br/>
                    <span>Príncipe de las tinieblas</span>
                </div>
                <div className="suggestions-input">
                    <button type="button" className="suggestions-button-follow">Follow</button>
                </div>
            </div>
            
        </div>
    );
}

export default SuggestionsComponent;