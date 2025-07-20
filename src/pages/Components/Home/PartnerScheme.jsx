import img from '../../../assets/PartnerSchemeImg/partnerScheme.jpg';
import img1 from '../../../assets/PartnerSchemeImg/partnerScheme1.webp';
import img2 from '../../../assets/PartnerSchemeImg/partnerScheme2.jpg';

export const PartnerScheme = () => {
  return (
    <div className="partnerScheme">
        <div className="title">Partner Schemes</div>
        
        <div className="partner-scheme-cards">

            <div className="scheme-card">
                <img src={img} alt="" />
                <div className="card-content">
                    <p className="card-title">The Title</p>
                    <p className="card-p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos; standard dummy text ever since the 1500s,</p>
                </div>
            </div>

            <div className="scheme-card">
                <img src={img1} alt="" />
                <div className="card-content">
                    <p className="card-title">The Title</p>
                    <p className="card-p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,</p>
                </div>
            </div>

            <div className="scheme-card">
                <img src={img2} alt="" />
                <div className="card-content">
                    <p className="card-title">The Title</p>
                    <p className="card-p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,</p>
                </div>
            </div>

            <div className="scheme-card">
                <img src={img2} alt="" />
                <div className="card-content">
                    <p className="card-title">The Title</p>
                    <p className="card-p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,</p>
                </div>
            </div>

        </div>
    </div>
  )
}
