import { Table } from "react-bootstrap";
import { Games } from "../../models";
import { GameRow } from "../GameRow/index";

export type TableGameProp = {
  items: Games,
  changeState?: (id: number, newState: boolean) => void
};

export const TableGame = (props: TableGameProp) => {
  const changeStateTableGame = (id: number, newState: boolean) => {
    if (typeof props.changeState !== 'undefined') {
      props.changeState(id, newState)
    }
  }
  const listRows = props.items.map((game) => (
    <GameRow
      key={game.id}
      id={game.id}
      characterName={game.persoChoisi.surname}
      success={game.success.toString()}
      changeState={changeStateTableGame}
    ></GameRow>
  ));

  const composant = (
    <>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Perso</th>
            <th>Gagnée ?</th>
            <th>Action(s)</th>
          </tr>
        </thead>
        <tbody>{listRows}</tbody>
      </Table>
    </>
  );
  // console.info("Table ?", composant);
  return composant;
};
