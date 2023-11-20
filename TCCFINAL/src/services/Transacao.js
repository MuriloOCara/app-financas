import { db } from "./SQLite";

export function criaTabela() {
  db.transaction((tx) => {
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS transacao (id INTEGER PRIMARY KEY AUTOINCREMENT, valor REAL, categoria TEXT, texto TEXT, data TEXT, id_user INTEGER, FOREIGN KEY (id_user) REFERENCES user(id));"
    );
  });
}

export const create = (obj) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO transacao (valor, categoria, texto, data, id_user) values (?,?,?,?,?)",
        [obj.valor, obj.categoria, obj.texto, obj.data, obj.id_user]
      ),
        () => {
          resolve("Sucesso adicionando transacao!");
        };
    });
  });
};

export const busca = (id) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      //comando SQL modificável
      tx.executeSql(
        "SELECT * FROM transacao WHERE id_user = ?;",
        [id],
        //-----------------------
        (_, { rows }) => resolve(rows._array),
        (_, error) => reject(error) // erro interno em tx.executeSql
      );
    });
  });
};

export const deletar = (id) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "DELETE FROM transacao WHERE id = ?",
        [id],
        () => {
          resolve("Sucesso removendo transacao!");
        },
        (error) => {
          reject(error);
        }
      );
    });
  });
};

export const buscaRender = (date, id) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      //comando SQL modificável
      tx.executeSql(
        "SELECT * FROM transacao WHERE data=? AND id_user = ?",
        [date, id],
        //-----------------------
        (_, { rows }) => resolve(rows._array),
        (_, error) => reject(error) // erro interno em tx.executeSql
      );
    });
  });
};




export const atualizar = (obj, id) => {
  return new Promise((resolve) => {
    db.transaction((tx) => {
      tx.executeSql("UPDATE transacao SET valor=?, categoria=?, texto=?, data=? WHERE id=?;", [obj.valor, obj.categoria, obj.texto, obj.data, id], () => {
        resolve("Transacao atualizada com sucesso!")
      })
    })
  })
}

