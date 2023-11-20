import { db } from "./SQLite";

export function criaTabela() {
  db.transaction((tx) => {
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS desejo (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, valor REAL, importancia INT, concluido BOOLEAN, id_user INTEGER , FOREIGN KEY (id_user) REFERENCES user(id));"
    );
  });
}

export const create = (obj) => {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          "INSERT INTO desejo (nome, valor, id_user, concluido, importancia) values (?,?, ?, ?, ?)",
          [obj.nome, obj.valor, obj.id_user, false, obj.importancia]
        ),
          () => {
            resolve("Sucesso adicionando desejo!");
          };
      });
    });
  };

  export const busca = (id) => {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        //comando SQL modificável
        tx.executeSql(
          "SELECT * FROM desejo WHERE id_user = ?",
          [id],
          //-----------------------
          (_, { rows }) => resolve(rows._array),
          (_, error) => reject(error) // erro interno em tx.executeSql
        );
      });
    });
  };

  export const excluirDesejo = (id) => {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          "DELETE FROM desejo WHERE id = ?;",
          [id],
          () => {
            resolve("Sucesso removendo desejo!");
          },
          (error) => {
            reject(error);
          }
        );
      });
    });
  };