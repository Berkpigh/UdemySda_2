// import { useState } from "react"
import { Row, Col } from "react-bootstrap";

export const TitleLogin = () => {
  // let title ="Liste des parties"
  // const [title, setTitle] = useState("Liste des parties")

  // const onClickToChangeTitle = () => {
  //     setTitle('Soyons fou !')
  //     // console.info(title)
  // }

  const component = (
    <>
      <Row>
        <Col>
          <h1>Login</h1>
        </Col>
      </Row>
      {/* <Row>
            <Col>
                <button onClick={onClickToChangeTitle}>Change title</button>
            </Col>
        </Row> */}
    </>
  );
  // console.info(component)
  return component;
};
