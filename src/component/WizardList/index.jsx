import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../../Asset/img1.png';
import img2 from '../../Asset/img2.png';
import './wizard.css';

export const WizardNode = () => {
  const arrowStyle = {
    position: 'absolute',
    zIndex: 2,
    top: 'calc(50% - 15px)',
    width: 30,
    height: 30,
    cursor: 'pointer',
    background: '#8A1538',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
  };

  return (
    <div className="wizard-wrapper">
      <Carousel
        showThumbs={false}
        showIndicators={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        showStatus={false}
        showArrows={true}
        emulateTouch={true}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyle, left: 15 }}>
              ‹
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyle, right: 15 }}>
              ›
            </button>
          )
        }
      >
        <div>
          <img src={img1} alt="Wizard 1" />
          <div className="slide-text">
            <h1>HealthyChoice, Product Days</h1>
           
            <h1>Always!</h1>
          </div>
        </div>
        <div>
          <img src={img2} alt="Wizard 2" />
          <div className="slide-text">
            <h1 style={{backgroundColor:"green"}}>HealthyChoice , Product Days</h1>
            <h1 style={{backgroundColor:"green"}}>Always!</h1>
          </div>
        </div>
      </Carousel>

      
    </div>
  );
};
