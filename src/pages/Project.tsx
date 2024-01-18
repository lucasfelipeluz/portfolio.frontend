import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ContainerProject, MoreDetailsContainer } from '../style/Project';
import Carousel from 'react-material-ui-carousel';

import portfolio1 from '../assets/image/portfolio1.png';
import portfolio2 from '../assets/image/portfolio2.png';
import ilustracao from '../assets/image/ilustracao.png';
import imgDev from '../assets/image/img-dev.png';

export default function Project() {
  const { id } = useParams();

  const navigate = useNavigate();

  function Example(props) {
    var items = [
      {
        name: 'Random Name #1',
        description: 'Probably the most random thing you have ever seen!',
      },
      {
        name: 'Random Name #2',
        description: 'Hello World!',
      },
    ];

    return (
      <Carousel>
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    );
  }

  function Item(props) {
    return (
      <div style={{ height: '350px' }}>
        <img src={props.item} style={{ height: '100%', width: '100%', objectFit: 'contain' }} />
      </div>
    );
  }

  var items = [
    {
      src: portfolio1,
    },
    {
      src: portfolio2,
    },
    {
      src: ilustracao,
    },
    {
      src: imgDev,
    },
  ];

  const onHandleToBackPage = () => {
    navigate(-1);
  };

  return (
    <MoreDetailsContainer>
      <ContainerProject className="container-lg container-fluid">
        <div className="actions">
          <i
            className="fas fa-arrow-left"
            onClick={() => {
              onHandleToBackPage();
            }}
            style={{ cursor: 'pointer' }}
          ></i>
          <p className="title">Projeto</p>
        </div>
        <div className="slide-photos">
          <div className="slide">
            <Carousel>
              {items.map((item, i) => (
                <Item key={i} item={item.src} />
              ))}
            </Carousel>
          </div>
        </div>
        <div className="description">
          <p className="title-project">Portolfio</p>
          <p className="text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis exercitationem
            nemo odio fuga voluptatum! Consectetur et, minima cumque est, dolor culpa, fugiat
            voluptas quam eum quasi reprehenderit perferendis quas incidunt? Lorem ipsum, dolor sit
            amet consectetur adipisicing elit. Nulla porro, nostrum aliquid voluptatem, dolore ullam
            modi impedit ratione ea debitis itaque maiores distinctio, quod doloremque temporibus?
            Nulla ipsam ipsa aperiam? Excepturi repellendus ex, tempora voluptas, impedit minima
            reprehenderit vel, mollitia libero qui magni ducimus voluptate error sit officiis. Dicta
            laudantium sit neque totam nisi eaque voluptatem minima rem laborum velit? Numquam,
            harum impedit molestiae at omnis ea eum quis? Veritatis, ducimus. Ipsum possimus aperiam
            recusandae ratione fuga dolor expedita accusantium tenetur vero at? Consequatur,
            perspiciatis a. Delectus doloribus rerum reprehenderit. Quisquam, voluptatum. Quisquam
          </p>
          <div className="duration">
            <p className="started-at">Iniciado em: 01/09/2023</p>
            <p className="started-at">Terminado em: 01/09/2023</p>
          </div>

          <div className="skills">
            <p className="title-skills">Tecnologias utilizadas:</p>
            <div className="content-skill">
              <p className="skill">HTML</p>
              <p className="skill">CSS</p>
              <p className="skill">JavaScript</p>
              <p className="skill">JavaScript</p>
              <p className="skill">JavaScript</p>
              <p className="skill">JavaScript</p>
              <p className="skill">JavaScript</p>
              <p className="skill">JavaScript</p>
              <p className="skill">JavaScript</p>
            </div>
          </div>
          <div className="links">
            <p className="link">Github</p>
            <p className="link">Site do projeto</p>
          </div>
        </div>
        <div className="separation-bar"></div>
      </ContainerProject>
    </MoreDetailsContainer>
  );
}
