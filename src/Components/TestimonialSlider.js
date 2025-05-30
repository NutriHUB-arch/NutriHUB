import React from 'react';
import Slider from 'react-slick';
import './TestimonialSlider.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function TestimonialSlider() {
  const testimonials = [
    {
      name: 'Dr Vivek Sharma',
      location: 'Ujjain, India',
      stars: 5,
      day0: '82.5 kg',
      dayN: '75.8 kg',
      days: 45,
      imageBefore: require('../Images/before1.jpg'),
      imageAfter: require('../Images/after1.jpg'),
      review: `I lost 6.7 kg in just 45 days. I feel lighter, more active, and healthier. This journey changed my lifestyle for the better.`,
    },
    {
      name: 'Divyal gupta',
      location: 'Ujjain, India',
      stars: 5,
      day0: '93 kg',
      dayN: '78 Kg',
      days: 90,
      imageBefore: require('../Images/before2.jpg'),
      imageAfter: require('../Images/after2.jpg'),
      review: `I lost 15 kg in 3 months. I feel more confident, fit, and happy. It was totally worth it!`,
    },
    {
      name: 'Bhagwan singh',
      location: 'mahidpur, India',
      stars: 5,
      day0: '103.6 Kg',
      dayN: '83.8 Kg',
      days: 60,
      imageBefore: require('../Images/before3.jpg'),
      imageAfter: require('../Images/after3.jpg'),
      review: `In just 60 days, I lost my belly fat and feel so much lighter and healthier. Thank you for this amazing change!`,
    },
    {
      name: 'Gaurav Thakkar',
      location: 'India',
      stars: 5,
      day0: '113 Kg',
      dayN: '90 Kg',
      days: 90,
      imageBefore: require('../Images/before4.jpg'),
      imageAfter: require('../Images/after4.jpg'),
      review: `I lost 23 kg in just 3 months during the lockdown. I never thought this transformation was possible from home, but with the right guidance and plan, I did it! I feel lighter, healthier, and more confident now. It’s a new start for me!`,
    },
    {
      name: 'Simran pandya',
      location: 'Ujjain, India',
      stars: 5,
      day0: '84 Kg',
      dayN: '70 Kg',
      days: 90,
      imageBefore: require('../Images/before5.jpg'),
      imageAfter: require('../Images/after5.jpg'),
      review: `In just 3 months, I lost 14 kg and completely transformed how I look and feel! I feel healthier, more energetic, and confident in my own skin again. Thank you for making this journey possible and so rewarding!`,
    },
    {
      name: 'Ankit yadav',
      location: 'Ujjain, India',
      stars: 5,
      day0: '97 Kg',
      dayN: '78 Kg',
      days: 150,
      imageBefore: require('../Images/before6.jpg'),
      imageAfter: require('../Images/after6.jpg'),
      review: `TI used to feel constantly tired and low on energy. After joining the program, I not only lost 19 kg in just 5 months but also regained my confidence and stamina. My lifestyle has improved significantly, and I finally feel in control of my health!`,
    },
    {
      name: 'Archie singhal',
      location: 'New delhi, India',
      stars: 5,
      day0: '78 Kg',
      dayN: '52 Kg',
      days: 180,
      imageBefore: require('../Images/before6.jpg'),
      imageAfter: require('../Images/after6.jpg'),
      review: `Dropping 26 kg was something I never imagined possible! The program helped me stay disciplined, focused, and motivated throughout my journey. I feel lighter, fitter, and proud of the person I’ve become. This has been a life-changing experience!`,
    }
  ];

  const settings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  cssEase: "ease-in-out",
  centerMode: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
};


  return (
    <div className="testimonial-container">
      <Slider {...settings}>
        {testimonials.map((t, i) => (
          <div className="testimonial-card" key={i}>
            <h4>{t.days} Day Transformation Story</h4>
            <div className="testimonial-images">
              <div>
                <p className="day-tag">Before</p>
                <img src={t.imageBefore} alt="before" />
              </div>
              <div>
                <p className="day-tag">After</p>
                <img src={t.imageAfter} alt="after" />
              </div>
            </div>
            <div className="testimonial-info">
              <p className="weight-info">
                <span className="green">Day 0</span> {t.day0} &nbsp;&nbsp;&nbsp; 
                <span className="green">Day {t.days}</span> {t.dayN}
              </p>
              <h5>{t.name}</h5>
              <p className="location">{t.location}</p>
              <p className="stars">{'⭐'.repeat(t.stars)}</p>
              <blockquote>{t.review}</blockquote>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
