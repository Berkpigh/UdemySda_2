// import { useEffect } from "react";
// import { Col, Row } from "react-bootstrap";
// import business from "../../../authentication/services/authentication.application";

// /**
//  * Composant de login
//   */
// export const LoginComponent = () => {
//   // const [list, setList] = useState<Games>([]);
//   const affichageTitre = true;

  // useEffect(() => {
  //   business.getAll().then((result) => {
  //     setList(result);
  //   });

  //   return () => {
  //     // fonction de cleanup
  //   };
  // }, []); // Appel qu'une seule fois après le rendu initial

  // const addGameCallback = () => {
  //   // list.push({
  //   // id: 18, persoChoisi: { surname: 'test' }, success: true
  //   //})

  //   const nouvelElement = {
  //     id: list.length + 1,
  //     persoChoisi: { surname: `test-${list.length + 1}` },
  //     success: true,
  //   };

  //   setList([nouvelElement, ...list]);
  // };

//   const changeStateListGame = (id: number, newState: boolean) => {
//     const newVersionList = [...list];
//     const element = newVersionList.find((item) => item.id === id);

//     if (element) {
//       element.success = newState;
//     }
//     setList(newVersionList);
//   };

//   const addGame = (
//     <Row>
//       <Col>
//         <button onClick={addGameCallback}>Nouvellle partie</button>
//       </Col>
//     </Row>
//   );

//   const monComposant = (
//     <>
//       {affichageTitre && <TitleGame></TitleGame>}
//       {addGame}
//       <Row>
//         <Col>
//           <button onClick={addGameCallback}>Nouvelle partie</button>
//         </Col>
//       </Row>
//       <Row>
//         <Col md={2}>
//           <TableGame items={list} changeState={changeStateListGame}></TableGame>
//         </Col>
//       </Row>
//     </>
//   );

//   // console.info(monComposant);

//   return monComposant;
// };
