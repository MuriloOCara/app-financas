import { db } from "./SQLite";

export function criaTabela() {
  db.transaction((tx) => {
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS user (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, imagem TEXT);"
    );
  });
}

export const create = (obj) => {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          "INSERT INTO user (nome, imagem) values (?,?)",
          [obj.nome, obj.imagem]
        ),
          () => {
            resolve("Sucesso adicionando user!");
          };
      });
    });
  };

  export const buscaContas = () => {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        //comando SQL modificável
        tx.executeSql(
          "SELECT * FROM user",
          [],
          //-----------------------
          (_, { rows }) => resolve(rows._array),
          (_, error) => reject(error) // erro interno em tx.executeSql
        );
      });
    });
  };
  


  export const excluirUser = (id) => {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          "DELETE FROM user WHERE id = ?;",
          [id],
          () => {
            resolve("Sucesso removendo user!");
          },
          (error) => {
            reject(error);
          }
        );
      });
    });
  };

  export const excluirTransacoes = (id) => {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          "DELETE FROM transacao WHERE id_user = ?;",
          [id],
          () => {
            resolve("Sucesso removendo user!");
          },
          (error) => {
            reject(error);
          }
        );
      });
    });
  };