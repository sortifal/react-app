import React, { ReactNode } from 'react';
import { Col, Row, Image } from 'antd';
interface Props {
  name: string;
  image: string;
  children: ReactNode;
}
const Project = ({ name, image, children }: Props) => {
  return (
    <>
      <Row>
        <Col span={12}>{name}</Col>
        <Col span={12}>
          <Image width={200} src={image} />
        </Col>
      </Row>
      <Row>
        <Col span={12}>{children}</Col>
      </Row>
    </>
  );
};

export default Project;
