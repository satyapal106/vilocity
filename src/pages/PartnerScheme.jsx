import img from '../assets/images/img3.jpg';
import '../style/partnerScheme.scss'

export const PartnerScheme = () => {
  return (
    <div className="partnerSchemePage">
        <div className="breadcrumb_body">
            <div className="Title text-center">
                <h1>Partner Schemes</h1>
            </div>
            <div className="breadcrumbbody">
            <ul className="breadcrumb">
                <li className="breadcrumb-item">
                <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item">
                <a href="#">PartnerScheme</a>
                </li>
            </ul>
            </div>
        </div>
        
        <div className="partner-scheme-cards">

            <div className="scheme-card">
                <img src={img} alt="" />
                <div className="card-content">
                    <p className="card-title">The Title</p>
                    <p className="card-p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos; standard dummy text ever since the 1500s,</p>
                </div>
            </div>

            <div className="scheme-card">
                <img src={img} alt="" />
                <div className="card-content">
                    <p className="card-title">The Title</p>
                    <p className="card-p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,</p>
                </div>
            </div>

            <div className="scheme-card">
                <img src={img} alt="" />
                <div className="card-content">
                    <p className="card-title">The Title</p>
                    <p className="card-p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,</p>
                </div>
            </div>

            <div className="scheme-card">
                <img src={img} alt="" />
                <div className="card-content">
                    <p className="card-title">The Title</p>
                    <p className="card-p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,</p>
                </div>
            </div>
            <div className="scheme-card">
                <img src={img} alt="" />
                <div className="card-content">
                    <p className="card-title">The Title</p>
                    <p className="card-p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos; standard dummy text ever since the 1500s,</p>
                </div>
            </div>

            <div className="scheme-card">
                <img src={img} alt="" />
                <div className="card-content">
                    <p className="card-title">The Title</p>
                    <p className="card-p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,</p>
                </div>
            </div>

            <div className="scheme-card">
                <img src={img} alt="" />
                <div className="card-content">
                    <p className="card-title">The Title</p>
                    <p className="card-p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,</p>
                </div>
            </div>

            <div className="scheme-card">
                <img src={img} alt="" />
                <div className="card-content">
                    <p className="card-title">The Title</p>
                    <p className="card-p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,</p>
                </div>
            </div>

        </div>
    </div>
  )
}
