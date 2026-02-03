'use client';

// Libraries
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Images
import dummy_image from '@assets/images/campuscanvas_web.png';

// Styles
import styles from './styles.module.css';

// Components
import { OtherProjectsCard } from './OtherProjectsCard/OtherProjectsCard';

export const MoreProjectsCarrousel = () => {
  const otherProjects = [
    {
      id: 1,
      title: 'Project A',
      description: 'This is a brief description of project A',
      technologies: ['React', 'TypeScript', 'CSS'],
      image: dummy_image,
      url: '#',
    },
    {
      id: 2,
      title: 'Project B',
      description: 'This is a brief description of project B',
      technologies: ['Vue', 'JavaScript', 'HTML'],
      image: dummy_image,
      url: '#',
    },
    {
      id: 3,
      title: 'Project C',
      description: 'This is a brief description of project C',
      technologies: ['Angular', 'TypeScript', 'Sass'],
      image: dummy_image,
      url: '#',
    },
    {
      id: 4,
      title: 'Project D',
      description: 'This is a brief description of project D',
      technologies: ['Svelte', 'JavaScript', 'CSS'],
      image: dummy_image,
      url: '#',
    },
    {
      id: 5,
      title: 'Project E',
      description: 'This is a brief description of project E',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      image: dummy_image,
      url: '#',
    },
    {
      id: 6,
      title: 'Project F',
      description: 'This is a brief description of project F',
      technologies: ['Gatsby', 'JavaScript', 'Styled Components'],
      image: dummy_image,
      url: '#',
    },
    {
      id: 7,
      title: 'Project G',
      description: 'This is a brief description of project G',
      technologies: ['Ember.js', 'TypeScript', 'CSS'],
      image: dummy_image,
      url: '#',
    },
    {
      id: 8,
      title: 'Project H',
      description: 'This is a brief description of project H',
      technologies: ['Backbone.js', 'JavaScript', 'HTML'],
      image: dummy_image,
      url: '#',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.sliderContainer}>
      <Slider {...settings}>
        {otherProjects.map((project) => (
          <OtherProjectsCard key={project.id} project={project} />
        ))}
      </Slider>
    </div>
  );
};
