import React from 'react';
import { Card, CardBody, Badge } from 'reactstrap';

import { Fade } from 'react-reveal';

const CursosCard = ({ cursos }) => {
  return (
    <Fade right duration={1000} distance="40px">
      <Card className="card-lift--hover shadow mt-4">
        <CardBody>
          <div className="d-flex px-3">
            <div className="pl-4">
              <h5 className="text-info">{cursos.schoolName}</h5>
              <h6>{cursos.subHeader}</h6>
              <Badge color="info" className="mr-1">
                {cursos.duration}
              </Badge>
              <p className="description mt-3">
                {cursos.desc}
                <ul>
                  {cursos.descBullets
                    ? cursos.descBullets.map((desc) => {
                        return <li key={desc}>{desc}</li>;
                      })
                    : null}
                </ul>
              </p>
            </div>
          </div>
        </CardBody>
      </Card>
    </Fade>
  );
};

export default CursosCard;
