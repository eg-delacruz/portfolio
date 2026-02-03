import styles from './styles.module.css';

type Props = {
  project: {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    image: {
      src: string;
      alt?: string;
    };
    url: string;
  };
};

// For the images, a 4:3 aspect ratio is recommended for better display -> 267 x 200 px
export const OtherProjectsCard = ({ project }: Props) => {
  return (
    <div className={styles.slideWrapper}>
      <a href={project.url} className={styles.projectLink}>
        <div
          className={styles.projectCard}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px)';
            e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
          }}
        >
          <img
            src={project.image.src}
            alt={project.title}
            className={styles.projectImage}
          />
          <div className={styles.projectContent}>
            <h3 className={styles.projectTitle}>{project.title}</h3>
            <p className={styles.projectDescription}>{project.description}</p>
            <div className={styles.technologiesContainer}>
              {project.technologies.map((tech, index) => (
                <span key={index} className={styles.technologyTag}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};
