import React, { useState } from 'react';
import '@styles/Labs.css';

import ej1 from '@assets/ej1.png'
import topSongs from '@assets/topSongs.png'
import lab1 from '@assets/lab1.png'
import lab2 from '@assets/lab2.png'
import lab3 from '@assets/lab3.png'
import lab4 from '@assets/lab4.png'
import lab5 from '@assets/lab5.png'
import lab6 from '@assets/lab6.png'
import proyectoFinal from '@assets/proyectoFinal.png'

const LabsCards = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const labs = [
    {
      id: 1,
      title: "Primer Ejercicio",
      description: "Built using HTML",
      image: ej1,
      link: "#"
    },
    {
      id: 2,
      title: "My Top 10 Taylor Swift Songs",
      description: "Built using HTML",
      image: topSongs,
      link: "#",
      isWide: true
    },
    {
      id: 3,
      title: "Lab#1",
      description: "Built using terminal commands",
      image: lab1,
      link: "#"
    },
    {
      id: 4,
      title: "Lab#2",
      description: "Administrador de servicios remotos",
      image: lab2,
      link: "#",
      isWide: true
    },
    {
      id: 5,
      title: "Lab#3",
      description: "Administrador de servicios remotos",
      image: lab3,
      link: "#",
      isWide: true
    },
    {
      id: 6,
      title: "Lab#4",
      description: "Built using HTML and AI tools",
      image: lab4,
      link: "#"
    },
    {
      id: 7,
      title: "Lab#5",
      description: "Built using HTML and AI tools",
      image: lab5,
      link: "#"
    },
    {
      id: 8,
      title: "Lab#6",
      description: "Built using HTML and AI tools",
      image: lab6,
      link: "#"
    },
    {
      id: 9,
      title: "Proyecto Final",
      description: "Built using HTML and AI tools",
      image: proyectoFinal,
      link: "#"
    }
  ];

  return (
    <div className="container-lab">
      <div className="grid-lab">
        {labs.map((lab) => (
          <div
            key={lab.id}
            className={`card-lab ${lab.isWide ? 'wideCard' : ''} ${hoveredCard === lab.id ? 'card-lab-hover' : ''}`}
            onMouseEnter={() => setHoveredCard(lab.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="imageContainer-lab">
              <img 
                src={lab.image}
                alt={lab.title}
                className="image-lab"
              />

              <div className="overlay"></div>
            </div>
            
            <div className="content">
              <h3 className="cardTitle">{lab.title}</h3>
              <p className="description">{lab.description}</p>
              <a 
                href={lab.link}
                className={`linkButton ${hoveredCard === lab.id ? 'linkButton-hover' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  alert(`Navegando a ${lab.title}`);
                }}
              >
                Link
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LabsCards;
